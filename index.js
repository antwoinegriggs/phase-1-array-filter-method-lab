// Code your solution here
const findMatching = function (driverList, name) {
  let findDrivers = driverList.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
  return findDrivers;
};

const fuzzyMatch = function (driverList, name) {
  let findDrivers = driverList.filter((driver) => driver[0] === name[0]);
  return findDrivers;
};

const matchName = function (driverList, name) {
  let findDrivers = driverList.filter((driver) => driver.name === name);
  return findDrivers;
};
