let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passportClone = { ...passport, name: "Ivan" };

console.log(passport)
console.log(passportClone)