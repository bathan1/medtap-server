# Medtap Server
This is the repo for Medtap's FHIR server.

## Installation steps
We will be using pnpm over npm because it is better (lol). To install pnpm:
1. First ensure you have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed. 
2. Once NodeJS and npm have been installed onto your systen, run `npm install -g pnpm`. See [pnpm](https://pnpm.io/installation) for details.

Once pnpm is installed, you are ready to run the server locally. To run it locally:
1. Run `pnpm install` in the root directory to install all packages.
2. Run `touch .env` and then add the fields listed in the .env.example file.
3. Run `pnpm dev` to run the "dev" script, which will run nodemon on the main.ts file. Nodemon will allow us to make changes to our server code and see the changes without having to exit and rerun `pnpm exec ts-node src/main.ts` each time. If everything is successful, you will see the server running locally at http://localhost:(port specified in .env).
