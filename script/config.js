const fs = require('fs');

if (!fs.existsSync('share/config.ts')) {
    fs.writeFile('share/config.ts', initConfig(), function (error) {
        if (error) {
            return console.log(error);
        }
        console.log('The file was saved!');
        console.log(initConfig());
    });
} else {
    console.log('config.ts already exist')
}

function initConfig() {
    return 'export class Config {' +
        'public static BASEURL: String = \'' + process.env.BASEURL + '\';' +
        'public static PRIVATE_KEY: String = \'' + process.env.PRIVATE_KEY + '\';' +
        'public static PUBLIC_KEY: String = \'' + process.env.PUBLIC_KEY + '\';}';
};




