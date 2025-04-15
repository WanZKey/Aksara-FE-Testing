# Indonesia Tourism Website

This project is a React.js application that showcases tourist information for each of Indonesia's 34 provinces. It includes various features aimed at enhancing user experience and providing valuable information to visitors.

## Features

- **User Authentication**: Users can log in and register to access personalized features.
- **AI Recommendations**: Get AI-generated suggestions for popular tourist destinations.
- **Event Listings**: View upcoming events in various provinces with details and countdown timers.
- **Feedback System**: Users can submit feedback on events and destinations.
- **Quiz Game for Children**: A fun and interactive quiz game designed for children, complete with a progress bar and leaderboard.

## Project Structure

```
indonesia-tourism-website
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   ├── AIRecommendations.jsx
│   │   ├── EventListings.jsx
│   │   ├── FeedbackForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProvinceDetails.jsx
│   │   └── QuizGame.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── ProvincePage.jsx
│   │   └── QuizPage.jsx
│   ├── styles
│   │   ├── bootstrap.min.css
│   │   └── custom.css
│   ├── utils
│   │   ├── api.js
│   │   └── helpers.js
│   ├── App.jsx
│   ├── index.js
│   └── setupTests.js
├── package.json
├── .gitignore
├── README.md
└── webpack.config.js
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd indonesia-tourism-website
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Technologies Used

- React.js
- Bootstrap
- JavaScript
- HTML/CSS

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.