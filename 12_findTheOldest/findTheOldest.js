const findTheOldest = function (people) {
  const oldestPerson = people.reduce((oldest, newest) => {
    const oldestYearOfDeath = oldest.yearOfDeath
      ? oldest.yearOfDeath
      : new Date().getFullYear();
    const newestYearOfDeath = newest.yearOfDeath
      ? newest.yearOfDeath
      : new Date().getFullYear();
    if (
      oldestYearOfDeath - oldest.yearOfBirth <
      newestYearOfDeath - newest.yearOfBirth
    ) {
      return newest;
    }
    return oldest;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
