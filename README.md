# Cinematch ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
Cinematch is a web application that allows users to swipe through movies, like or dislike them, and keep track of their favorite movies. The application uses a PostgreSQL database for user authentication and movie data storage, and it integrates with The Movie Database (TMDb) API to fetch movie information.

## Installation
Before starting the following instructions, make sure you have Node.js installed. You can download it from the following link [Node.js](https://nodejs.org/).<br><br>1.Clone the repository to your local machine: git clone https://github.com/andreamr78/bumblebee.git<br><br>2.Navigate to your local repository using the command line: cd your-local-repository<br><br>3.Install the required npm package: npm install<br><br>4.Set up the PostgreSQL database: Login to your postgres and run the schema.sql file.<br><br>5.Create a .env file in the root directory and add the following environment variables:<br><br>
---Server env---<br>
DB_HOST=localhost<br>
DB_PORT=5432<br>
DB_USER=postgres<br>
DB_PASSWORD=your_password<br>
JWT_SECRET=your_jwt_secret<br>

---Client env---<br>
MOVIE_API_KEY=your_tmdb_api_key<br>

## Usage
1.Run the project: npm run start<br><br>2.Open the app on your browser<br><br>3.Use the responsive UI to swipe sign up, login, swipe through movies, and review your watched movies.

## Contributing
For contributions, please follow these steps:<br><br>1.Create a forked repository through GitHub.<br><br>2.Make changes and additions to the codebase as necessary.<br><br>3.Commit your changes using clear and descriptive commit messages.<br><br>4.Push your changes to the forked repository.<br><br>5.Create a Pull Request from your forked repository to the original repository. Make sure to provide detailed information about your changes.<br><br>6.The review process will commence to determine any questions, feedback, and necessary changes.<br><br>7.Once the Pull Request is approved, it will be merged into the main branch.

## Tests
There is currently no testing in the project. Testing will be a future feature.<br>For now, please follow the usage instructions and report any issues that you encounter.

## Deployment:
https://bumblebee-5a1e.onrender.com

## License
  This project is under the MIT license.
See more about this license here, [MIT](https://mit-license.org/?form=MG0AV3)

## Questions
For any questions or comments, please feel free to contact us GitHub. You can also find more of our work at [RodMP-Creative](https://github.com/RodMP-Creative), [andreamr78](https://github.com/andreamr78), [mikealiaga](https://github.com/mikealiaga), [GusCastMorf](https://github.com/GusCastMorf).
