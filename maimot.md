# MASTER PROMPT — CREATIVE FRONTEND DEVELOPER PORTFOLIO

Act as a senior frontend engineer, creative UI/UX designer, and experienced React developer. Build a complete, polished, production-quality personal portfolio website for a junior frontend developer.

Do not just explain how to build it. Inspect the current workspace, create the necessary files, implement the entire application, run available checks, and fix any errors you encounter.

## 1. Developer Profile

Use the following known information:

- Name: Meyrlan Abubakirov
- Professional title: Junior Frontend Developer
- Education: Mars IT School
- Primary interests: frontend development, web interfaces, interactive applications, and learning modern web technologies.
- Technologies to highlight: HTML, CSS, JavaScript, React, Tailwind CSS, Git, and GitHub.
- Portfolio goals: professional presentation for job opportunities and building a personal brand on social media.
- Languages: English and Uzbek.
- Experience level: junior. Never claim senior-level experience, employment history, client work, or achievements that have not been provided.

Write a professional, confident, authentic personal introduction using these facts. Do not invent a phone number, email address, social media username, GitHub profile URL, employment history, certificates, statistics, or project results.

Keep personal details, project information, social links, and translations centralized so they can be edited easily.

## 2. Design Direction

Create a premium, creative, futuristic developer portfolio inspired by modern dark developer portfolios, glassmorphism, subtle 3D visuals, and neon gradients.

Visual identity:
- Main background: #10111B
- Surface background: #171827
- Primary accent: #8B5CF6
- Secondary accent: #22D3EE
- Main text: #F5F5FA
- Muted text: #A1A1B5
- Soft borders and translucent surfaces.
- Modern typography, strong visual hierarchy, generous spacing, and rounded cards.

The website must feel original and carefully art-directed, not like a generic template.

Include:
- A visually striking hero section.
- Large expressive typography.
- Subtle gradient orbs and ambient background lighting.
- Glassmorphism cards where appropriate.
- Beautiful project preview cards with consistent aspect ratios.
- Smooth section transitions and micro-interactions.
- Subtle grid or noise textures only if implemented cleanly.
- A consistent design system for colors, spacing, typography, shadows, and radii.

Avoid excessive neon effects, clutter, too many floating elements, unnecessary animations, and heavy 3D libraries.

Use CSS-based visual effects wherever possible instead of adding unnecessary dependencies.

## 3. Required Technology Stack

Use:
- React with functional components and hooks.
- Vite for the development environment.
- Tailwind CSS, using the version-compatible setup appropriate for the current project.
- Framer Motion (`framer-motion`) for animations.
- Lucide React for icons.
- JavaScript with JSX.

Do not migrate to another framework. Do not use a backend unless it is genuinely needed.

First inspect the existing project and its package.json. Reuse the existing setup if it is appropriate. Install only the dependencies required by the implementation.

## 4. Website Structure

Build a polished, single-page portfolio with these sections:

### A. Navbar
- Developer wordmark: MEYRLAN.DEV
- Navigation: Home, About, Skills, Projects, Contact.
- English / Uzbek language switcher.
- Dark / light theme toggle.
- Mobile navigation menu.
- Smooth scrolling to page sections.
- Transparent or glass-style navbar that becomes more solid when scrolling, if implemented accessibly.
- Highlight the active section when practical.

### B. Hero Section
Create an impressive first screen.

Suggested English copy:

Eyebrow:
"JUNIOR FRONTEND DEVELOPER"

Main heading:
"Building digital experiences for the modern web."

Supporting text:
"I'm Meyrlan, a junior frontend developer learning and building modern web experiences with React and JavaScript."

Primary CTA:
"Explore My Work"

Secondary CTA:
"Get in Touch"

Include:
- A tasteful abstract visual, animated code-inspired panel, or original CSS illustration.
- Animated gradient accents.
- A small technology stack indicator.
- A scroll-down indicator.
- A responsive two-column layout on larger screens and a clean single-column layout on mobile.

Do not use a fake professional headshot. If no portrait is supplied, use an abstract visual or a developer-themed illustration.

### C. About Section
Title: "A Little About Me"

Write a natural introduction based only on the known profile.

Mention learning frontend development, studying at Mars IT School, practicing modern web technologies, and working to improve through projects.

Add:
- A short personal introduction.
- Learning journey or development approach.
- Technology tags.
- A visually interesting but restrained layout.

Do not fabricate exact years of professional experience, client projects, or achievements.

### D. Skills Section
Organize technologies into sensible groups:

Frontend:
- HTML5
- CSS3
- JavaScript
- React
- Tailwind CSS

Tools:
- Git
- GitHub
- Vite
- VS Code

Use attractive icon cards or compact technology chips.

Do not display fabricated skill percentages, proficiency meters, or years of experience. Present the technologies without claiming mastery beyond the known information.

### E. Projects Section
Title: "Selected Projects"

Create reusable project cards with:
- Project preview image or attractive local visual.
- Project title.
- Short description.
- Technology tags.
- Live Demo link.
- GitHub link.
- Optional project details interaction.

Use a centralized `projects.js` data file.

Possible project categories and examples:
1. Tez Savdo — an Uzbekistan-focused marketplace concept.
2. Weather App — a weather interface using an API.
3. Task Manager — a task management interface.

Treat these as project concepts or practice-project examples unless actual implementations and URLs are available. Do not falsely claim that a demo is live or that a repository exists.

