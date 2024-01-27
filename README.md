# Unknown Food App

![Build Status](https://github.com/prashanthKumar0/unnamed-food-app/actions/workflows/node.js.yml/badge.svg?branch=master)

## Run
```sh
npm run dev
```

## Build
```sh
npm run build
```

## Deploy 
```sh
npm run deploy
```
> Deploy is not working for some reason we could use vercel later


# Project Info

## Project structure
> feel free to do anything its just a guideline-ish thing
[Eraser App Sketch](https://app.eraser.io/workspace/vQNxzJnlZkkNCrzWGHSn)

## DB schema

- User 
    - id : string | int
    - type : string ('hungry' | 'feeder' | 'helper')
    - name : string
    - phone_number : string
    - password : string
    - address : string ```optional for hungry type user```
    - otp : string
    - is_verified : bool


- Marker
    - id : string
    - user_id : string ```this marker is associated with which user```
    - ?type : string ('food' | 'hungry_man') ```or we could use user's type to determine this attribute ?```
    - lat : string
    - long : string

- Post
    - id : string
    - user_id : string
    - marker_id : string
    - description : string
    - images: string[] ```or we should normalize it to have only single valued attrib? but this approach is a bit easy```
    - date : timestamp?





<!-- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
