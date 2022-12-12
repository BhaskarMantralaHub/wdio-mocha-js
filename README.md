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

## Auto update chromedriver based on local Chrome browser

```shell
#Package to install latest packages from package.json
npm install npm-check-updates --save-dev

#installs latest chromedriver and updates package.json file
#ncu - stands for npm check updates
#Add this to scripts on package.json
#ncu -f chromedriver -u & wdio run ./wdio.conf.ts
ncu -f chromedriver -u
```



