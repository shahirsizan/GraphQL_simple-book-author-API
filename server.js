const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
// const expressGraphQL = require("express-graphql") will render error
// because `expressGraphQL` function is inside the object returned by `express-graphql`.
// so we have to destructure it

const app = express();

app.use(
	"/graphql",
	expressGraphQL({
		graphiql: true,
	})
);

app.listen(5000, () => console.log("Server Running"));
