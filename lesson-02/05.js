let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passportClone = { ...passport, name: "Ivan" };

console.log(passport.name)
console.log(passportClone.name)