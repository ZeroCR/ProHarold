const userService = require('./userService')

module.exports = (app) => {
    app.get('/user', (req, res) => {
		const result = userService.getUsers();
		res.json(result)
    });

    app.get('/user/:id', (req, res) => {
		const result = userService.getUsers(req.params.id);
		res.json(result)
    });

	app.post('/user', (req, res) => {
		const result = userService.addUser(req.body);
		res.json(result)
    });
    
    app.update('/user', (req, res) => {
		const result = userService.updateUser(req.body);
		res.json(result)
    });
    
    app.delete('/user/:id', (req, res) => {
		const result = userService.deleteUser(req.body);
		res.json(result)
	});
}