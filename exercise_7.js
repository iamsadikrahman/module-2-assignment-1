function getAddressCity(address) {
  const city = address?.city;
  return city === undefined ? "Unknown" : city;
}

const address = {
  street: "123 Main St",
  country: "USA",
};

console.log(getAddressCity(address));

// output: Unknown
