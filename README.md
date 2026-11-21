# 202352750-amalalmahmud-assignment3

## Project Description

This project is a personal portfolio website for Amal Almahmud, a KFUPM student developing her programming and web development skills.

Assignment 3 builds on Assignment 2 by integrating the GitHub API, adding persistent light and dark themes, and updating the project cards with real project links.

The website includes Home, About Me, Skills, Projects, and Contact sections. It uses HTML, CSS, and vanilla JavaScript without a framework or build step.

## Phase 3 Features

| Requirement | Implementation |
| --- | --- |
| API Integration | Fetches UniLink repository information from the GitHub API and displays it in a clickable project card. |
| Complex Logic | Contact form validation combines required-field checks, name rules, email validation, field-specific feedback, and focus management. |
| State Management | JavaScript manages the current theme, updates the interface, and saves the selected theme using localStorage. |
| Error Handling | The API integration handles failed requests, unexpected responses, and a 15-second timeout, with a retry button. |

### GitHub API Integration

The UniLink card displays the repository name and description retrieved from GitHub.

While the request is running, a loading message is displayed. If the request fails, an error message and a Try Again button appear.

Retrying replaces only the UniLink card and preserves the Study Planner card.

An internet connection is needed to load the repository information.

### Theme State Management

The theme button switches between light and dark modes.

- In light mode, the button displays **Dark mode**.
- In dark mode, the button displays **Light mode**.
- The selected theme is saved in localStorage and restored when the website is reopened.
- If browser storage is unavailable, switching themes still works for the current page session.

### Existing Interactive Features

- An interactive Skills circle reveals HTML, CSS, JavaScript, Java, Python, and UI/UX Design.
- The Skills circle supports mouse hover, clicking, tapping, and keyboard interaction.
- A repeating typing effect displays “Software Engineer.”
- CSS media queries adjust the layout for smaller screens.

## Projects

### Study Planner

A web application that helps students organize courses, track deadlines, and monitor academic progress.

The card uses a screenshot of the actual website and opens the deployed application.

[Open Study Planner](https://studyplanner-beryl.vercel.app)

### UniLink

A KFUPM student platform for discovering opportunities and building teams. The project is currently a frontend prototype.

The card uses a CSS cover featuring the letter U, displays information fetched from GitHub, and opens the repository.

[View UniLink on GitHub](https://github.com/amal-almahmud/UniLink)

## Project Structure

| File or Folder | Purpose |
| --- | --- |
| `index.html` | Website sections, navigation, theme button, project container, and contact form. |
| `css/styles.css` | Layouts, colors, light and dark themes, animations, and media queries. |
| `js/script.js` | Form validation, typing effect, Skills interaction, GitHub API integration, and theme state management. |
| `assets/images/` | Project screenshots and image assets. |
| `docs/technical-documentation.md` | Technical implementation and testing details. |
| `docs/ai-usage-report.md` | AI usage log, reflections, and declaration. |
| `README.md` | Project overview, setup instructions, and usage guide. |

## Setup Instructions

### 1. Get the Project

Clone the repository:

```bash
git clone https://github.com/amal-almahmud/202352750-amalalmahmud-assignment3.git
cd 202352750-amalalmahmud-assignment3
```

Alternatively, select **Code → Download ZIP** on the repository page and extract the files.

### 2. Run Locally

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html` and select **Open with Live Server**.
4. Open the local address provided by Live Server in a browser.

No npm packages or build commands are required. Keep the project folders together so the stylesheet, script, and images load correctly.

## How to Use

1. Use the navigation links to move between sections.
2. Select **Dark mode** or **Light mode** to change the theme.
3. Hover over or select **Skills** to reveal the skill labels.
4. With keyboard focus on Skills, press Enter or Space to toggle the circle. Press Escape to close it.
5. Select the Study Planner card to open the live application or the UniLink card to open its GitHub repository.
6. Complete the contact form and follow any validation messages.
7. If the GitHub request fails, select **Try Again** to reload the UniLink information.

## Contact Form Validation

| Field | Validation Rules |
| --- | --- |
| Name | Required. Must contain at least two letters. Supports Unicode letters, including Arabic, with spaces, apostrophes, and hyphens. Numbers are not accepted. |
| Email | Required. Must pass the browser's basic email format validation. |
| Message | Required. Must contain text rather than only whitespace. |

If all fields are empty, a general message asks the user to complete them. Otherwise, errors appear below the affected fields, and focus moves to the first invalid field.

Editing a field with an error updates its feedback. Valid input produces a personalized thank-you message and resets the form.

The form demonstrates client-side validation. It does not send email or submit information to a backend.

## Performance Considerations

- The JavaScript file loads with `defer`.
- The Study Planner screenshot uses lazy loading.
- The UniLink cover is created with CSS instead of an additional image download.
- The website uses system fonts and vanilla JavaScript without a framework bundle.

## Testing

The following contact form tests were manually completed successfully:

| Test | Result |
| --- | --- |
| Submit with all fields empty. | A general completion message appears. |
| Enter a one-letter name with other fields valid. | A name validation error appears. |
| Enter an invalid email with other fields valid. | An email validation error appears. |
| Leave the message empty with other fields valid. | A message validation error appears. |
| Submit valid values in all fields. | A personalized thank-you message appears and the form resets. |

### Manual Testing Guide

| Test | Expected Result |
| --- | --- |
| Open the Projects section with an internet connection. | UniLink repository information loads. |
| Simulate a failed GitHub request. | An error message and retry button appear. |
| Restore the connection and select Try Again. | UniLink reloads without duplicating cards or removing Study Planner. |
| Switch themes, refresh, and reopen the website. | The saved theme is restored. |
| Select each project card. | The correct project destination opens in a new tab. |
| Operate the Skills circle using the keyboard. | Enter or Space toggles it, and Escape closes it. |
| Inspect the website at different screen widths and in another browser. | Content remains readable and controls remain usable. |

## AI Usage Summary

ChatGPT and Kilo Code supported the original Assignment 1 portfolio. ChatGPT also assisted with the interactive features and documentation in Assignment 2.

During Assignment 3, ChatGPT assisted with the GitHub API integration, project card updates, theme state management, debugging, testing guidance, Git commands, and documentation.

See the [AI Usage Report](docs/ai-usage-report.md) for the detailed usage log, modifications, reflections, and declaration.

## Documentation

- [Technical Documentation](docs/technical-documentation.md)
- [AI Usage Report](docs/ai-usage-report.md)