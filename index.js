require('dotenv').config();  // can only be called 1 time if written like this.  Can't be used further down in the code like a const something = require();  In this case we will never use it again so no need to set it to a const.

const server = require("./api/server.js");

// const port = 5000;

// above is what we used to do.  Below will allow us to let Heroku set a port to use or if the environment port is not present then it will use what we have set as 5000.  This can allow us to have it running on 2 ports at once if an env was set prior as well as if no env is present then the 5000 that we hard set. 

// const port = process.env.PORT || 5000;

// Installing mod dotenv will allow you to not hard-code a port value. Like above lets Heroku to set the port but gives me as the developer control on my own device.
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
