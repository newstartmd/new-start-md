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
    slug,
    title: data.title,
    description: data.description || "",
    date: data.date || "",
    author: data.author || "New Start MD",
    image: data.image || "",
    imageAlt: data.imageAlt || "",
    metaTitle: data.metaTitle || data.title,
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

function inline(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[\s(])\*([^*]+)\*(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
}

/** Small markdown subset: paragraphs, ## / ###, lists, links, emphasis. No raw HTML. */
export function renderMarkdown(source: string): string {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    out.push(`<p>${inline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    out.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
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
      const level = heading[1].length;
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
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
  return out.join("\n");
}
