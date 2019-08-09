import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const RegistrationForm = ({ errors, touched, values, status }) => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (status) {
      // console.log('status', status)
      setRecipes([...recipes, status]);
      setRecipes([...status])
      // console.log('recipes', recipes)
    }
  }, [status]);

  return (
    <div className='registration-form'>
      <h1>Registration Form</h1>
      <Form>
        <Field
          type='text'
          name='username'
          placeholder='username'
          className='form-field'
        />
        {touched.username && errors.username && (
          <p className='error'>{errors.username}</p>
        )}
        <Field
          type='password'
          name='password'
          placeholder='Password'
          className='form-field'
        />
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}
        <button type='submit'>Submit</button>
      </Form>

      {recipes && recipes.map((recipe, index) => (
        <div key={index} className='recipe'>
          <h3 >{recipe.course} course: {recipe.name}</h3>
        </div>
      ))}
    </div>
  );
};


const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup
      .string()
      .required('You must provide an username')
      .min(6, 'Username must be at least 6 characters long.'),
    password: Yup
      .string()
      .min(6, 'Password must be at least 6 characters long.')
      .required('You need a password to log back in'),
  }),

  handleSubmit(values, { setStatus, setErrors, resetForm }) {
    // const email = this.state.email;
    // const filterEmail = email.filter(x => x === email);
    if (values.username === "pdadlani") {
      setErrors({ username: "That username is already taken" });
    } else {

      axios
        .post(`http://localhost:5000/api/register`, values)
        .then(response => {
          // console.log('res in axios post', response.data)
          // setStatus(response.data);
          resetForm();
        })
        .catch(error =>
          console.log("Error in handleSubmit axios.post call", error.response)
        );
      axios
        .get(`http://localhost:5000/api/restricted/data`)
        .then(response => {
          console.log('response in axios.get', response);
          setStatus(response.data)
        })
        .catch(error => {
          console.log("Error in handleSubmit axios.get call", error);
        });
    }
  }
})(RegistrationForm);

export default FormikRegistrationForm;