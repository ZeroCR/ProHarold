const UtilsService = require('./UtilsService')

module.exports = (app) => {
	app.post('/esPalindromo', (req, res) => {
		res.json(UtilsService.esPalindromo(req.query.palabra))
	});

	app.post('/biggestObject', (req, res) => {
		res.json(UtilsService.biggestObject(req.body))
	});

	app.post('/primos', (req, res) => {
		res.json(UtilsService.primos(req.body))
	});
}
