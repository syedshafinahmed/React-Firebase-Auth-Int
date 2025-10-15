import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className='mt-20'>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form>
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