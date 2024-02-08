# Pokemon

[![Tests Passing](https://github.com/Behzadsharafi/Pokemon/actions/workflows/Test.yml/badge.svg)](https://github.com/Behzadsharafi/Pokemon/actions/workflows/Test.yml)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Behzadsharafi/Pokemon/blob/main/LICENSE)

<div align='center'>

<h1> :leaves: Pokemon API :dragon:  </h1>
<p>A full-stack Pokemon with standard CRUD operations. The backend is in Nest TypeScript and MySQL, and the frontend is in React TypeScript.</p>

<h4> <span> ·  <a href="https://github.com/Behzadsharafi/Pokemon/issues"> Report a Bug </a> <span> · </span> <a href="https://github.com/Behzadsharafi/Pokemon/issues"> Request a Feature </a> </h4>

</div>

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Quick Demo](#camera-quick-demo)
  - [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  - [Run Locally](#running-run-locally)
- [Contributing](#wave-contributing)
  - [Code of Conduct](#scroll-code-of-conduct)
  - [Built With](#computer-built-with)
- [License](#warning-license)
- [Contact](#handshake-contact)

## :star2: About the Project

### :camera: Quick Demo

<div align="center"> <a href="#"><img src="pokemon-frontend/src/assets/demo.gif" alt='demo' width='800'/></a> </div>

### :dart: Features

- Creating, Reading, Updating, and Deleting pokemon
- Reusable code
- Mobile-responsive
- User-friendly
- Modern UI

## :toolbox: Getting Started

### :running: Run Locally

Clone the project

```bash
  git clone git@github.com:Behzadsharafi/Pokemon.git
```

To run the backend navigate to pokemon-backend

```bash
  cd Pokemon/pokemon-backend
```

Install dependencies

```bash
  npm install
```

Create the database

```bash
npx mikro-orm database:create
```

Create a migration

```bash
npx mikro-orm migration:create --initial
npx mikro-orm migration:up
```

Run the backend in watch mode

```bash
npm run start:dev
```

To run the front end navigate to the frontend directory

```bash
   cd Pokemon/pokemon-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## :wave: Contributing

<a href="https://github.com/Behzadsharafi/Pokemon/graphs/contributors"> <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" /> </a>

Contributions are always welcome!

See [Contributing](https://github.com/Behzadsharafi/Pokemon/blob/master/CONTRIBUTING.md) for ways to get started.

### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/Behzadsharafi/Pokemon/blob/master/CODE_OF_CONDUCT.md).

## :computer: Built With

- [React](https://react.dev/): frontend
- [TypeScripttypescript](https://www.typescriptlang.org/): frontend
- [SASS](https://sass-lang.com/): styling
- [MySQL](https://www.mysql.com/): database
- [Nest](https://nestjs.com/): backend
- [Jest](https://jestjs.io/): backend testing

## :warning: License

Distributed under the MIT License. See [License](https://github.com/Behzadsharafi/Pokemon/blob/master/LICENSE) for more information.

## :handshake: Contact

Email: behzadsharafi@gmail.com

Linkedin: [https://www.linkedin.com/in/zadsharafi/](https://www.linkedin.com/in/zadsharafi/)
