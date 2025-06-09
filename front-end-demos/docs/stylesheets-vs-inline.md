# Separate stylesheet files vs inline CSS

## Separate stylesheet files

Pros

- Re-usable across pages, apps, etc.
- Can be cached and re-used by the browser
- Easier to manage for version control (changes to stylesheets are recorded separately from changes to HTML)
- Can be optimized by build tools

Cons

- Cost an extra HTTP request (not a lot, but still some overhead)
  - Mitigated by the amount of CSS info in a file: the bigger the stylesheet, the less effect another HTTP request has

## Inline CSS blocks

Pros

- Faster to load, no extra HTTP request
- Can be optimized by build tools

Cons

- Not reusable across pages
- Doesn't separate HTML, CSS, JS into separate files
