import * as yup from "yup";

export const loginSchema = yup.object().shape({
  password: yup.string().required("Поле обезательно для заполнения"),
  email: yup
    .string()
    .required("Поле обезательно для заполнения")
    .email("email введёт некоректно"),
});

export const signupSchema = yup.object().shape({
  licence: yup
    .boolean()
    .oneOf(
      [true],
      "You cannot use our service without confirming the license agreement"
    ),
  country: yup.object().nullable().required("Поле обезательно для заполнения"),
  confirmPassword: yup
    .string()
    .required("Поле обезательно для заполнения")
    .oneOf([yup.ref("password")], "Пароль не совпадает c текущим"),
  password: yup
    .string()
    .required("Поле обезательно для заполнения")
    .matches(/^[^а-яА-Я]*$/g, "Пароль должен содержать только латинские буквы")
    .matches(/[A-Z]/g, "Пароль должен содержать 1 заглавную букву")
    .matches(/[0-9]+/g, "Пароль должен содержать 1 цифру")
    .matches(/^[^ ]*$/g, "Пароль не должен содержать символ 'пробел' ")
    .min(8, "Пароль должен состоять из 8 символов"),
  email: yup
    .string()
    .required("Поле обезательно для заполнения")
    .email("email введёт некоректно"),
  accountName: yup
    .string()
    .required("Поле обезательно для заполнения")
    .min(3, "Имя пользователя должно состоять хотя бы из 3 символов")
    .max(16, "Имя пользователя не должно состоять более чем 16 символов"),
});

export const courierFormSchema = yup.object().shape({
  firstName: yup.string().required("Поле обезательно для заполнения"),
});
