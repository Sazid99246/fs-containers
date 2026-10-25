\# Full Stack Open — Containerization



This repository contains my exercises for the Full Stack Open containerization section.



\## My App: Containerized Phonebook



A Phonebook application with a React/Vite frontend, an Express backend, MongoDB for data persistence, and Nginx as a reverse proxy.



\### Technologies



\- Docker and Docker Compose

\- Node.js

\- React and Vite

\- Express

\- MongoDB and Mongoose

\- Nginx



\### Development environment



The `my-app` directory contains the frontend and backend source code, development Dockerfiles, Docker Compose configuration, and Nginx configuration.



\#### Prerequisites



\- Docker Desktop installed and running

\- A MongoDB connection URI with appropriate access to the database



\#### Configuration



Create a file named `.env` inside `my-app` and add:



```env

MONGODB\_URI=your\_mongodb\_connection\_uri

```



Replace the placeholder with your own MongoDB connection URI. Do not commit this file or share its credentials.



\#### Run the application



From the `my-app` directory, run:



```bash

docker compose -f docker-compose.dev.yml up --build

```



Open \[http://localhost:8080](http://localhost:8080) in your browser.



To stop the containers, press `Ctrl+C`, then run:



```bash

docker compose -f docker-compose.dev.yml down

```



\### Original Phonebook project



The original application is maintained separately. [Phonebook application repository](https://github.com/Sazid99246/phonebook-cicd)

