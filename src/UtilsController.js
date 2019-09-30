const UtilsService = require('./UtilsService')

module.exports = (app) => {
	app.post('/esPalindromo', (req, res) => {
		const result = UtilsService.esPalindromo(req.body);
		res.json({result})
	});

	app.post('/biggestObject', (req, res) => {
		res.json(UtilsService.biggestObject(req.body))
	});

	app.post('/primos', (req, res) => {
		res.json(UtilsService.primos(req.body))
	});
	
	app.get('/msg', (req, res) => {
		res.json(UtilsService.msg(req.body))
	});
}
