# React PWA Boilerplate

A boilerplate project created from the Facebook's [create-react-app](https://github.com/facebook/create-react-app) boilerplate generator. Besides the regular files that are generated normally, we have on this one, some specific extra configuration, that would be considered essential for a good, fluent and pragmatic development when you start something.

You can follow up here a basic flow with Login and Home page, with a consistent authentication flow already configured.

The usage of [react-scripts](https://www.npmjs.com/package/react-scripts) _(default)_ was not considered, because I thought better use its fork. A good one called [custom-react-scripts](https://github.com/kitze/custom-react-scripts), because using it, we are able to work with tons of extra configuration and resources without eject the boilerplate. _(My personal main motivation was for [@decorators](https://babeljs.io/docs/plugins/transform-decorators/) usage)_

We can find here some libraries, check the most important ones below:

Libraries
-
* [Redux](https://redux.js.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
* [Eslint](https://eslint.org/) _(with [Airbnb's pattern](https://github.com/airbnb/javascript) already configured)_

Available resources
-
* Decorators usage
* Absolute imports _(starting from `/src`)_
* Simple and **consistent** authentication mechanism

So, just enjoy it!
