function findMatching(drivers, query) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === query.toLowerCase()
  );
}

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
// fuzzyMatch function
function fuzzyMatch(drivers, query) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

// matchName function
function matchName(driverObjects, query) {
  return driverObjects.filter(
    (driver) => driver.name.toLowerCase() === query.toLowerCase()
  );
}
const driverObjects = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
