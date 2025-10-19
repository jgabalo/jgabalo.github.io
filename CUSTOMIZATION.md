# Customization Guide

## Quick Start Checklist

### 1. Personal Information (index.html)
- [ ] Line 11: Update page title
- [ ] Line 22: Replace "Your Name" with your actual name
- [ ] Line 23: Update your role/title
- [ ] Line 52: Update navbar brand name
- [ ] Line 73: Update your name in hero section
- [ ] Line 74: Update your professional title
- [ ] Line 75-76: Write your personal introduction

### 2. About Section (index.html)
- [ ] Lines 89-100: Write your about me content
- [ ] Line 106: Update your age
- [ ] Line 109: Update your location
- [ ] Line 112: Update your education
- [ ] Line 115: Update your email

### 3. Skills Section (index.html)
- [ ] Lines 130-230: Update skills and percentages
- [ ] Add or remove skill categories as needed
- [ ] Adjust progress bar widths (style="width: X%")

### 4. Projects Section (index.html)
- [ ] Lines 240-310: Update project titles, descriptions
- [ ] Update technology badges
- [ ] Add GitHub links (replace "#" with actual URLs)
- [ ] Add live demo links
- [ ] Replace placeholder images in assets folder

### 5. Experience Section (index.html)
- [ ] Lines 320-420: Update work experience
- [ ] Change dates, company names, job titles
- [ ] Update responsibilities and achievements
- [ ] Add or remove experience items as needed

### 6. Contact Section (index.html)
- [ ] Line 442: Update email address
- [ ] Line 448: Update location
- [ ] Line 454: Update LinkedIn URL
- [ ] Line 481: Update footer text with your name

### 7. Social Links (index.html)
- [ ] Line 36-44: Update social media URLs
  - GitHub: Replace "yourusername"
  - LinkedIn: Replace "yourusername"
  - Email: Replace "your.email@example.com"

### 8. Images (assets folder)
Replace placeholder images with your own:
- [ ] `profile.jpg` - Your profile picture (300x300px recommended)
- [ ] `project1.jpg` - First project screenshot (800x600px)
- [ ] `project2.jpg` - Second project screenshot (800x600px)
- [ ] `project3.jpg` - Third project screenshot (800x600px)

### 9. Colors (styles.css)
Edit CSS variables at the top of styles.css:
```css
:root {
  --primary-color: #0d6efd;  /* Change to your brand color */
  --dark-bg: #1a1a2e;        /* Sidebar dark color */
  --darker-bg: #16213e;      /* Sidebar gradient color */
}
```

### 10. Favicon (optional)
Add a favicon to your site:
```html
<!-- Add this to the <head> section in index.html -->
<link rel="icon" type="image/png" href="assets/favicon.png">
```

## Tips for Best Results

### Photography
- Use a professional headshot for your profile picture
- Make sure project screenshots are high quality
- Use consistent image dimensions for projects
- Compress images for faster loading

### Content Writing
- Keep descriptions concise and impactful
- Use action verbs in experience section
- Highlight measurable achievements
- Proofread all content carefully

### Testing
1. Test on different screen sizes (mobile, tablet, desktop)
2. Check all links work correctly
3. Test the contact form
4. Verify images load properly
5. Check on different browsers

### SEO Optimization
Add these meta tags to `<head>` in index.html:
```html
<meta name="description" content="Your Name - Full Stack Developer Portfolio">
<meta name="keywords" content="web developer, full stack, your skills">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your professional description">
<meta property="og:image" content="assets/profile.jpg">
```

## Deployment to GitHub Pages

1. Commit all your changes:
```bash
git add .
git commit -m "Initial portfolio setup"
```

2. Push to GitHub:
```bash
git push origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "main" branch as source
   - Click Save

4. Your site will be live at:
   `https://neoraltech.github.io/`

## Support

If you need help:
1. Check the README.md file
2. Review the code comments
3. Search for Bootstrap 5 documentation
4. Check browser console for errors

## Final Checklist Before Going Live
- [ ] All personal information updated
- [ ] All placeholder images replaced
- [ ] All links tested and working
- [ ] Contact form tested
- [ ] Responsive design checked
- [ ] Grammar and spelling checked
- [ ] Social media links verified
- [ ] SEO meta tags added
- [ ] Site tested on multiple devices
- [ ] Performance optimized

Good luck with your portfolio! ??
