import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useForm} from "react-hook-form";

function SignIn() {

    const { register, handleSubmit, formState: { errors} } = useForm();
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(false);

    function handleFormSubmit(data) {
        console.log(data)
        login(data.email);
        setError(false);
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="email-field">
              Email:
          <input
              type='email'
              id='email-field'
              {...register('email', {
                  required: 'Email is required',
                  pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Vul een gevalideerd email adres in',
                  }
              })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label htmlFor="password-field">
              Wachtwoord:
          <input
              type='password'
              id='password-field'
              {...register('password', {
                  required: 'Wachtwoord is verplicht',
                  minLength: {
                      value: 6,
                      message: 'Een wachtwoord heeft minimaal 6 karakters nodig'
                  }
              })}
          />
          </label>
          {errors.password && <p>{errors.password.message}</p>}
        <button type='submit'>Inloggen</button>
          {error && <p className='error-message'>Er is iets misgegaan bij het inloggen. Probeer het opnieuw</p>}
      </form>
      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;