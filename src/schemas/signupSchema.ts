import * as yup from 'yup';

export const signupSchema = yup.object({
  email: yup.string().required().email().min(3).required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
      'Must Contain 5 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
});
