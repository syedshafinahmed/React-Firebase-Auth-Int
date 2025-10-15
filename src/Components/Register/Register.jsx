import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.init';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log("clicked", name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className='mt-20'>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* mame  */}
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Your Name" />
              {/* email  */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              {/* password  */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p className='text-center'>Already have an account? Please <Link className='text-blue-300 hover:text-blue-600' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;