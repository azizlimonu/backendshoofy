const bcrypt = require('bcryptjs');
const admins = [
  {
    name: 'John Doe',
    email: "johndoe@example.com",
    phone: "0813-4152-7495",
    password: bcrypt.hashSync("123456"),
    role: "Admin",
    joiningData: new Date()
  },
  {
    name: 'Aziz Limonu',
    email: "porter@gmail.com",
    phone: "708-628-3122",
    password: bcrypt.hashSync("123456"),
    role: "Super Admin",
    joiningData: new Date()
  },
];

module.exports = admins;
