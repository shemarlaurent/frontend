
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

// install the 'required' rule.
extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "Enter a valid email address"
});
