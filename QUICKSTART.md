# Quick Start Guide ??

Welcome to your new portfolio website! Here's how to get started in 5 minutes.

## Step 1: Preview Your Site Locally

Open `index.html` in your web browser to see your portfolio.

**Option A: Double-click**
- Simply double-click the `index.html` file

**Option B: VS Code Live Server**
- Right-click on `index.html`
- Select "Open with Live Server"

## Step 2: Replace Basic Information

Open `index.html` and search for these terms to replace:

1. **"Your Name"** (appears 4 times) - Replace with your actual name
2. **"Developer | Designer"** - Replace with your title
3. **"your.email@example.com"** - Replace with your email
4. **"yourusername"** - Replace in GitHub/LinkedIn URLs

## Step 3: Add Your Photos

Add these images to the `assets/` folder:
- `profile.jpg` - Your profile picture
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Your project screenshots

## Step 4: Customize Content

### About Section
- Update your personal story
- Change your age, location, education

### Skills Section
- Update skill percentages
- Add/remove skills as needed

### Projects Section
- Replace project titles and descriptions
- Update technology badges
- Add your GitHub/demo links

### Experience Section
- Add your work history
- Update job titles and dates
- List your achievements

## Step 5: Deploy to GitHub Pages

```bash
# Add all files
git add .

# Commit your changes
git commit -m "Setup my portfolio"

# Push to GitHub
git push origin main
```

Then enable GitHub Pages:
1. Go to your repository on GitHub
2. Click **Settings** ? **Pages**
3. Under "Source", select **main** branch
4. Click **Save**

Your site will be live at: `https://neoraltech.github.io/`

## Need More Help?

- **Full guide**: See `CUSTOMIZATION.md`
- **Technical details**: See `README.md`
- **Assets guide**: See `assets/README.md`

## Color Customization

Want to change the blue theme? Edit `styles.css` line 2:
```css
--primary-color: #0d6efd; /* Change this hex color */
```

Popular alternatives:
- Purple: `#6f42c1`
- Green: `#198754`
- Red: `#dc3545`
- Orange: `#fd7e14`

## Quick Test Checklist

Before deploying, check:
- ? All "Your Name" placeholders replaced
- ? Email and social links updated
- ? Profile picture added
- ? At least one real project added
- ? All sections reviewed
- ? Mobile view tested (resize browser)

## That's It!

You're ready to share your portfolio with the world! ??

Remember: Your portfolio is never "finished" - keep updating it as you grow!
