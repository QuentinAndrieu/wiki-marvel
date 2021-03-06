const express = require('express');
const app = express();
const path = require('path');

const forceSSL = function () {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}
// ForceSSL middleware
app.use(forceSSL());
app.use(express.static('dist'));
app.listen(process.env.PORT || 8080);

app.get('/*', function (req, res) {
    res.sendFile(path.join('dist/index.html'));
});