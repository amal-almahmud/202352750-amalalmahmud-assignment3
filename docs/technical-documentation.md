# Technical Documentation

## Project Structure

- `index.html` contains the website content, sections, and theme button.
- `css/styles.css` contains the design, animations, responsive layout, and light and dark themes.
- `js/script.js` contains form validation, the typing effect, Skills circle interaction, GitHub API integration, and theme state management.
- `assets/images/` contains project images, including the Study Planner website screenshot.
- `docs/` contains the technical documentation and AI usage report.
- `README.md` contains the project description, setup instructions, and usage guide.

## HTML

The website is a single HTML page with Home, About Me, Skills, Projects, and Contact sections.

Semantic elements such as `header`, `nav`, `main`, `section`, and `footer` organize the content.

The Skills section contains a central button and a list of six skills.

The navigation includes a button for switching between light and dark themes.

The Projects section contains a Study Planner card that opens the deployed website. A UniLink card is generated using GitHub API data and opens the project repository.

The Projects section also includes a loading status message and a retry button for failed API requests.

The contact form contains Name, Email, and Message fields. Each field has a label and an area for its error message.

The form uses `novalidate` so JavaScript can control how validation messages appear.

## CSS and Responsive Design

Flexbox is used for the navigation bar and introductory buttons.

CSS Grid is used for the Home layout and project cards.

CSS variables store shared colors, spacing, and other design values.

The Skills labels are positioned around the central button. CSS transitions animate their movement when the circle opens or closes.

Media queries at `768px` and `480px` adjust the layout, buttons, text sizes, and spacing.

On smaller screens, the Home section changes to one column, navigation links can wrap, and the project cards appear in one column.

The typing card also uses smaller spacing and a smaller shadow to fit the available width.

Dark theme styles use the `body.dark-mode` selector to change backgrounds, text, borders, and form colors.

The UniLink card uses a navy CSS cover with a white U instead of an image file.

## JavaScript

### Contact Form Validation

JavaScript prevents the default form submission and checks the input values.

It checks for empty fields, requires at least two letters in the name, rejects numbers in names, and checks the email format.

Arabic and English letters are supported in the name field. The message must contain text rather than only spaces.

If all fields are empty, one general message appears. Otherwise, errors appear below the affected fields.

After an invalid submission, focus moves to the first invalid field. Editing a field with an error updates its feedback.

Valid input produces a thank-you message and clears the form.

These combined conditions and validation steps provide the project's complex logic.

The form is a demonstration only. It does not send information to a server or store submitted data.

### Typing Effect

JavaScript uses `setTimeout` to display “Software Engineer” one letter at a time.

After a pause, the complete phrase is cleared at once and the effect starts again.

### Skills Circle

JavaScript adds or removes the `is-open` class to show or hide the skills.

The circle supports mouse hover, clicking, tapping, and keyboard controls.

Enter or Space toggles the focused button. Escape closes the circle. Leaving the circle area with the mouse or selecting outside it also closes it.

The script updates `aria-expanded` and `aria-hidden` to match the open or closed state.

### GitHub API Integration

The `loadUniLink()` function uses `fetch` with `async` and `await` to request UniLink repository information from the GitHub API.

The returned name and description are displayed in a project card. The repository URL becomes the card's destination.

A loading message appears during the request. Failed requests display an error message and a retry button.

An `AbortController` cancels requests that take longer than 15 seconds.

Before loading again, the previous UniLink card is removed to avoid duplicates. The Study Planner card remains in place.

### Theme State Management

The `currentTheme` variable stores the selected theme.

The `renderTheme()` function adds or removes the `dark-mode` body class and updates the button text.

In light mode, the button displays “Dark mode.” In dark mode, it displays “Light mode.”

The selected theme is saved in localStorage using the key `amal-portfolio-theme` and restored when the website is reopened.

Storage operations use `try/catch` so theme switching still works if browser storage is unavailable.

## Testing

The original Assignment 1 version was tested in Microsoft Edge using responsive DevTools. Navigation links, project images, the contact form, and browser Console were checked during development.

For Assignment 2, contact form checks covered empty fields, invalid names, invalid email formats, missing messages, and valid submissions. Individual field feedback was also checked.

After the responsive CSS changes, the Home section and navigation were visually checked in a small-screen browser preview. The navigation links, introductory buttons, and complete typing card were visible.

For Assignment 3, the contact form was tested again with empty fields, a one-letter name, an invalid email, a missing message, and valid input. All five tests produced the expected results.

Further testing is still needed for the Skills interaction in the mobile preview, all sections at specific screen widths, and the updated website in another browser.