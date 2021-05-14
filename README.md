# @mtburdon/react-components

A set of reusable React components that can be used across different side projects. Components come with CSS variables for easy customisation.

## Available components

- [x] Collapsible

## Commands

`npm run build` - Build the project.

`npm run build-watch` - Build the project, watch for changes and rebuild.

`npm run start-playground` - Move to the `/playground` directory and start the dev server.

`npm run i-all` - Install dependences in the root and `/playground` folder.

`npm run dev` - Build the component library, watch for changes and start the playground, all in parallel. Uses `npm-run-all` to run multiple processes at once.

## Publishing

The `@mtburdon/react-components` NPM package is set up as a user-scoped package which means the package is scoped to my NPM username - @mtburdon. This is handy as it means the package name is not restricted to package names that haven't yet been taken.

By default, scoped packages are published with private visibility and so to publish the package publicly, the following command is used:

`npm publish --access public`

[Source - Publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages#publishing-scoped-public-packages)

## Notes

Used the following articles for initial repo setup:

- [Build a React Component Library and Publish to the GitHub Package Registry](https://betterprogramming.pub/build-your-very-own-react-component-library-and-publish-it-to-github-package-registry-192a688a51fd)
- [The 30-second guide to publishing a TypeScript package to NPM](https://medium.com/cameron-nokes/the-30-second-guide-to-publishing-a-typescript-package-to-npm-89d93ff7bccd)
