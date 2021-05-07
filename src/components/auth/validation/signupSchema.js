import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Вкажіть, будь-ласка, коректну поштову скриньку')
    .required('Вкажіть, будь-ласка, свою поштову скриньку'),
  password: yup
    .string()
    .required('Вкажіть, будь-ласка, свій пароль')
    .min(6, 'Пароль має містити не менше 6 символів')
    .max(16, 'Пароль має бути не більше 16 символів'),
  // .matches(
  //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
  //   'Пароль повинен містити символи латинского алфавіту, прописні та заглавні букви та цифри',
  // ),
  // changePassword: yup
  //   .string()
  //   .required('Будь-ласка, підтвердіть свій пароль')
  //   .when('password', {
  //     is: val => (val && val.length > 0 ? true : false),
  //     then: yup
  //       .string()
  //       .oneOf([yup.ref('password')], 'Both password need to be the same'),
  //   }),
});

export { validationSchema };
