// Write your solution in this file!
  
// Write your solution in this file!
let driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => { 
  let newEmp = {...driver};
  newEmp[key] = value;
  return newEmp;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => { 
  driver[key] = value;
  return driver;
}

const deleteFromDriverByKey = (driver, key) => {
  let newEmp = {...driver};
  delete newEmp[key];
  return newEmp;
} 

const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver;
}