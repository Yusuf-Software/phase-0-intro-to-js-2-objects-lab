const employee = {
    name: "",
    streetAddress: ""
  };
  
  function updateEmployeeWithKeyAndValue(obj, key, val) {
    const newEmp = { ...obj };
    newEmp[key] = val;
    return newEmp;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj;
  }
  
  function deleteFromEmployeeByKey(obj, key) {
    const newEmp = { ...obj };
    delete newEmp[key];
    return newEmp;
  }
  
  function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
  }
  