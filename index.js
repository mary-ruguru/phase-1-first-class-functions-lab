// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

function selectDifferentDrivers(driversArray, fn){
    return fn(driversArray);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
        return fareMultiplier * value;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, func) {
    return func(drivers);
}


//describe('index.js', function () {
 //   const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
 //   afterEach(function () {
 //     expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(['Antonia', 'Nuru', 'Amari', 'Mo']);
 //   });
  
 //   describe('returnFirstTwoDrivers()', function () {
 //     it('should return a new array containing the first two drivers from the passed-in array', function () {
 //       expect(returnFirstTwoDrivers(drivers)).to.eql(['Antonia', 'Nuru']);
 //     });
 //   });