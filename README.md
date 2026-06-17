# Project Overview

As part of this project, a personal website is being conceptualized, visually designed, and technically developed. The website aims to provide visitors with insight into my independent creative work beyond traditional client projects while reflecting my personality, interests, and creative approach. It serves as a portfolio for both analog and digital work, while also showcasing personal inspirations and areas of interest.

The project is also an exploration of the following questions:
Who am I at my core? And how can personality and creativity be expressed authentically and memorably within a digital space?

During the concept phase, website content, information architecture, visual design, and technical requirements regarding responsiveness and accessibility are being developed. The parallel technical implementation is carried out under version control using Git, based on HTML, CSS, and additional web technologies where needed.

Current standards for usability, user experience, responsive web design, and accessibility according to WCAG 2.2 are considered throughout the development process.

# Github Preview
https://iu-webprogrammierung.github.io/webprogrammierung-AlinaMwald/

# Accessibility
Accessibility and semantic web standards were considered throughout the conception and implementation of the website in order to create an inclusive and user-friendly experience.

The website structure follows semantic HTML standards using elements such as header, nav, main, section, article, and footer to improve readability for screen readers.

A clear headline hierarchy from h1 to h4 is used to logically structure content and improve navigation for screen readers. 

The language of all HTML files is explicitly declared as German (lang="de").

Images containing relevant content include descriptive alt attributes.
Purely decorative images intentionally do not have alt attributes to avoid unnecessary screen reader output. 

Active navigation states are marked using aria-current="page" for improved orientation.

Typography and UI elements were designed with accessibility in mind. Font sizes and line heights were chosen to ensure good readability across devices, while color combinations and interface elements were checked against WCAG contrast requirements (AA and partially AAA standards).

To improve readability overly long sentences and dashes in texts were avoided wherever possible.

Clamp was used to define responsive headlines that scale variably.

- max width for content texts for better readability (.text-content -> 65ch -> ch = character width) -> better readability & user experience

# Performance
The used svgs are only 32px wide or high to ensure small file sizes and better performance
