let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};

let passportWithAddressCopy = { ...passportWithAddress, address: { ...passportWithAddress.address, city: "Bobryisk" } };

console.log(passportWithAddress.city)
console.log(passportWithAddressCopy.city)