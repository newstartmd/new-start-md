# Security Policy

## Reporting a vulnerability

Email **security@rothandroth.net** with details. Please do not open a public
issue for security reports.

## Scope

This repository is the **New Start MD marketing + partner site** — a PHI-free
zone. It collects only form submissions (name, contact, stated goal, partner
applications) and loads no advertising or analytics pixels. This is enforced in
CI by the `PHI-free zone guard` job.

Protected health information and prescribing live only in the separate patient
application, backed by GEN Health, on a different host and under its own
controls. Nothing in this repo should ever store or transmit PHI.
