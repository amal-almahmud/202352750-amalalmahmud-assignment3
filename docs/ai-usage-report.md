# AI Usage Report

## Tools Used and Use Cases

### ChatGPT

I used ChatGPT during Assignment 3 for planning, explanations, code generation, debugging, testing guidance, Git and GitHub guidance, and documentation support.

ChatGPT helped me:

- Explore API ideas and select the GitHub API for UniLink.
- Display UniLink repository information inside the existing Projects section.
- Update the Study Planner card with its deployed website link and actual screenshot.
- Adjust project card structure, appearance, and displayed text.
- Implement light and dark themes with a saved preference.
- Change the theme button text to show the next available mode.
- Review contact form testing steps.
- Update the README, technical documentation, and AI usage report.

### Kilo Code

Kilo Code was used during Assignment 1 to generate part of the original HTML and CSS foundation.

Assignment 3 builds on that earlier work. Its use is acknowledged here as part of the inherited project foundation.

## Usage Log

This log covers Assignment 3.

C01 identifies the complete conversation, including code revisions, Git guidance, testing guidance, and documentation drafts.

A01–A03 identify three main AI-generated code outputs from that conversation. They refer to Assignment 3 outputs, not the artifacts from previous assignments.

Exact model versions were not recorded.

| ID | Date | Tool (model) | Purpose | Files affected | What I changed and how I verified it |
| --- | --- | --- | --- | --- | --- |
| C01 | Latest assistance: 2026-11-21. Earlier message dates were not fully recorded. | ChatGPT (exact model not recorded) | Assignment 3 planning, API integration, project card updates, theme state management, debugging, testing guidance, Git guidance, and documentation. | index.html, css/styles.css, js/script.js, assets/images/study-planner.png, README.md, docs/technical-documentation.md, docs/ai-usage-report.md | I selected UniLink for the API feature, linked Study Planner to its deployed website, and added its actual screenshot. I requested changes to the cards, theme button labels, and documentation. I reviewed the displayed cards and successfully completed five contact form tests. |
| A01 | Original generation date not separately recorded; included in C01. | ChatGPT (exact model not recorded) | JavaScript for loading UniLink information from the GitHub API, including loading feedback, error handling, timeout, and retry. | js/script.js | I integrated the API feature into the existing Projects section and requested a clickable card with a U cover and no language label. The repository information appeared in the browser. Failure, timeout, and retry tests have not been recorded as completed. |
| A02 | Original generation date not separately recorded; included in C01. | ChatGPT (exact model not recorded) | CSS for the theme button and dark theme colors across the website. | css/styles.css | I added the styles to the existing stylesheet and connected them to the theme feature. A complete visual check of every component in both themes has not been recorded. |
| A03 | Original generation date not separately recorded; included in C01. | ChatGPT (exact model not recorded) | JavaScript for theme state management and saving the preference using localStorage. | js/script.js | I requested a further change so dark mode displays a Light mode button and light mode displays a Dark mode button. I applied the revised renderTheme function. |

## Benefits and Challenges

### Benefits

AI helped me turn my API and theme ideas into features that fit the existing portfolio.

It helped me connect external repository data to the page and understand how loading messages, errors, and retry controls work.

AI also provided guidance for saving a theme preference, organizing Git changes, and updating the documentation.

### Challenges

Some AI suggestions were longer or more complicated than I wanted, especially the documentation.

The API code needed matching HTML elements before the UniLink card could appear.

The Projects section initially had separate areas that did not match the layout I wanted. I requested one Projects section containing the two project cards.

Card structure and styling also needed adjustments to address double borders and large gaps.

The theme button initially kept the same text after switching modes. I requested that it show the next available mode instead.

## Learning Outcomes

Assignment 3 introduced me to requesting external data using fetch, async, and await, and displaying information from a JSON response.

I practiced connecting JavaScript selectors to the correct HTML elements and updating page content dynamically.

The theme feature helped me understand the difference between the current state stored in a JavaScript variable and the saved preference stored in localStorage.

I also practiced distinguishing between a deployed project website and a GitHub repository link.

The testing steps helped me check several validation conditions separately and compare the results with the expected feedback.

## Responsible Use and Modifications

I selected the features and requested changes based on the appearance and behavior I wanted for my portfolio.

For the Projects section, I requested:

- Study Planner to open its deployed website.
- An actual Study Planner screenshot.
- UniLink information to appear within the existing project cards.
- A navy cover featuring the letter U.
- Removal of the displayed programming language.
- A clickable UniLink card that opens its GitHub repository.
- A frontend prototype label that reflects the project's current status.

For the theme feature, I requested:

- Light and dark color schemes.
- Saving the selected theme between visits.
- A Light mode button when dark mode is active.
- A Dark mode button when light mode is active.

I reused the contact form validation from Assignment 2 and tested it again during Assignment 3.

The five completed tests covered empty fields, a one-letter name, an invalid email, a missing message, and valid input. All five produced the expected results.

I also requested documentation that retained the previous structure and described the Assignment 3 changes.

Further checks are still needed for API failure and retry behavior, theme persistence after reopening, the complete mobile layout, and another browser.

## Innovation

For the API feature, I chose to integrate UniLink repository information directly into the existing project cards instead of keeping a separate GitHub projects section.

I chose different destinations based on each project's status: Study Planner opens its deployed website, while UniLink opens its source repository and is described as a frontend prototype.

I requested a simple U cover matching UniLink's visual identity.

For state management, I chose a light and dark theme preference that can be saved between visits.

I also requested that the theme button describe the next action. When the website is dark, the button displays Light mode; when it is light, the button displays Dark mode.

These choices adapted the AI suggestions to my project content and preferred user experience.

## Individual Declaration

**Name:** Amal Almahmud  
**KFUPM ID:** 202352750  

I used AI tools in Assignment 3.

- **Tools and models:** ChatGPT; the exact model version was not recorded. Kilo Code contributed to the Assignment 1 foundation reused in this project; its model version was not recorded.
- **Purposes:** Planning, explanations, code generation, debugging, testing guidance, Git and GitHub guidance, and documentation support.
- **Parts of the deliverable affected:** index.html, css/styles.css, js/script.js, assets/images/study-planner.png, README.md, docs/technical-documentation.md, and docs/ai-usage-report.md.
- **Usage Log IDs:** C01, A01, A02, A03

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Signature:** amal

**Date:** 2026/11/21