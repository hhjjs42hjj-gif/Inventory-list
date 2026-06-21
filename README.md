# House Inventory

Static inventory website for the house. The site works from GitHub Pages and can publish shared inventory updates back to GitHub through the admin panel.

## Files

- `index.html` - page structure
- `styles.css` - layout and visual styling
- `app.js` - hardwired inventory, add-item flow, and GitHub publishing
- `inventory-data.json` - created by the admin publish workflow after the first publish

## GitHub Pages Setup

1. Create a public GitHub repository, for example `inventory-list`.
2. Upload `index.html`, `styles.css`, `app.js`, and this `README.md`.
3. In GitHub, open the repository and go to Settings -> Pages.
4. Choose Deploy from a branch.
5. Choose branch `main` and folder `/ root`.
6. Save. GitHub will give you a URL like `https://your-username.github.io/inventory-list/`.

## Admin Publish Setup

To make items added on the website appear for every device, publish them from the GitHub Admin Sync panel.

1. Create a fine-grained personal access token in GitHub.
2. Limit the token to only the inventory repository.
3. Give it Contents read/write permission.
4. Open the published inventory site.
5. In GitHub Admin Sync, enter:
   - Owner: your GitHub username
   - Repository: the repository name, such as `inventory-list`
   - Branch: `main`
   - Data path: `inventory-data.json`
   - GitHub token: the token you created
6. Click Publish to GitHub.

The token is used only in your browser for that publish action. The page does not save it.

After the first publish, the website loads `inventory-data.json` first. That means every device sees the same published inventory.
