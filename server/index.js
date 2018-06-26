import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config';

let app = express();
let compiler = webpack(config);

app.use(webpackMiddleware(compiler));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});