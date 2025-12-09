# Krado Life Design System Documentation

Welcome to the **Krado Life Design System** documentation site! This is the official documentation for the Krado UI component library and design tokens.

## 🚀 About

This project is a modern **Astro** site that serves as the landing page and documentation hub for the **Krado Life Design System**. It consumes components and design tokens from the local `krado-ui` package.

## 📋 Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- Local `krado-ui` package linked via npm

## 🛠️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/akrade/krado-design-docs.git
cd krado-design-docs
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Link Local `krado-ui` Package

If you're developing with a local `krado-ui` package, ensure the krado-ui directory exists at the same level as this project, then install normally:

```bash
npm install
```

The `package.json` is already configured to use the local package via `file:../krado-ui`.

**Alternatively, if you want to use `npm link`:**

```bash
# Navigate to krado-ui directory and build it
cd ../krado-ui
npm install
npm run build

# Link the package globally
npm link

# Return to krado-design-docs and link it
cd ../krado-design-docs
npm install
npm link krado-ui
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000` (or the port displayed in the terminal).

### File Structure

```
src/
├── layouts/
│   └── BaseLayout.astro         # Main layout with global styles
├── pages/
│   └── index.astro              # Coming soon landing page
├── components/
│   ├── Header.jsx               # Navigation header (Astro Island)
│   ├── CommingSoon.jsx          # Coming soon section (Astro Island)
│   ├── KradoButton.jsx          # Button component
│   └── KradoHeader.jsx          # Header component
astro.config.mjs                 # Astro configuration
tsconfig.json                    # TypeScript configuration
package.json                     # Dependencies and scripts
```

## 🎨 Design Tokens

The site uses Krado UI design tokens for consistent styling. Tokens are imported from:

```javascript
import 'krado-ui/dist/styles/tokens.css';
```

Available token categories:
- **Colors**: `--krado-color-*` (surfaces, text, borders, etc.)
- **Spacing**: `--krado-spacing-*` (sm, md, lg, xl, 2xl, 3xl, 4xl)
- **Typography**: `--krado-font-size-*`, `--krado-font-weight-*`
- **Shadows**: `--krado-shadow-*` (sm, md, lg)
- **Border Radius**: `--krado-border-radius-*`
- **Line Heights**: `--krado-line-height-*`

## 🏗️ Build

Build the site for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

## 📦 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy from the project directory
vercel
```

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin develop
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository (`krado-design-docs`)
   - Select the `develop` branch or your preferred branch

3. **Configure Build Settings**
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables** (if needed)
   - Add any environment variables required by your project

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Option 3: Automatic Deployments

Once connected to Vercel, the site will automatically deploy on every push to your specified branch.

### Vercel Configuration File (Optional)

Create a `vercel.json` file in the project root for advanced configuration:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "outputDirectory": "dist",
  "env": {
    "NODE_ENV": "production"
  }
}
```

## 🔧 Configuration

### Astro Configuration

The Astro project is configured in `astro.config.mjs`:

```javascript
export default defineConfig({
  integrations: [react()],
  output: 'static',
  outDir: './dist',
  site: 'https://your-vercel-url.vercel.app/',
});
```

Update the `site` URL to match your Vercel deployment URL.

### TypeScript

TypeScript is configured to work with React JSX components via `tsconfig.json`.

## 📚 Components

### Header
The `Header` component (`src/components/Header.jsx`) displays the site logo and navigation links as an Astro Island.

### CommingSoon
The `CommingSoon` component (`src/components/CommingSoon.jsx`) is the main landing page section that explains what Krado Life Design System is and indicates that more details are coming soon.

## 🎯 Astro Islands

Interactive React components are loaded as **Astro Islands** with `client:load`:

```astro
<Header client:load />
<CommingSoon client:load />
```

This ensures optimal performance by only hydrating components that need interactivity.

## 📝 Environment Variables

Create a `.env` file in the project root if you need environment-specific variables:

```env
# Example
PUBLIC_SITE_NAME=Krado Life Design System
```

## 🤝 Contributing

To contribute to the design system documentation:

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build and preview with `npm run build` and `npm run preview`
5. Push to GitHub and create a pull request

## 📄 License

This project is part of the Krado Life Design System.

## 🔗 Related Repositories

- [krado-ui](../krado-ui) - Base UI component library

## ❓ Support

For issues or questions, please open an issue on the GitHub repository.

---

**Happy coding! 🎉**
