const Validator = require("validator"); // used to validate inputs & check formats/password match
const isEmpty = require("is-empty"); // global funcion used in conjunction with validator

module.exports = validateLoginInput = (data) => {
  // instantiate errors object
  let errors = {};

  // convert empty fields to an empty string to use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  // password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
