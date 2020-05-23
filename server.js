const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));

app.engine(".html", exphbs({ extname: ".html" }));
app.set("view engine", ".html");

app.get("/*", function (req, res) {
  const path = decodeURIComponent(req.path.substring(1));
	res.render(path == "" ? "index" : path);
});

let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});