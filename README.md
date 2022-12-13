# React 18 Typescript Fullstack Boilerplate

To build the docker file and tag it as, for example `boilerplate`, you would enter the following at your terminal:

`docker build . --tag boilerplate:latest`

Then to run the container, and bind it's port to be available on 3002:

`docker run -p 3002:3000 --env-file .env boilerplate:latest`

The interface should now be available [here](http://localhost:3002/).