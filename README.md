# Data Analyst Portfolio

A professional, single-page portfolio website designed for Data Analysts. Built with HTML5, Tailwind CSS, and GSAP for animations.

## Features

- **Responsive Design**: Looks great on mobile, tablet, and desktop.
- **Animations**: Smooth scrolling, parallax effects, and entrance animations powered by GSAP.
- **Interactive Projects**: Hover effects and modal popups for detailed case studies.
- **Dynamic Content**: Easy to update project data, experience, and skills in `script.js`.
- **Contact Form**: Stylish form with floating labels and mock submission feedback.

## Setup

No build tools required! Simply open `index.html` in your browser.

To start a local server for development (recommended for proper loading of modules if needed later):

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customization

1.  **Personal Details**: Edit the HTML in `index.html` for the Hero section text.
2.  **Projects & Data**: Open `script.js` and modify the `projects`, `experience`, `education`, and `skills` arrays at the top of the file.
3.  **Images**: Replace the dummy image URLs in `projects` array with your own project screenshots.
4.  **Colors**: Modify `tailwind.config` in `index.html` or `style.css` to change the color scheme.
