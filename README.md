# Quick Access - Password Assisted Redirect

A simple, lightweight web application that helps users quickly access password-protected Squarespace sites.

## Features

- **Auto-fill attempt**: Attempts to automatically fill the password field on the target site
- **Graceful fallback**: If auto-fill is blocked (due to browser security), copies password to clipboard and redirects
- **Clean UI**: Modern, professional design with loading states
- **Mobile responsive**: Works on all devices

## How It Works

1. **Attempt 1**: Tries to load the target site in an iframe and auto-fill the password
2. **Attempt 2**: If iframe approach is blocked by CORS, falls back to:
   - Copying password to clipboard automatically
   - Showing simple paste instructions
   - Redirecting to the target site

## Security Notes

⚠️ **IMPORTANT**: The password is hardcoded in the client-side JavaScript. This means:
- The password will be visible to anyone who views the source code
- The password will be publicly visible when deployed to GitHub/Netlify
- This approach is suitable for:
  - Temporary passwords that will be changed regularly
  - Internal testing environments
  - Non-sensitive content

**Production Recommendation**: Change the target site's password regularly or implement proper authentication.

## Deployment to Netlify

### Option 1: Deploy via GitHub

1. Push this repository to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will automatically detect the `index.html` file
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 3: Drag & Drop

1. Go to [Netlify](https://www.netlify.com/)
2. Drag and drop the folder containing `index.html` onto the deployment area
3. Your site will be live in seconds!

## Customization

To change the target URL or password, edit `index.html`:

```javascript
const TARGET_URL = 'https://your-site.squarespace.com';
const PASSWORD = 'your-password';
```

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Troubleshooting

**Issue**: Password not auto-filling
- **Solution**: This is expected for most Squarespace sites due to browser security. Use the clipboard fallback method.

**Issue**: Clipboard not copying on mobile
- **Solution**: Tap the password shown on screen and paste manually.

## License

MIT

## Contributing

Feel free to submit issues or pull requests!

