require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 8234;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));