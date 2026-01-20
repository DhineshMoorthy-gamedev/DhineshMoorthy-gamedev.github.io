---
description: Steps to create a new blog post in the Terminal Dreams style.
---

# Create New Blog Post Workflow

Use this workflow to create a new blog entry that matches the existing "Terminal Dreams" aesthetic.

## Prerequisites
- Familiarize yourself with the structure of `blogs/addressables/` as the primary reference.

## Steps

### 1. Initialize Folder Structure
Create a new folder for the blog and a `Content` subfolder for assets.
- `mkdir blogs/[blog-id]`
- `mkdir blogs/[blog-id]/Content`

### 2. Create Blog Files
Create the following files in `blogs/[blog-id]/`:

#### [blog-id].html
Copy the boilerplate from `blogs/addressables/addressables.html`.
- Update the `<title>` and `<h1>` tags.
- Update the meta information (Date, Read time).
- Ensure the **Back to Top** button link and its `<script>` block are included.
- Add download buttons if applicable.
- Update image paths to point to `./Content/...`.

#### [blog-id].css
Copy styling patterns from `blogs/addressables/addressables.css`.
- Customize colors if a unique theme is desired for the post (e.g., changing the linear-gradient in `body` or `header`).
- **Do not** redefine `.back-to-top` unless you need a unique look; it is already defined globally in `index.css`.

#### [blog-id].js
Copy the boilerplate from `blogs/addressables/addressables.js`.
- Ensure standard functions like `toggleCode` and `copyCode` are present.

### 3. Add Consistent Footer
Ensure the footer at the bottom of the `<body>` is consistent with other blogs:
```html
<footer class="footer mt-5">
    <p class="mb-0 small text-secondary text-mono">© 2026 · Built with <i class="fas fa-code text-neon-green"></i> & <i class="fas fa-heart text-hot-pink"></i> by Dhinesh Moorthy</p>
    <p class="small text-secondary text-mono mt-2">Questions or feedback? Feel free to reach out!</p>
</footer>
```

### 4. Add to Blog Listing
Update `blog.html` at the root to include a new entry in the `.blog-grid` section.
- Use the `<article class="blog-card">` template.
- Provide a thumbnail image in `blogs/[blog-id]/Content/Multimedia/thumbnail.png`.
- Link to `blogs/[blog-id]/[blog-id].html`.

### 4. Verification
- Open `blog.html` in a browser and verify the card appears.
- Click the card to ensure navigation to the new blog page works.
- Verify that the "Back to Top" button and code snippets function correctly.
