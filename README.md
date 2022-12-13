![GitHub Workflow Status](https://img.shields.io/github/workflow/status/woolfsystems/react18-typescript-fullstack-boilerplate/playwright)
# React 18 Typescript Fullstack Boilerplate

### Implements
- React 18
- Tremor UI
- Express
- Typescript
- esbuild
- Playwright testing
- Github build action
- Docker image build

### Get started

To build the docker file and tag it as, for example `boilerplate`, you would enter the following at your terminal:

`docker build . --tag boilerplate:latest`

Then to run the container, and bind it's port to be available on 3002:

`docker run -p 3002:3000 --env-file .env boilerplate:latest`

The interface should now be available [here](http://localhost:3002/).

### Development

Install dependencies with `npm install`. Build frontend and backend with `npm run build`, run the backend with `npm run start`, and run a watcher to build the frontend on changes with `npm run dev:client`.
