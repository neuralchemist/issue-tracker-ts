# Issue Tracking App

Welcome to the Full-Stack Issue Tracking App! This project uses React and Firebase. With this application, you can collaborate on projects with your team members and keep track of issues that arise in the project. I've leveraged my expertise in modern software development practices and methodologies to create an application that's functional, maintainable, and secure.

You can start using it by downloading the entire Source code and then run it on your server.

<img src="https://github.com/neuralchemist/issue-tracker-ts/blob/readme/src/assets/issue-tracker-ts.gif" alt="realtime-kanban-app.gif" style="float: left; margin-right: 10px;" />

## How I Worked on This Project

In the development of this project, I adhered to industry best practices to ensure efficiency and maintainability. My workflow included:

- **Git and GitHub:** I followed a structured Git workflow, utilizing feature branches and pull requests to ensure clean, organized code and facilitate collaboration.
- **Clean Code and Folder Structure:** Clean, readable code is essential. I maintained a professional folder structure and adhered to naming conventions to enhance code clarity and maintainability.
- **TypeScript:** I employed TypeScript to enhance code quality and maintainability. Strongly typed code reduces errors and improves code documentation.
- **Firebase for Authentication and Firestore Database:** Leveraging Firebase, I implemented secure user authentication and used Firestore for efficient and scalable data storage.
- **Continuous Deployment with GitHub Actions:** I set up a seamless deployment pipeline using GitHub Actions, ensuring that updates are automatically deployed to Firebase hosting.

## How to Navigate This Project

To navigate this project effectively, consider the following:

- **Responsive CSS:** CSS is designed for responsiveness using Material-UI and Styled Components. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/features/Home/components/IssueCard/styles.ts)
- **CRUD Operations:** REST API integration for Create, Read, Update, and Delete operations. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/entities/issue/api/index.ts)
- **Async State Management:** Utilizing React Query for state management and caching. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/entities/issue/hooks/useUpdateIssue.ts)
- **Form State Management:** Efficient form management with React Hook Form. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/features/Issues/components/IssueForm/index.tsx)
- **Advanced State Management:** Efficient state management using context hooks. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/entities/auth/context/index.tsx)
- **Performance Optimization:** Leveraging useMemo for optimized component performance. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/common/context/ThemeProviderCustom.tsx)
- **Form Validation:** Form validation using Zod. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/entities/issue/validators/index.ts)
- **Reusable UI Components:** Developing reusable UI components for scalability. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/common/components/SelectFieldCustom/index.tsx)
- **Authentication:** Firebase Authentication is used to manage user access and authentication securely. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/entities/auth/api/index.ts)
- **Database:** Firestore Database is employed for efficient and scalable data storage. [Example Code](https://github.com/neuralchemist/issue-tracker-ts/blob/main/src/entities/user/api/index.ts)

## Why I Built the Project This Way

My choice of technologies and architecture reflects a commitment to best practices:

- **Modular Component-Based Architecture:** I adopted a modular, component-based architecture, following the React framework's principles. This enhances code reusability and maintainability.
- **State Management:** I utilized modern state management techniques including `useState`, `useContext`, `react-query`, and `react-hook-form`. Consciously, I avoided introducing a state management library like Redux, as many contemporary projects are moving away from them.
- **Security:** Firebase Authentication and Firestore Database provide robust security measures to protect user data and maintain the integrity of the application.
- **Efficiency:** By utilizing React Query for state management and automated deployments with GitHub Actions, I've ensured the app runs efficiently and remains up-to-date.

## Key Features

- **Comprehensive Issue Management:** Users have the ability to seamlessly perform actions like fetching, creating, updating, and deleting issues.
- **Collaboration:** Teamwork becomes efficient when users are frequently synchronized with the latest data.
- **Light and Dark Theme:** The application offers multiple interfaces, allowing users to switch between themes effortlessly.
- **Easy Authentication:** Users can easily sign up and sign in.
- **Cross-Device Compatibility:** Whether on a mobile device, tablet, or desktop computer, users can access and utilize the application seamlessly.

These features enhance functionality and reflect the commitment to a user-centric and efficient design approach.

## If I Had More Time, I Would Change This

Given additional time, I would further improve this project by:

- Implementing unit, integration, and E2E tests to enhance reliability and robustness.
- Exploring advanced Firebase functionalities for even greater scalability and performance.
- Collaborating with a team to address larger-scale development challenges.

This project demonstrates my ability to apply best practices in software development, leveraging modern technologies to create an application that is both functional and maintainable.
Thank you for reviewing my work.
