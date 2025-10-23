# 🔧 Troubleshooting Guide - La Bella Mesa Website

## Common Issues & Solutions

---

## 🚨 Build Errors

### Error: "Cannot find module 'figma:asset/...'"

**Cause**: You haven't replaced Figma asset imports with local images.

**Solution**:
1. See `FIGMA-ASSETS-TO-REPLACE.md` for detailed instructions
2. Or run the automated fix: `node fix-imports.js`
3. Make sure images exist in `public/images/` folder

**Quick Fix**:
```typescript
// Replace this:
import logo from 'figma:asset/xxxxx.png';

// With this:
const logo = '/images/logo-light.png';
```

---

### Error: "Module not found: Can't resolve './components/...'"

**Cause**: File path is incorrect or file doesn't exist.

**Solution**:
1. Check the file exists in the correct location
2. Verify the import path matches exactly (case-sensitive)
3. Check for typos in the file name

**Example**:
```typescript
// Wrong (capital C)
import { header } from './Components/Header';

// Correct (lowercase c)
import { Header } from './components/Header';
```

---

### Error: "TypeScript error: Cannot find name..."

**Cause**: Missing import or typo in variable name.

**Solution**:
1. Check if you imported the component/function
2. Verify spelling is correct
3. Make sure TypeScript definitions exist

---

## 🖼️ Image Issues

### Images not showing on deployed site

**Cause 1**: Image paths are incorrect

**Solution**:
```typescript
// Wrong
const image = './images/logo.png';
const image = '../public/images/logo.png';

// Correct
const image = '/images/logo.png';  // Note the leading slash
```

**Cause 2**: Images not in `public/` folder

**Solution**:
- Images must be in `public/images/`
- NOT in `src/images/`
- NOT in root folder

**Cause 3**: File names don't match

**Solution**:
```typescript
// Code says:
const logo = '/images/logo-light.png';

// But file is named:
logo-Light.png  // ❌ Wrong case
logo_light.png  // ❌ Underscore instead of dash

// Fix: Rename file to exactly match code
```

---

### Images work locally but not on deployed site

**Cause**: Figma asset imports still in code

**Solution**:
1. Search entire codebase for `figma:asset`
2. Replace all occurrences with local paths
3. Rebuild and redeploy

**Terminal command**:
```bash
# Search for remaining Figma imports
grep -r "figma:asset" components/ pages/
```

---

## 🌐 Deployment Issues

### Vercel: Build fails with "Command failed: npm run build"

**Solution**:
1. Check build logs for specific error
2. Test build locally first:
   ```bash
   npm install
   npm run build
   ```
3. Fix any errors shown
4. Push changes to GitHub
5. Vercel will auto-redeploy

---

### Netlify: "Build failed" or "Deploy failed"

**Solution**:
1. Go to Netlify dashboard → Deploys → Failed deploy
2. Click "Deploy log" to see error
3. Common issues:
   - Missing `package.json`
   - Wrong build command
   - Missing dependencies
4. Fix and push to GitHub

---

### GitHub Pages: 404 error on all pages

**Cause**: Base path not configured correctly

**Solution**:
Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/la-bella-mesa-catering/', // Your repo name
});
```

Then rebuild and redeploy.

---

### Site shows blank white page

**Cause 1**: JavaScript error preventing app from loading

**Solution**:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for red error messages
4. Fix the error shown

**Cause 2**: Base path is incorrect

**Solution**:
For Vercel/Netlify:
```typescript
base: '/'  // Root path
```

For GitHub Pages:
```typescript
base: '/repository-name/'
```

---

## 🔄 Git/GitHub Issues

### Error: "fatal: not a git repository"

**Solution**:
```bash
# Initialize git in your project folder
git init
```

---

### Error: "remote origin already exists"

**Solution**:
```bash
# Remove old remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR_USERNAME/la-bella-mesa-catering.git
```

---

### Error: "Permission denied (publickey)"

**Cause**: SSH keys not set up or using wrong URL

**Solution**:
Use HTTPS URL instead:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/la-bella-mesa-catering.git
```

---

### Can't push to GitHub: "Updates were rejected"

**Solution**:
```bash
# Pull latest changes first
git pull origin main --allow-unrelated-histories

# Then push
git push origin main
```

---

## 📱 Responsive Design Issues

### Site looks broken on mobile

**Cause**: Tailwind responsive classes not working

**Solution**:
1. Check if you're using responsive prefixes:
   ```tsx
   // Wrong
   <div className="w-800px">
   
   // Correct
   <div className="w-full md:w-800">
   ```

2. Test in browser DevTools:
   - F12 → Toggle device toolbar (Ctrl+Shift+M)
   - Select different screen sizes

