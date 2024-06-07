<h1 align="center">
  <a href="#"> TO-DO List with Authentication (Next.js, Hasura, TypeScript) </a>
</h1>

<h4 align="center"> 
	 Status: On Progress
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> •  
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>
</p>

## About

This is a simple todo project for exploring graphql with Hasura cloud. I have used Hasura for authentication, Graphql api and database management. Also for the front-end I have used Next.js with TypeScript

---

## Features

- User Authentication - Registration and Login (You can use NextAuth.js or nhost)
- List of todo with ability to:
  - Add new tasks
  - Mark tasks as completed/incomplete
  - Edit existing tasks
  - Delete tasks
- Categories for to-do

- Send email notification when a task is completed. (Use hasura event triggers)
- Create a trash folder where deleted tasks will be stored for a set amount of time (Use postgres functions). Users can permanently remove/delete tasks from the trash folder if desired.

---

## How it works

The project is divided into two parts:

1. Backend (another repo)
2. Frontend (this repo)

But this repository is referring only to the Frontend part. Frontend need the Backend to be running to work.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com),
[Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone git@github.com:

# Access the project folder in your terminal
$ cd todo

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The application will open on the port: 3000 - go to http://localhost:3000

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Platform** ([Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Axios](https://github.com/axios/axios)**
- **[Leaflet](https://react-leaflet.js.org/en/)**
- **[React Leaflet](https://react-leaflet.js.org/)**
- **[React Redux](https://github.com/reduxjs/react-redux)**
- **[AntDesign](https://ant.design/)**
- **[react-device-detect](https://github.com/duskload/react-device-detect)**
- **[moment.js](https://momentjs.com/)**
- **[Bootstrap](https://getbootstrap.com/)**
- **[sass](https://github.com/sass/dart-sass)**
- **[Styled Components](https://github.com/styled-components/styled-components)**

> See the file [package.json](https://github.com/evelinsteiger/README-template/blob/master/package.json)

#### [](#)**Utils**

- API: **[IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)** → **[API de UFs](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)**, **[API de Municípios](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)**
- Maps: **[Leaflet](https://react-leaflet.js.org/en/)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Icons: **[Feather Icons](https://feathericons.com/)**, **[Font Awesome](https://fontawesome.com/)**
- Fonts: **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**, **[Roboto](https://fonts.google.com/specimen/Roboto)**

---

## License

This project is under the license [MIT](./LICENSE).
