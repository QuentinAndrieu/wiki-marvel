const fs = require('fs');

const baseUrl = process.env.BASEURL || '';
const privateKey = process.env.PRIVATE_KEY || '';
const publicKey = process.env.PUBLIC_KEY || '';

if (!fs.existsSync('src/app/share/config.ts')) {
    fs.writeFile('src/app/share/config.ts', initConfig(), function (error) {
        if (error) {
            return console.log(error);
        }
        console.log('The file was saved!');
    });
} else {
    console.log('config.ts already exist')
}

function initConfig() {
    return 'export class Config {' +
        'public static BASEURL: String = \'' + baseUrl + '\';' +
        'public static PRIVATE_KEY: String = \'' + privateKey + '\';' +
        'public static PUBLIC_KEY: String = \'' + publicKey + '\';}';
};




