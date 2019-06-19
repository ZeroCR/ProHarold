const getUser = (id)=> {
  const newId = parseFloat(id)
  const user = userList.find(item => item.id === newId);
  if(!user) {
    return {
      error: 'no user'
    }
  } else {
    return user;
  }
}

const createUser = (name, lastName)=> {
  const newUser = {
    name,
    lastName,
    id: Math.floor(Math.random() * 1000 * 1000)
  }
  userList.push(newUser)
  return newUser;
}

const userList = [];
  
module.exports = (app) => {
  app.get('/user', (req, res) => {
    res.json(getUser(req.query.id))
  })

  app.post('/user', (req, res) => {
    res.json(createUser(req.query.name, req.query.lastName))
  })
}