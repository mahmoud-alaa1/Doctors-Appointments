import Joi from "joi";

export const signUpSchema = Joi.object({
  fullName: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Full name is required",
    "string.min": "Full name must be at least 3 characters long",
    "string.max": "Full name must not exceed 30 characters",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .max(30)
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please provide a valid email address",
      "string.min": "Email must be at least 3 characters long",
      "string.max": "Email must not exceed 30 characters",
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be alphanumeric and 8-30 characters long",
    }),
});

export const signInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "any.required": "Email is required", // Custom required message
      "string.email": "Please provide a valid email address",
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
    .required()
    .messages({
      "string.empty": "Password is required",
      "any.required": "Password is required", // Custom required message
      "string.pattern.base":
        "Password must be alphanumeric and 8-30 characters long",
    }),
});
