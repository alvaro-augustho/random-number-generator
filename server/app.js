const path = require('path'),
  express = require('express'),
  app = express();

app.use(express.static(path.resolve('public')));
app.set('view engine', 'html');

app.get('/', (req, res) => {
	res.sendFile(path.resolve('public', 'index.html'));
});

app.get('/getNumber', (req, res) => {

	const min = req.query.min ? parseFloat(req.query.min) : 0;
	const max = req.query.max ? parseFloat(req.query.max) : 100;

	res.json({ number: getRandomInt(min, max)});
});

app.listen(3000, function () {
	console.log('Express server is up on port 3000');
});

function getRandomInt(min, max) {
	return (Math.random() * (max - min) + min).toFixed(2);
}
