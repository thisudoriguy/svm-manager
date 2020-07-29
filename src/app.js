const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errors');
const config = require('config');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/health', (req, res, next)=>{
    res.status(200).json(
        {
            status: 'UP'
        }
    );
});


app.use(morgan('dev'));

app.use('/api/woven-test/v1', routes);

app.use(errorHandlers.notFound);

if (config.environment === 'development') {
    app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.prodErrors);

module.exports = app;
