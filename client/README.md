## next-starter

Next.js starter code with TypeScript, Tailwind, and ESLint.

## Installation

1. Clone this repository.
2. `yarn install`
3. `yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the project

This website uses React + Next.js with Tailwind CSS for styling. 

For linting, we have ESLint configured using the Airbnb style guide for React. Vercel will only deploy if all linting errors are addressed.

## File structure

```
src/
  pages/
  styles/

... other files omitted for brevity
```

Every file in `pages/` gets deployed to a route on the actual website. For example. a request to `example.com/organizations` would get routed to `pages/organizations.tsx`. 

`styles/` contains a stylesheet that basically just imports the Tailwind utility classes. You shouldn't have to edit this much, since most styling will come from inline classes with Tailwind. 

## Deployment

All updates to the `main` branch are automatically deployed by Vercel. Vercel also generates preview deployments for any open pull requests. 
