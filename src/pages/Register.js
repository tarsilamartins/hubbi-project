import React from 'react';
import * as yup from 'yup';

import axios from 'axios';
import { history } from '../history';
import { Form, Button } from 'semantic-ui-react';

export default function Register() {
  const handleSubmit = (values) => {
    axios.post('', values).then((resp) => {});
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });
  return (
    <>
      <h1>Register</h1>
      <Form
        defaultValue={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form.Field name="email">
          <label>E-mail</label>
          <input placeholder="E-mail" />
        </Form.Field>
        <Form.Field name="password">
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
