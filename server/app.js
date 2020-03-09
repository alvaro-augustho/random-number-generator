const path = require('path'),
  express = require('express'),
  app = express();

app.use(express.static(path.resolve('public')));
app.set('view engine', 'html');

app.get('/getNumber', (req, res) => {

	const min = req.query.min ? parseFloat(req.query.min) : 0;
	const max = req.query.max ? parseFloat(req.query.max) : 100;

	res.json({ number: parseFloat(getRandomInt(min, max))});
});

function getRandomInt(min, max) {
	if(min > max) {
		return (((Math.random() * min)) + min).toFixed(2);
	} else {
		return (Math.random() * (max - min) + min).toFixed(2);
	}
}

module.exports = app;
