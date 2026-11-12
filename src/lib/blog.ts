// File-backed blog. MEGA publishes one markdown file per post into content/blog.
// This loader is the only reader. /learn stays a separate, hardcoded education hub.

import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  draft: boolean;
  body: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/** Frontmatter is author-controlled text. Escape it before it reaches JSX. */
export function escapeText(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    if (!key) continue;
    data[key] = stripQuotes(line.slice(sep + 1));
  }
  return { data, body: match[2] };
}

function toPost(fileName: string, raw: string): BlogPost | null {
  if (!fileName.endsWith(".md")) return null;
  const { data, body } = parseFrontmatter(raw);
  const slug = (data.slug || fileName.replace(/\.md$/, "")).trim();
  if (!slug || !data.title) return null;
  const draft = (data.draft || "").toLowerCase() === "true";
  return {
    slug: escapeText(slug),
    title: escapeText(data.title),
    description: escapeText(data.description || ""),
    date: escapeText(data.date || ""),
    author: escapeText(data.author || "New Start MD"),
    image: escapeText(data.image || ""),
    imageAlt: escapeText(data.imageAlt || ""),
    metaTitle: escapeText(data.metaTitle || data.title),
    draft,
    body: body.trim(),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => name.endsWith(".md"))
    .map((name) => toPost(name, fs.readFileSync(path.join(CONTENT_DIR, name), "utf8")))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
}

/** Posts that render. draft: true stays in the repo and off the site. */
export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => !post.draft);
}

export function getPost(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((post) => post.slug === slug);
}

export type InlinePart =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "em"; text: string }
  | { type: "link"; text: string; href: string };

export type Block =
  | { type: "p"; parts: InlinePart[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: InlinePart[][] };

function parseInline(text: string): InlinePart[] {
  const parts: InlinePart[] = [];
  const re = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^*]+)\*\*|(^|[\s(])\*([^*]+)\*(?=[\s).,;:!?]|$)/g;
  let cursor = 0;
  for (const match of text.matchAll(re)) {
    const start = match.index ?? 0;
    if (start > cursor) parts.push({ type: "text", text: text.slice(cursor, start) });
    if (match[1] && match[2]) {
      parts.push({ type: "link", text: match[1], href: match[2] });
      cursor = start + match[0].length;
    } else if (match[3]) {
      parts.push({ type: "strong", text: match[3] });
      cursor = start + match[0].length;
    } else if (match[5]) {
      if (match[4]) parts.push({ type: "text", text: match[4] });
      parts.push({ type: "em", text: match[5] });
      cursor = start + match[0].length;
    } else {
      cursor = start + match[0].length;
    }
  }
  if (cursor < text.length) parts.push({ type: "text", text: text.slice(cursor) });
  return parts.length ? parts : [{ type: "text", text }];
}

/** Small markdown subset: paragraphs, ## / ###, lists, links, emphasis. No raw HTML. */
export function parseMarkdown(source: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "p", parts: parseInline(paragraph.join(" ")) });
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    blocks.push({ type: "ul", items: list.map(parseInline) });
    list = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }
    const heading = /^(#{2,3})\s+(.+)$/.exec(trimmed);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ type: heading[1].length === 2 ? "h2" : "h3", text: heading[2] });
      continue;
    }
    const item = /^[-*]\s+(.+)$/.exec(trimmed);
    if (item) {
      flushParagraph();
      list.push(item[1]);
      continue;
    }
    flushList();
    paragraph.push(trimmed);
  }
  flushParagraph();
  flushList();
  return blocks;
}
