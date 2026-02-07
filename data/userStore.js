const userDetails = [
  {
    username: "nikhil101",
    name: "Nikhil",
    email: "test@gmail.com",
    password: "$2b$10$cJcfjvJeMGNgGVP.xpk/PeWIbl4gGycI.ehE3ZNlMmOYl.ArFczHe",
    cart: [],
  },
];

const findUserByUsername = (username) =>
  userDetails.find((user) => user.username === username);

const addUser = (userData) => {
  userDetails.push(userData);
  return userData;
};

module.exports = {
  userDetails,
  findUserByUsername,
  addUser,
};
