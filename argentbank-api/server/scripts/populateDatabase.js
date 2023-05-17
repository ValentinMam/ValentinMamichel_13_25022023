const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456'
  },
   {
    firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'bruce@wayne',
    password: 'batpassword'
  },

    {
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'peter@parker.com',
    password: 'password789'
  }
]





users.forEach(user => {
  axios
    .post(signupApi, user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
})



 