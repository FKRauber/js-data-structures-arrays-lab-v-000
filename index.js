// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}

function appendDriver(name) {
  newDrivers = [...drivers, name];
}

function prependDriver(name) {
  newDrivers = [name, ...drivers];
}

function removeLastDriver() {
    drivers.slice(drivers.length - 1);
}

function removeFirstDriver() {
  drivers.splice(0, 1);
}
