import * as Yup from "yup";

export const FORM_VALIDATION = Yup.object().shape({
  Name: Yup.string()
    .matches(/^[a-z]+$/, "Must be only charactes")
    .required("*Required"),
  Age: Yup.number().max(100, "Please enter a validAge").required("*Required"),
  Email: Yup.string().email("Invalid email.").required("*Required"),
  phoneNumber: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .min(1000000000, "Must be exactly 10 numbers")
    .max(9999999999, "Must be exactly 10 numbers")
    .required("*Required"),
});
