# Brewery App

This project is a web application that allows users to browse breweries and their details using the Open Brewery DB API. Users can search for breweries by name, view a list of all breweries, and navigate to individual brewery details pages. The application also includes a contact form for users to send feedback or questions.

## Features

- **Search:** Users can search for breweries by name using the search bar.
- **Brewery List:** Displays a list of breweries with basic information, such as name, type, and location.
- **Brewery Details:** Clicking on a brewery's name redirects the user to a detailed page displaying additional information about the brewery.
- **Pagination:** Implements pagination to handle large sets of brewery data.
- **Sorting:** Allows users to sort breweries by type.
- **Contact Form:** Includes a contact form for users to submit feedback or questions.

## Technologies Used

- React
- React Router
- MaterialUI
- Axios
- React Hook Form

## Performance Optimization

In this project, several performance optimization techniques have been implemented to ensure smooth and efficient operation of the application:

- **Memoization**: The `memo` function from React is used to memoize functional components that do not rely on external props or state changes. This prevents unnecessary re-renders of these components, improving overall performance.

- **useCallback Hook**: The `useCallback` hook is utilized to memoize callback functions, such as event handlers, that are passed down to child components.

- **Lazy Loading and Code Splitting**: The application utilizes React Router for routing. With React Router's built-in support for lazy loading and code splitting, components are dynamically loaded only when needed, reducing the initial load time of the application and improving overall performance.

- **Pagination and Data Fetching**: Pagination is implemented to fetch and display data in smaller, manageable chunks. This prevents loading large amounts of data at once, resulting in faster rendering times and improved user experience.

These optimization techniques ensure that the application runs efficiently, providing a smooth and responsive user experience.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open [http://localhost:3000](http://localhost:3000/breweries) in your browser to view the application.

## Deployment

<!-- This project is deployed using [Your Deployment Platform]. You can access the live version of the application [here](#). -->

## Contributors

- [Viktoriia Shtyreva](https://github.com/VictoriiaShtyreva)

## Acknowledgements

- Thanks to [Open Brewery DB](https://www.openbrewerydb.org/) for providing the brewery data.
- Special thanks to [MaterialUI](https://mui.com/) for the beautiful UI components.
- With sincere gratitude to the team at [Integrify](https://www.integrify.io/) for their unwavering support and knowledge. Their guidance and resources have been instrumental in the development of this project.
