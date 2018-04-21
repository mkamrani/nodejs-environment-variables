var express = require('express')
var app = express();

const PORT_NUMBER = 3000;

app.get('/', (req, res) => {
    const envVars = process.env;
    res.send(`Your environment variables are: ${JSON.stringify(envVars)}`);
});

app.listen(PORT_NUMBER, () => console.log(`Demo app is listening to port ${PORT_NUMBER} ...`));
