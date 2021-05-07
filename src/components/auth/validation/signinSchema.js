import React from 'react';
import * as yup from 'yup';

const signinSchema = yup.object().shape({
  email: yup
    .string()
    .email('Вкажіть, будь-ласка, коректну поштову скриньку')
    .required('Вкажіть, будь-ласка, свою поштову скриньку'),
  password: yup.string().required('Вкажіть, будь-ласка, свій пароль'),
});

export { signinSchema };
