# Project Overview

As part of this project, a personal website is being conceptualized, visually designed, and technically developed. The website aims to provide visitors with insight into my independent creative work beyond traditional client projects while reflecting my personality, interests, and creative approach. It serves as a portfolio for both analog and digital work, while also showcasing personal inspirations and areas of interest.

The project is also an exploration of the following questions:
Who am I at my core? And how can personality and creativity be expressed authentically and memorably within a digital space?

During the concept phase, website content, information architecture, visual design, and technical requirements regarding responsiveness and accessibility are being developed. The parallel technical implementation is carried out under version control using Git, based on HTML, CSS, and additional web technologies where needed.

Current standards for usability, user experience, responsive web design, and accessibility according to WCAG 2.2 are considered throughout the development process.

# Github Preview
https://iu-webprogrammierung.github.io/webprogrammierung-AlinaMwald/

# Accessibility

Accessibility and semantic web standards were considered throughout the design and implementation process to create an inclusive and user-friendly experience.

- **Semantic HTML structure**  
  Use of elements such as `header`, `nav`, `main`, and `section` improves document structure and supports screen readers (WCAG 1.3.1 Info and Relationships).

- **Heading hierarchy**  
  A clear hierarchy from `h1` to `h4` ensures logical content structure and easier navigation.

- **Language attribute**  
  All HTML documents define the primary language as German (`lang="de"`) to improve pronunciation and parsing by assistive technologies.

- **Accessible forms**  
  - All inputs are associated with labels using `for` and `id`  
  - `name` attributes are provided for all fields  
  - Required fields are clearly indicated  
  → improves form usability and accessibility 
- **Focus visibility**  
  Interactive elements (links, buttons, inputs) provide visible focus styles to support keyboard navigation.

- **Images and alt text**  
  - Informative images include descriptive `alt` attributes  
  - Decorative images use empty `alt=""` and `aria-hidden="true"`  
  → prevents unnecessary screen reader output and improves clarity. 

- **Responsive typography**  
  Headline sizes are defined using `clamp()` to ensure readability across different screen sizes.

- **Readable text layout**  
  Text content is limited to a maximum width of `65ch` to improve readability and reduce cognitive load.

- **Clear and concise content**  
  Text content avoids overly long sentences and unnecessary complexity, improving comprehension.

# Performance
The used svgs are only 32px wide or high to ensure small file sizes and better performance

# Navigation Fix: Navigation Links Not Clickable
In the hero section, absolutely positioned elements (images) were overlapping the navigation, preventing links from being clickable.
Solution: Ensure the navigation has a higher stacking order with z-index!

# Responsive form overflow issue
On small screen sizes, the contact form inputs and submit button exceeded the viewport width and caused horizontal overflow.
This was due to the combination of CSS Grid columns, gaps, and padding, which made the layout exceed 100% width on narrow screens.
Solution:
For mobile devices, the grid-based form layout was simplified to a vertical flex layout to ensure consistent responsiveness.

@media (max-width: 768px) {
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .contact-form > div {
    width: 100%;
  }
}

### Gallery Layout Decision

- The gallery was intentionally implemented using CSS Grid instead of a true masonry layout.
- Reasons:

  - **Maintain accessibility and reading order** 
  - **Preserve logical structure**
  - **Ensure predictable responsive behavior** across devices
  - **Avoid layout instability and variability**

- Images are displayed with their **natural aspect ratios**, creating an uneven grid" that matches the design

# Home Page Hero Section
- decision for advanced layout typography and elements 
- difficult responsive adjustments

# Slanted Backgrounds