import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jonahthan User",
    email: "adminjonni@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Foberper User",
    email: "foberson@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
