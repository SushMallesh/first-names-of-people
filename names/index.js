const peopleList = require("../country/state/city/index.js");
const firstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleList) => firstNames(peopleList);

getPeopleInCity(peopleList);

// console.log(getPeopleInCity(peopleList));
module.exports = getPeopleInCity;
