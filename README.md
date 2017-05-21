# Elm Gulp Environment
**By: Nisarga**

License: MIT

## Description
This [Gulp](http://gulpjs.com/) build environment was created to make scaffolding an Elm frontend application quicker. This default generator includes support for Bower, Bootstrap, Sass, and FontAwesome.

## Before Installation
Before installation ensure you have the following components installed on your system:

- [Elm](http://elm-lang.org/)
- [Node + NPM](https://nodejs.org/en/)
- [Bower CLI](https://bower.io/)
- [Gulp](http://gulpjs.com/)

Please stop and install these components correctly before continuing.

## Installation
Git clone the generator and run:
```
bower install
```
Follow the subsequent prompt, next run:
```
yarn install
```
You may also opt to do `npm install`

Now you are all setup to use the generator

## Usage
To run a development watcher run the command:
```
gulp dev
```
This will watch files in the `src` for changes. You will also need to run a webserver in the `dist` directory. I personally use [pushstate-server](https://www.npmjs.com/package/pushstate-server), which I installed by doing:
```
yarn global add pushstate-server
```
Then go to the `dist` directory and run:
```
pushstate-server .
```
while also having `gulp dev` running in a separate tab. Now when files are modifed during development, gulp will automatically build with the modified files and refreshing the browser at the location of the webserver (`localhost:9000` for pushstate-server) will reflect your changes.

## Batteries included
Out of the box this environment contains the popular Bootstrap framework, and FontAwesome, and support for [Sass](http://sass-lang.com) syntactical awesomeness for CSS. If you are looking to use a different CSS framework it is recommended to install it with `bower` and modify `./src/static/index.html` with the correct paths to reflect the changes. Subsequent versions of this generator will make it easier to plug in different CSS frameworks.
