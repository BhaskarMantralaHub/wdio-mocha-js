# WDIO - Mocha JS framework

## Setup

https://webdriver.io/docs/gettingstarted/

https://www.youtube.com/playlist?list=PLPO0LFyCaSo3oedws079pCNtppXAZdjv6

## How to run WDIO tests?

```npm 
//wdio is a script inside package.json
npm run wdio

//OR

wdio run ./wdio.conf.ts

//OR

npx wdio run ./wdio.conf.ts
```

## How to pass parameters from CLI?

```npm 
PROP1=VALUE1 wdio run ./wdio.conf.ts

//PROP1 will be accessed as proces.env.PROP1
``` 

## CLI parameters or dotenv .env?

dotenv.config() will override the properties sent from CLI


