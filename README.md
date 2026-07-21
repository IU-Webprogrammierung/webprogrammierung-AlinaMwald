# Project Overview

As part of this project, a personal website is being conceptualized, visually designed, and technically developed. The website aims to provide visitors with insight into my independent creative work beyond traditional client projects while reflecting my personality, interests, and creative approach. It serves as a portfolio for both analog and digital work, while also showcasing personal inspirations and areas of interest.

The project is also an exploration of the following questions:
Who am I at my core? And how can personality and creativity be expressed authentically and memorably within a digital space?

During the concept phase, website content, information architecture, visual design, and technical requirements regarding responsiveness and accessibility are being developed. The parallel technical implementation is carried out under version control using Git, based on HTML, CSS, and additional web technologies where needed.

Current standards for usability, user experience, responsive web design, and accessibility according to WCAG 2.2 are considered throughout the development process.

# Github Preview
https://iu-webprogrammierung.github.io/webprogrammierung-AlinaMwald/


# Git Workflow
- Development was managed using Git and GitHub
- Features were developed in separate branches before merging

# Browser
- developed for Google Chrome  

# Breakpoints
- Desktop: > 992px  
- Tablet: ≤ 992px  
- Mobile: ≤ 767px  
-> A custom 12-column grid system is used with responsive column overrides.

### Special Breakpoint
- A custom intermediate breakpoint (`special-breakpoint`) was introduced to improve layout behavior between desktop and tablet in the About hero-section. 
- It adjusts the column layout to maintain balanced proportions and readable text widths

# HTML & CSS Features
- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `footer`)
- CSS Grid for layout structure
- Flexbox for component alignment
- CSS Custom Properties for spacing and design tokens
- `clamp()` for responsive typography
- `aspect-ratio` for image containers
- Media queries for responsive behavior

# CSS Structure
- CSS is split into multiple files during development for better structure and maintainability  
- In production, all styles are bundled into a single `main.css` file  
- This avoids render-blocking requests and improves performance  

# Refactoring
- Reusable components were introduced for header and footer content

# Accessibility

Accessibility and semantic web standards were considered throughout the design and implementation process to create an inclusive and user-friendly experience.

- **Semantic HTML structure**  
  Use of elements such as `header`, `nav`, `main`, and `section` improves document structure and supports screen readers.

- **Heading hierarchy**  
  A clear hierarchy from `h1` to `h4` ensures logical content structure and easier navigation.

- **Language attribute**  
  All HTML documents define the primary language as German (`lang="de"`) to improve pronunciation and parsing by assistive technologies.

- **Accessible forms**  
  - All inputs are associated with labels using `for` and `id`  
  - `name` attributes are provided for all fields  
  - Required fields are clearly indicated  

- **Focus visibility**  
  Interactive elements (links, buttons, inputs) provide visible focus styles to support usability and keyboard navigation.

- **Images and alt text**  
  - Informative images include descriptive `alt` attributes  
  - Decorative images use empty `alt=""` and `aria-hidden="true"`  
  → prevents unnecessary screen reader output and improves clarity. 

- **Responsive typography**  
  Headline sizes are defined using `clamp()` to ensure readability across different screen sizes.

- **Readable text layout**  
  Text content **.text-content** is limited to a maximum width of `65ch` to improve readability and avoids overly long sentences.

- **Prefers reduced motion**
  - Animations respect the user's `prefers-reduced-motion` setting 
  →  support motion-sensitive users and improve accessibility

- **Semantic image grouping**
  - Portfolio images are grouped using semantic `figure` elements to improve structure and screen reader accessibility  
  - Descriptive `figcaption` texts provide additional context beyond image alt texts  

- **Form fields**
  - Form fields use appropriate `autocomplete` attributes (e.g. `name`, `email`) to improve usability and support browser-assisted form completion

# User Interactions
- Responsive navigation menu with JavaScript toggle
- Hover and focus states for buttons, navigation links and interactive images
- Contact form with accessible input fields
- Back-to-top button appears dynamically after scrolling
- Internal page navigation through anchors and links

# Image Optimization
- Raster images are provided in **WebP format** to improve performance and reduce file size.  
- SVGs are used for decorative elements and icons due to their scalability and small file size.