Provide easy-to-edit project data and clearly documented placeholders for missing URLs. Never link buttons to "#" or invent working URLs.

Add category filtering only if it can be implemented cleanly and accessibly.

### F. Contact Section
Heading:
"Let's Build Something Great."

Supporting text:
"Have a project idea or an opportunity to discuss? Feel free to get in touch."

Include:
- Configurable email address.
- Configurable Telegram link.
- Configurable GitHub link.
- Configurable Instagram link.
- Copy-email interaction when an email is configured.
- A contact form with name, email, and message fields.

Never invent contact details.

If no contact backend or form service exists, do not pretend the form sends messages. Implement an honest frontend-only state or a clearly documented integration point. Validate inputs and show accessible success/error feedback only when appropriate.

### G. Footer
Include:
- MEYRLAN.DEV wordmark.
- A short developer tagline.
- Navigation links.
- Configured social links.
- Automatically generated current year.
- A subtle back-to-top interaction.

### H. Not Found Handling
The main experience is a single-page website. If routing is not required, do not add a routing library just for a 404 page. Handle unknown routes appropriately if a router is introduced.

## 5. Bilingual Support

Implement a complete English / Uzbek language switcher.

Requirements:
- English is the default language.
- Uzbek is the alternative language.
- All navigation labels, headings, paragraphs, buttons, form labels, placeholders, validation messages, project descriptions, and accessibility labels must be translated.
- No mixture of English and Uzbek after switching languages, except technology names and proper names.
- Persist the selected language using localStorage.
- Update the document language attribute when the language changes.
- Store translations in `src/data/translations.js`.
- Keep translation keys organized by section.

Use natural, clear Uzbek rather than awkward literal translations.

## 6. Theme Support

Implement dark and light themes.

Requirements:
- Dark mode is the primary design.
- Light mode must also be carefully designed.
- Theme switching must update the entire interface consistently.
- Persist the selected theme using localStorage.
- Respect the system theme preference on first visit where practical.
- Ensure text contrast and accessible controls.

## 7. Animation and Interaction

Use Framer Motion thoughtfully.

Implement:
- A subtle hero entrance animation.
- Staggered entrance for selected cards.
- Scroll-triggered section reveals.
- Hover and tap feedback for buttons and cards.
- Smooth, restrained background movement.
- Responsive mobile navigation transitions.
- A tasteful theme-toggle transition.

Respect `prefers-reduced-motion`. Avoid animation that interferes with reading, navigation, or accessibility.

Use performant transforms and opacity animations where possible.

## 8. Responsive Design and Accessibility

The website must work well on:
- Small mobile screens.
- Larger phones.
- Tablets.
- Laptops.
- Wide desktop displays.

Requirements:
- No horizontal overflow.
- Readable typography at all breakpoints.
- Touch-friendly buttons.
- Semantic HTML.
- Visible keyboard focus.
- Accessible names for icon-only buttons.
- Proper form labels.
- Keyboard-accessible navigation and interactions.
- Appropriate image alt text.
- Reduced-motion support.
- Good color contrast.

## 9. Architecture

Use a maintainable component structure similar to:

src/
  assets/
  components/
    Navbar.jsx
    Footer.jsx
    Button.jsx
    SectionHeading.jsx
    LanguageSwitcher.jsx
    ThemeToggle.jsx
    ProjectCard.jsx
    ProjectFilter.jsx
  sections/
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
  data/
    profile.js
    projects.js
    translations.js
    socialLinks.js
  hooks/
    useLanguage.js
    useTheme.js
  utils/
    scrollToSection.js
  App.jsx
  main.jsx
  index.css

Adapt the structure if a simpler implementation is more appropriate. Do not create unnecessary files or abstractions.

Keep:
- Profile information in `profile.js`.
- Project data in `projects.js`.
- Social links in `socialLinks.js`.
- All interface translations in `translations.js`.
- Theme and language logic reusable.
- Components small and focused.

## 10. Quality Requirements

- The site must be a complete working implementation, not a static mockup.
- Every visible interactive element must have a real, meaningful action.
- All sections must be implemented.
- Do not leave TODO comments for core functionality.
- Do not use placeholder paragraphs such as Lorem Ipsum.
- Do not fabricate personal information.
- Avoid unnecessary dependencies.
- Use stable React keys.
- Prevent avoidable console errors and React warnings.
- Keep the code readable and maintainable.
- Optimize image usage and loading.
- Add appropriate page title, description, favicon, and social sharing metadata.
- Include a custom 404 experience only if routing requires it.

## 11. Execution Instructions

Follow these steps in order:

1. Inspect the current workspace, existing source files, and package.json.
2. Determine whether the project is already configured with Vite, React, and Tailwind CSS.
3. Create or update the necessary files without unnecessarily deleting existing work.
4. Install only required dependencies using the project's existing package manager.
5. Implement the entire responsive portfolio.
6. Verify that all sections, theme switching, bilingual translations, animations, and interactions work.
7. Run the available production build command.
8. Fix build errors and obvious runtime issues.
9. If browser preview or browser testing tools are available, inspect desktop and mobile layouts and correct visible problems.
10. Report the files created, key features implemented, commands used, build status, and any remaining configuration such as missing contact links or external form credentials.

Do not stop after generating the architecture or a few components. Continue until the implementation is complete and the available checks have been performed.

The final result should look like a premium, creative, modern frontend developer portfolio suitable for showcasing a junior developer's skills, projects, and personal brand.