# WikiMarvel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Init project

Create a folder name 'config' in 'src/app/share'

Create a file name Config.ts inside the config folder, and a class 'Config' :

export class Config {
    public static BASEURL: String = 'baseURLMarvelAPI';
    public static PRIVATE_KEY: String = 'yourPrivateKeyMarvelAPI';
    public static PUBLIC_KEY: String = 'yourPuplicKeyMarvelAPI';
}

Replace the values by the values of your Marvel API account.

Run 'npm install'

## Run project

Run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`.