# Navigation Fix: Navigation Links Not Clickable
- Issue: Navigation links were not clickable due to overlapping absolute elements in the hero section.  
- Solution: Adjusted stacking context using `z-index`.


# Responsive form overflow issue
On small screen sizes, the contact form inputs and submit button exceeded the viewport width and caused horizontal overflow. This was due to the combination of CSS Grid columns, gaps, and padding, which made the layout exceed 100% width on narrow screens.
Solution:
For mobile devices, the grid-based form layout was simplified to a vertical flex layout to ensure consistent responsiveness.

@media (max-width: 767px) {
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .contact-form > div {
    width: 100%;
  }
}

# Gallery Layout Decision

- The gallery was intentionally implemented using CSS Grid instead of a true masonry layout.

**Reasons:**
- Maintain accessibility and correct reading order  
- Preserve a logical document structure  
- Ensure predictable responsive behavior across devices  
- Avoid layout instability and inconsistent positioning  

- Images are displayed with their **natural aspect ratios**, creating an uneven, editorial-style grid that matches the design intent.

# Design & Implementation Notes

### Home Page Hero Section
- Custom typography-based layout with layered elements -> decision for advanced layout typography and elements 
- Required extensive responsive fine-tuning to ensure consistent alignment across breakpoints  

## Active Navigation
- JavaScript is used to automatically highlight the currently active navigation link
- The current page path is compared to all navigation links and the matching link receives an `.active` class
- This ensures consistent orientation and improves usability across all pages
- Implementing a reliable active state proved challenging due to the combination of multiple pages and anchor links

### Responsive Navigation
- JavaScript is used to toggle the mobile navigation menu
- A responsive class is added or removed when the menu button is activated
- This enables a simplified navigation experience on smaller screens

## Spacing System
- A custom spacing scale (`--space-xs` to `--space-xl`) is used throughout the project
- Consistent spacing improves maintainability, visual hierarchy and responsiveness

### Slanted Backgrounds
- Implemented using `clip-path`  
- Careful handling of positioning and stacking contexts was required to avoid rendering issues  
- Positioning decorative elements across section boundaries presented a particular challenge  

### Interest items
- On smaller screens, interest items unintentionally switched to a 2-column layout due to global grid rules.  
- local media query override ensures the items remain in a 3-column layout across all breakpoints

### CV Section
- The original design was simplified for better readability and structure  
- Implemented as a structured timeline using text and `hr` separators  

### Accidentally used wrong branch for image optimizations
- The intention was to build the about page
- Instead I first optimized my images performance by changing them from png to webp

### Animations
- Subtle CSS animations are used to enhance decorative elements and support the visual style
- Animations are only applied selectively to avoid distracting from the content
- Scroll-triggered animations are implemented with `animation-timeline: view()`
- Elements animate only when entering the viewport and remain static afterwards

### Back-to-Top Button
- A reusable back-to-top component was implemented across all pages in footer section
- The button appears only after scrolling using JavaScript and a CSS-based visibility toggle

### 404 Page
- A custom 404 page was implemented with an animated chicken illustration and a direct link back to the homepage

### Favicon
- created with Favvy Favicon Exporter (Figma)
- Added SVG, ICO and Apple Touch Icon support for broad browser compatibility  
- Added a web manifest and custom theme color for improved device integration

# Testing
- Chrome DevTools for responsive testing and debugging
- Lighthouse for accessibility, performance and best practices check

# Test Framework Tailwind
- Tested on work.html
- A separate branch was used to evaluate Tailwind CSS as an alternative approach without affecting the primary implementation
- To avoid inconsistency the branch was not merged because I only tested tailwind on one page
- Integration with cdn for testing purposes
- Grid layouts, containers, spacing and responsive breakpoints were rebuilt using Tailwind utilities
- Responsive layouts and breakpoint handling was easier and required less custom CSS
- Testing showed that Tailwind provides clear advantages in terms of consistency and implementation speed when adopted from the beginning of a project
→ **Conclusion:** Based on this evaluation, Tailwind appears to be a more efficient approach for future projects than implementing all layout and utility systems manually from scratch.