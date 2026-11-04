# NovaByte Lab – Official Studio & Portfolio Website

Official high-performance, dark-theme website for **NovaByte Lab** (Google Play Developer Studio).

## 📁 Project Structure

```
novabyte_lab_website/
├── index.html                  # Main Studio & Portfolio Portal
├── privacy.html                # General Studio Privacy Policy
├── privacy-subvexo.html        # Dedicated SubVexo Privacy Policy (com.subsy.app)
├── privacy-vitalpulse.html     # Dedicated VitalPulse Privacy Policy
├── app-ads.txt                 # Google AdMob Verification (pub-7874781339726642)
├── style.css                   # Ultra-Pro 2026 Dark Theme Stylesheet
├── script.js                   # Interactive UI (copy email, mobile nav, hover glow)
└── assets/
    ├── subvexo_icon.png        # High-res SubVexo app icon
    └── bp_tracker_icon.png     # High-res VitalPulse app icon
```

---

## 🚀 How to Publish to a New GitHub Repository

When you are ready to publish this website to a new repository on GitHub:

### Step 1: Create a New Repo on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter your repository name (e.g. `novabyte-lab` or `novabyte-studio`).
3. Set it to **Public**.
4. Click **Create repository**.

### Step 2: Push this Code to your New Repo
Open terminal / command prompt in this directory (`e:\Projects\novabyte_lab_website`):

```bash
cd "e:\Projects\novabyte_lab_website"
git init
git add .
git commit -m "Initial commit: NovaByte Lab Studio Website"
git branch -M main
git remote add origin https://github.com/ranu02769/YOUR_NEW_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (Free Hosting)
1. Go to your new repository on GitHub -> **Settings** -> **Pages** (in left sidebar).
2. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
3. Click **Save**.
4. Your website will be live at `https://ranu02769.github.io/YOUR_NEW_REPO_NAME/` within 60 seconds!

