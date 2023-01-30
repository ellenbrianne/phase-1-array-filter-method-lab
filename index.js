function findMatching (drivers, string) {
  let matchingDrivers = [];
  for (let item of drivers) {
    if (string.toLowerCase() === item.toLowerCase()) {
        matchingDrivers.push(item);
  };
};
    return matchingDrivers;
}; 

function fuzzyMatch (drivers, string) {
    let letterMatch = [];
    for (let item of drivers) {
        if (string[0] === item[0]) {
            letterMatch.push(item);
        };
    };
    return letterMatch;
};

function matchName (drivers, string) {
    let driverByName = [];
    for (let element of drivers) {
        if (string.toLowerCase() === element.name.toLowerCase()) {
            driverByName.push(element);   
        };
    };
    return driverByName;
};