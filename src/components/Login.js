import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Auth from './Auth.js';

function Login({ handleLogin }) {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleInputEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleInputPasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    Auth.login(email, password)
      .then((data) => {
        if (data.token) {
          setEmail('');
          setPassword('');
          handleLogin();
          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <form className="login__form" autoComplete="off" noValidate onSubmit={handleSubmit} >
      <h2 className="login__header">Вход</h2>
      <input value={email} onChange={handleInputEmailChange} id="email" type="email" className="login__input" name="email"
        placeholder="Email" minLength="3" maxLength="30" required />
      <span className="login__text-error login-email-error"></span>
      <input value={password} onChange={handleInputPasswordChange} id="password" type="password" className="login__input " name="password"
        placeholder="Пароль" minLength="8" maxLength="30" required />
      <span className="login__text-error login-password-error"></span>
      <button type="submit" className="login__button-submit">Войти</button>
    </form>
  )
}
export default Login;