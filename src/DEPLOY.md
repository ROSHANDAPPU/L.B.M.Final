# 🚀 Deploy to GitHub Pages

## Quick Start

Your repository: **https://github.com/ROSHANDAPPU/L.B.M.Catering**

### 1️⃣ Push to GitHub

Run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit - La Bella Mesa catering website"
git remote add origin https://github.com/ROSHANDAPPU/L.B.M.Catering.git
git branch -M main
git push -u origin main
```

### 2️⃣ Enable GitHub Pages

1. Go to: https://github.com/ROSHANDAPPU/L.B.M.Catering/settings/pages
2. Under "Source", select: **GitHub Actions**
3. Wait 2-3 minutes for deployment

### 3️⃣ View Your Live Site

**https://roshandappu.github.io/L.B.M.Catering/**

---

## ✅ Configuration Status

All files are configured and ready:

- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `.gitignore` - Git ignore rules
- ✅ `vite.config.ts` - Base path set to `/L.B.M.Catering/`
- ✅ `public/logo-light.svg` - Logo files ready
- ✅ `public/logo-dark.svg` - Logo files ready

---

## 🔄 Update Your Site Later

After making changes:

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

GitHub will automatically rebuild and redeploy.

---

## 📊 Monitor Deployment

Watch the build process:
https://github.com/ROSHANDAPPU/L.B.M.Catering/actions

Green checkmark = Site is live! ✅

---

## 🆘 Need Help?

See `/TROUBLESHOOTING.md` for common issues and solutions.
