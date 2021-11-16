function validatePassword (valid) {
    if (passwordisnotlongenough(valid) === true && 
    passwordlowercase (valid) === true && 
    passworduppercase (valid) === true &&
    passwordnumericvalue (valid) === true &&
    passwordspecialcharacter (valid) === true) {
    return true 
    }
    else {
        return false
    }
}

function passwordisnotlongenough(valid) {
    if (valid) {
        return true
    }
    else {
        return false
    }
}

function passwordLowerCase(valid) {
    if (valid) {
      return true
    }
    else {
      return false
    }
  }

function passwordUpperCase(valid) {
    if (valid) {
      return true
    }
    else {
      return false
    }
  }

function passwordNumericValue(valid) {
    if (valid) {
      return true
    }
    else {
      return false
    }
  }

function passwordSpecialCharacter(valid) {
    if (valid) {
      return true
    }
    else {
      return false
    }
  }
  
module.export = validatePassword