---

### Header overlapping content

**Cause**: Fixed positioning with missing padding

**Solution**:
Add top padding to first section:
```tsx
<section className="pt-20 md:pt-24">
```

---

## 🎨 Styling Issues

### Tailwind classes not working

**Cause 1**: Missing Tailwind CSS import

**Solution**:
Check `styles/globals.css` has:
```css
@import "tailwindcss";
```

**Cause 2**: Tailwind plugin not in Vite config

**Solution**:
Check `vite.config.ts` has:
```typescript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

### Custom colors not working

**Cause**: Using wrong color format

**Solution**:
```tsx
// Wrong
<div className="bg-cream">

// Correct - use actual hex value
<div className="bg-[#EFE3D7]">
```

---

## 🔌 Dependencies Issues

### Error: "Cannot find module 'react'"

**Solution**:
```bash
# Install all dependencies
npm install

# If that doesn't work, delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

### Error: "npm: command not found"

**Cause**: Node.js not installed

**Solution**:
1. Download Node.js from nodejs.org
2. Install (choose LTS version)
3. Restart terminal
4. Verify: `node --version`

---

## 🚫 Page Not Found (404) Errors

### Menu page shows 404 on refresh

**Cause**: Server doesn't know how to handle client-side routing

**Solution for Vercel**: Already handled by `vercel.json`

**Solution for Netlify**:
Create `public/_redirects` file:
```
/*    /index.html   200
```

**Solution for GitHub Pages**: Use hash routing or configure properly

---

## 🐛 React/JavaScript Errors

### Error: "Rendered fewer hooks than expected"

**Cause**: Conditional hooks or hooks inside loops

**Solution**:
```typescript
// Wrong
if (condition) {
  const [state, setState] = useState();
}

// Correct
const [state, setState] = useState();
if (condition) {
  // use state here
}
```

---

### Error: "Cannot read property '...' of undefined"

**Cause**: Trying to access property of undefined variable

**Solution**:
Use optional chaining:
```typescript
// Wrong
const name = user.profile.name;

// Correct
const name = user?.profile?.name;
```

---

## 📧 Contact Form Issues

### Form doesn't submit

**Cause**: Form is mock/demo (no backend)

**Expected behavior**: 
- Form shows success message
- Data is NOT actually sent anywhere
- This is a frontend-only demo

**To make it real**:
You need to add a backend service like:
- Formspree
- EmailJS
- Netlify Forms
- Custom API

---

## 🔍 Debugging Tips

### How to debug build errors

1. **Read the error message carefully**
   - Error usually tells you exactly what's wrong
   - Note the file name and line number

2. **Check build logs**
   - Vercel/Netlify shows full build output
   - Look for the first error (ignore subsequent errors)

3. **Test locally first**
   ```bash
   npm run build
   ```
   - If it works locally, issue is with deployment config
   - If it fails locally, fix the code error

4. **Use browser DevTools**
   - F12 → Console tab
   - Look for red errors
   - Click error to see stack trace

---

## 📊 Performance Issues

### Site loads slowly

**Solutions**:
1. **Optimize images**:
   - Use WebP format instead of PNG
   - Compress images (TinyPNG.com)
   - Resize large images

2. **Check bundle size**:
   ```bash
   npm run build
   # Look at size of dist/assets/*.js
   ```

3. **Use lazy loading** for images:
   ```tsx
   <img loading="lazy" src="..." />
   ```

---

## 🆘 Still Having Issues?

### Before asking for help:

1. ✅ Read error message carefully
2. ✅ Check this troubleshooting guide
3. ✅ Search error message on Google
4. ✅ Check Vercel/Netlify documentation
5. ✅ Verify all files in `DEPLOYMENT-CHECKLIST.md`

### When asking for help, provide:

- ✅ Exact error message (copy/paste)
- ✅ What you were trying to do
- ✅ What you've tried already
- ✅ Screenshots if relevant
- ✅ Link to your GitHub repository

---

## 🔗 Useful Resources

- **Vercel Support**: https://vercel.com/support
- **Netlify Support**: https://www.netlify.com/support/
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Stack Overflow**: https://stackoverflow.com

---

## ✅ Quick Checks

If something's wrong, check these first:

- [ ] All `figma:asset` imports removed
- [ ] Images exist in `public/images/`
- [ ] `npm install` completed successfully
- [ ] `npm run build` works locally
- [ ] Git repository connected to GitHub
- [ ] Latest code pushed to GitHub
- [ ] No console errors in browser DevTools

---

**Most issues are simple fixes! Check the error message and this guide carefully.** 🔍

**Good luck!** 🚀
