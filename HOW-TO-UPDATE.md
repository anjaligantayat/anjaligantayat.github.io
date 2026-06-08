# How to update your website ♡

A quick guide for adding new content — no coding knowledge needed!

---

## First: how to open and edit files

Double-clicking an HTML file opens it in your **browser** — that's read-only. To actually edit the file, you need a **text editor**. Two options:

**Option A — TextEdit (already on your Mac, no install)**
1. Right-click the file in Finder
2. Hover over **Open With → TextEdit**
3. Once open, go to **Format → Make Plain Text** (important — do this every time)
4. Make your edits, then save with **Cmd+S**

**Option B — VS Code (recommended, free)**
VS Code is the standard tool for editing websites. It color-codes HTML so it's much easier to read and edit.
1. Download free at: https://code.visualstudio.com
2. Open VS Code → **File → Open Folder** → select your `YT-Website` folder
3. Click any file in the left sidebar to open and edit it
4. **Cmd+S** to save — that's it!

---

## Saving your profile picture

1. Save your image file into the `images/` folder
2. Name it `profile.png` (or whatever name you used)
3. Done! It'll show on the homepage automatically.

---

## Writing a new blog post

1. Open the `blog/` folder
2. Make a **copy** of `template.html`
3. Rename the copy to something like `2026-06-08-my-thoughts.html`
   - Format: `YYYY-MM-DD-short-title.html`
4. Open your new file and fill in:
   - The `<title>` tag at the top
   - The date in `<div class="blog-date">`
   - The title in `<h1 class="page-title">`
   - Your post content (write inside `<p>` tags)
5. Open `blog.html` and **copy** the "POST PREVIEW" block
6. Paste it at the **very top** of the `blog-list` div
7. Update the date, title, excerpt, and the `href` link to match your new file

---

## Adding a song

1. Save the cover art image into `images/songs/` — name it something like `song-name.png`
2. Open `songs.html`
3. Find the `<!-- SONG START -->` block at the top of the list
4. Copy that whole block (from `<!-- SONG START -->` to `<!-- SONG END -->`)
5. Paste it **above** the existing first song
6. Update the `img src` to your cover art file (e.g. `images/songs/song-name.png`)
7. Update the number, song title, artist name, little note, and the link (`href`)
8. Update the numbers on all the other songs below so they stay in order

If you don't have cover art yet, leave the `src` as `images/songs/placeholder.png` — it'll show a soft pink box until you add one.

---

## Adding media (anime, manga, shows, etc.)

1. Open `media.html`
2. Find the first `<!-- ── ENTRY 1 ──` block
3. Copy the whole `<div class="card media-card">` block
4. Paste it at the top of the `grid-2` div
5. Update the badge type, title, star rating (★), and your review text

---

## Adding a character

1. Save their image into `images/characters/` — name it something like `character-name.png`
2. Open `characters.html`
3. Copy a `<!-- ── CHARACTER ──` block
4. Paste it anywhere in the `grid-3` div
5. Update the image `src`, `alt`, `char-name`, and `char-series`

---

## Adding art

1. Save your image into `images/art/`
2. Open `art.html`
3. Copy a `<!-- ── ART PIECE ──` block
4. Paste it anywhere in the `gallery-grid` div
5. Update the image `src` (in both the `<img>` tag AND the `onclick` part) and the caption

---

## Adding a game

1. Save the game's cover art into `images/games/` — name it something like `genshin.png`
2. Open `games.html`
3. Copy a `<!-- ── GAME ──` block
4. Paste it anywhere in the `grid-3` div
5. Update the image `src`, game title, and platform name

---

## Adding an outfit photo

1. Save your photo into `images/outfits/`
2. Open `outfits.html`
3. Copy a `<!-- ── OUTFIT ──` block
4. Paste it anywhere in the `gallery-grid` div
5. Update the image `src` (in both the `<img>` tag AND the `onclick` part) and the caption

---

## Updating the "currently" section on the homepage

1. Open `index.html`
2. Find the `<!-- ── CURRENTLY SECTION ──` comment
3. Change the text inside each `<div class="currently-value">` tag

---

## Updating your bio

1. Open `index.html`
2. Find `<p class="hero-bio">`
3. Replace the placeholder text with your bio

---

## Pushing updates to GitHub

Once your website is on GitHub:
1. Save your file changes
2. Open Terminal
3. Run: `cd /path/to/your/website`
4. Run: `git add .`
5. Run: `git commit -m "update site"`
6. Run: `git push`

Your site will update live within a minute or two!
