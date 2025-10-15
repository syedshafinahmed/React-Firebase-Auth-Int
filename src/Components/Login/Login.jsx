import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Login = () => {

  const { signInUser } = use(AuthContext);
  console.log('login');

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div className='mt-20'>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* email  */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              {/* password  */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className='text-center'>New to our website? Please <Link className='text-blue-300 hover:text-blue-600' to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;