Mis Hà English — CMS mini (admin + public)
Repo target example: https://github.com/computerchicuong-stack/misha-english
Place the files in repo root and ensure GitHub Pages is enabled (root branch).

Files included:
- index.html (public)
- admin.html (admin editor, password protected)
- data/data.json (initial content)
- assets/style.css, assets/logo-demo.png, assets/banner.jpg
- scripts/main.js (public renderer), scripts/admin.js (admin editor + GitHub save)

Quick usage:
1. Upload all files/folders to your GitHub repo (root). Enable Pages if not yet.
2. Open: https://computerchicuong-stack.github.io/misha-english/admin.html
3. Enter admin password: Admin.123
4. Enter GitHub Username (owner) and Repo (misha-english) and path (data/data.json).
5. Optionally enter a Personal Access Token with 'repo' permission to allow saving.
   - If you don't enter token, you can still load current data.json.
6. Edit schedule, students, news using the form, then click "Lưu dữ liệu lên GitHub".
   - On save, the script PUTs to GitHub API to update data/data.json in your repo.
7. Wait a minute and refresh your public page: https://computerchicuong-stack.github.io/misha-english/

Security notes:
- Keep your token private. You can create a new token for this purpose and revoke later.
- The admin uses a simple password on the client for UI hiding; it's not a secure auth method.
- For production, consider server-side admin or OAuth flow.

If you want, I can also push these files into your repo directly (if you provide temporary access) or guide you step-by-step.
