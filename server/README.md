## FlickPicks API

This is the backend for the FlickPicks API, currently deployed to `https://flickpicks.fly.dev`.

## Environment variables

Both development and deployment depend on a certain set of environment variables, stored in `./src/flickpicks_api/.env`. We have created a `.env.example` file for reference -- you should fill in the values in this file, and rename it to `.env`. 

## Developing

Make sure you have Docker installed. Then simply run the following command to start a hot-reloading server on port 8000:

1. `docker-compose up`

Now visit `localhost:8000/docs` to see the live API documentation. 

This command will build and run a Docker image using the dependencies and scripts specified in `pyproject.toml`, with the current folder mounted to `/app` in the Docker container. 

## Deploying

First, make sure you have `flyctl` installed and have set up a [fly.io](https://fly.io) account. To deploy the app, simply run `fly deploy`. You may have to run `fly launch` if it's your first time deploying. 

