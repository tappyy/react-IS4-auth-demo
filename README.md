# Project Bebop

## Introduction
Project Bebop is a small demo of using oidc-client to authenticate a React app user via Identity Server 4 to access a web API. 

## Running Instructions
1. Run Identity and Web API from Visual Studio.
2. Navigate to `Bebop.WebApp`
3. Install dependencies with `npm install`
4. Run the React app with `npm start`

- **Identity** will run on `https://localhost:5001`.
- **Web API** will run on `https://localhost:5002`.
- **React App** will run on `https://localhost:3000`.

## Project Components
The project consists of 3 parts:
- **Bebop.WebApp:** A lightweight React app that implements oidc-client and Redux to handle user authentication via Identity Server 4.
- **Bebop.Identity:** Identity Server 4. Handles user authentication via OpenID Connect along with configuration of clients, users and resources.
- **Bebop.WebAPI:** A .Net Core Web API to be accessed by authenticated users from the React app.
