
const userIn = window.prompt('Type your flavors here separated by a comma.');

flavorList = userIn.split(',');
console.log(flavorList);

function flavorCount(flavors) {
  const flavorCounts = { };
  for (let i = 0; i < flavors.length; i++) {
    const flav = flavors[i];
    if(flavorCounts[flav] === undefined) {
      flavorCounts[flav] = 0;
    }
    flavorCounts[flav] = flavorCounts[flav] + 1;
  }
  return flavorCounts;
}

console.log(flavorCount(flavorList));