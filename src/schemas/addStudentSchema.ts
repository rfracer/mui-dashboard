import * as yup from 'yup';

export const addStudentSchema = yup.object({
  name: yup.string().required().required(),
  surname: yup.string().required(),
  className: yup.string().required(),
  age: yup.number(),
});
