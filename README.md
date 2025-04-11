# Eraah Website Redesign

![Eraah AI Demo](./Gif/ScreenRecording2025-04-11093244-ezgif.com-video-to-gif-converter%20(1).gif)

## Overview
This project showcases a complete frontend redesign for Eraah, focusing on a modern, AI-inspired dark theme interface. The redesign provides an intuitive user experience for NGOs looking for AI-powered tools and services that can transform their operations and impact through specialized solutions.

## Features
- Dark theme design with an AI-inspired aesthetic
- Fully responsive layout for all device sizes
- Intuitive user experience with clear navigation paths
- Modern UI/UX principles including card-based layouts
- Smooth animations and transitions enhance the experience
- Interactive AI visualization through orbital animation
- Performance optimized with lazy-loaded components

## Screenshots

### Home Page
#### Hero Section
![Hero Section](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/Screenshot%202025-04-11%20010233.png)

#### Features Section
![Features Section](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/Screenshot%202025-04-11%20010248.png)

#### Testimonials Section
![Testimonials](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/Screenshot%202025-04-11%20010506.png)

### Services Page
#### Overview
![Services Page](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/Screenshot%202025-04-11%20010429.png)

#### Service Cards
![Service Cards](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/Screenshot%202025-04-11%20010444.png)

#### Integration Visualization
![Integration Visualization](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/Screenshot%202025-04-11%20010456.png)

### Mobile Responsive Views

![Mobile View - Home](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/mobilebviewSS/Screenshot%202025-04-11%20093620.png)

![Mobile View - Menu](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/mobilebviewSS/Screenshot%202025-04-11%20093658.png)

![Mobile View - Features](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/mobilebviewSS/Screenshot%202025-04-11%20093712.png)

![Mobile View - Services](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/mobilebviewSS/Screenshot%202025-04-11%20093726.png)

![Mobile View - Contact](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/mobilebviewSS/Screenshot%202025-04-11%20093745.png)

![Mobile View - Footer](https://raw.githubusercontent.com/nirajkumaryadav/eraah-redesign/main/screenshots/mobilebviewSS/Screenshot%202025-04-11%20093757.png)

## Tech Stack
- React 18: Modern component-based architecture
- React Router 6: Client-side routing
- SASS/SCSS: Advanced styling with variables and nesting
- Vite: Fast build tooling and development server
- React Helmet Async: SEO management

## Project Structure
```
eraah-website-redesign
├── public
│   ├── favicon.svg
│   ├── index.html
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── components
│   │   ├── common
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── NavBar.jsx
│   │   ├── home
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   └── Testimonials.jsx
│   │   └── services
│   │       ├── ServiceCard.jsx
│   │       └── ServicesList.jsx
│   ├── context
│   │   └── ThemeContext.jsx
│   ├── hooks
│   │   └── useAnimations.js
│   ├── layouts
│   │   └── MainLayout.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── styles
│   │   ├── globals.scss
│   │   ├── theme.scss
│   │   └── variables.scss
│   ├── utils
│   │   └── animations.js
│   ├── App.jsx
│   ├── index.jsx
│   └── routes.jsx
├── .eslintrc.json
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/nirajkumaryadav/eraah-redesign.git
   ```
2. Navigate to the project directory:
   ```
   cd eraah-redesign
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## License
This project is licensed under the MIT License. See the LICENSE file for details.
