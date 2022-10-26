import * as yup from 'yup';

export const signinSchema = yup.object({
  email: yup.string().required().email().required(),
  password: yup.string().required(),
});
