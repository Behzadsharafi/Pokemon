import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Please enter a pokemon name"),
  level: yup
    .number()
    .required("Level is required")
    .positive("Level must be positive")
    .min(1)
    .integer("Level must be an integer"),
  maxHp: yup
    .number()
    .required("MaxHP is required")
    .positive("MaxHP must be positive")
    .min(5)
    .max(9999)
    .integer("MaxHP must be an integer"),
  type: yup.string().required("Please select a pokemon type"),
});
