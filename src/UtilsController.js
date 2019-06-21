const esPalindromo = (palabra) => {
	const nuevaPalabra={
		palabra,
	}	
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
		return true;
	}
	return nuevaPalabra;
}

module.exports = (app) => {
	app.post('/esPalindromo', (req, res) => {
	  res.json(esPalindromo(req.query.palabra))
	})
  }

