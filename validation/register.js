const Validator = require("validator"); // usedd to validate inputs & check formats/password match
const isEmpty = require("is-empty"); // global funcion used in conjunction with validator

// this function will accept data from front end user input
// and validate it
module.exports = validateRegisterInput = (data) => {
  // instantiate errors object
  let errors = {};

  // convert empty fields to an empty string to use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.filter = !isEmpty(data.filter) ? data.filter : "";

  // name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  // password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
