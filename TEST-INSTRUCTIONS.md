# Testing Instructions

## Quick Test - Open in Browser

1. **Double-click** `index.html` in File Explorer
2. Or **drag and drop** `index.html` into your browser
3. The page should automatically:
   - Show "Connecting..." message
   - Attempt to auto-fill (likely will fail due to CORS)
   - Show clipboard fallback with password
   - Redirect to yellow-antelope-dtlb.squarespace.com

## What to Look For

✅ **Success Signs:**
- Page loads with purple gradient background
- "Quick Access" title appears
- Spinner shows while connecting
- Either auto-fills or shows "Password copied!" message
- Password displays in gray box: `123456789eee`
- Page redirects after 2 seconds
- On Squarespace site, password should be in your clipboard ready to paste

❌ **If Something Goes Wrong:**
- Check browser console for errors (F12)
- Ensure internet connection is active
- Try different browser (Chrome, Firefox, Edge)
- Clear browser cache and retry

## Advanced Testing

### Test Locally with Python Server
```powershell
cd "c:\Users\chase\OneDrive\Desktop\Business\test3 CL"
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Test Deployment
1. Push code to GitHub
2. Connect to Netlify
3. Access via your Netlify URL

## Expected Behavior

**Timeline:**
- **0.0s**: Page loads, shows "Connecting..."
- **0.5s**: Attempts immediate redirect (some sites allow this)
- **1.0s**: Iframe loads, attempts auto-fill (blocked by CORS)
- **2.0s**: Clipboard fallback activates, password copied
- **4.0s**: Auto-redirects to Squarespace
- **User**: Pastes password (Ctrl+V / Cmd+V) and clicks submit

## Browser Requirements

Works on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (with minor clipboard limitations)

## Security Testing

To verify security:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Check that no external resources loaded without permission
4. Check Console for any errors
5. Verify CSP is working (no inline scripts from external sources)

## Troubleshooting

**Password not copying:**
- Some browsers require HTTPS for clipboard API
- Try deploying to Netlify (gets HTTPS automatically)
- Fallback: Password is displayed on screen for manual copy

**Not redirecting:**
- Check if Squarespace site is accessible
- Check browser popup blocker settings
- Try clicking the password on screen manually

**App looks broken:**
- Clear browser cache
- Try incognito/private mode
- Check browser console for JavaScript errors

## Live Demo

Once deployed to Netlify, share the URL:
- Example: `https://your-app-name.netlify.app`
- Users can visit and it should work immediately

