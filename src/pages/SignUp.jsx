import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";

function SignUp() {

    const { register, handleSubmit, formState: {errors} }= useForm();
    const [error, setError] = useState(false);

    function handleFormSubmit(data) {
        console.log(data)
        setError(false);
    }


  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form className='sign-up-form' onSubmit={handleSubmit(handleFormSubmit)}>
          <h1>Vul hier je gegevens in:</h1>
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
          <label htmlFor="username-field">
              Gebruikersnaam:
              <input
                  type='text'
                  id='username-field'
                  {...register('password', {
                      required: 'Wachtwoord is verplicht',
                      minLength: {
                          value: 8,
                          message: 'A password requires a minimum of 8 characters'
                      }
                  })}
              />
          </label>
          <label htmlFor="password-field">
              Wachtwoord:
              <input
                  type='password'
                  id='password-field'
                  {...register('password', {
                      required: 'Wachtwoord is verplicht',
                      minLength: {
                          value: 8,
                          message: 'A password requires a minimum of 8 characters'
                      }
                  })}
              />
          </label>
          <button type='submit'>Maak account aan</button>
          {error && <p className='error-message'>Er is iets misgegaan. Probeer het opnieuw</p>}
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;


// const [formState, setFormState] = useState({
//     isAuth: false,
//     user: '',
//     email: '',
//     userName: '',
//     password: '',
// });

// function handleChange(e) {
//     setFormState({
//         ...formState,
//         [e.target.name]: e.target.value,
//     })
// }

{/*<Input*/}
{/*    type='text'*/}
{/*    name='password'*/}
{/*    labelText='Bevestig wachtwoord'*/}
{/*    value={formState.confirmPassword}*/}
{/*    onChange={handleChange}*/}
{/*    required={true}*/}
{/*/>*/}