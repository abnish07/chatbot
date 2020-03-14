export const validators = {
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Invalid email address"
  },
  username: {
    minLength: 4,
    value: /[A-Z][a-z]/i,
    message: ""
  },
  password: {
    required: true,
    minLength: 6
  }
};
