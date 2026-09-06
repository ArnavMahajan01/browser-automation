# 02 — CLAUDE.md Symlink

**Date:** Sep 6, 2026 — 7:35 AM

## What changed

- Created `CLAUDE.md` as a symbolic link pointing to `AGENTS.md`
- This means both Claude Code and Cursor read the same agent guidance rules from one file
- No duplicate content to maintain

## Why

Agent tools (Claude Code, Cursor) look for different filenames. The symlink keeps a single source of truth.
