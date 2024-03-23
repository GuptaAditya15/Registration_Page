import React, { useState } from 'react';
import gym from '../assets/gym.png';


function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation Code
    if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.password === '' || formData.gender === '') {
      console.error('Please fill in all fields.');
      return;
    }

    else if(!formData.email.includes("@gmail.com")){
      console.log( "Invalid Email");
      alert("Invalid Email!");
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className='h-screen' style={{backgroundImage : `url(${gym})`, backgroundSize : "cover"}}>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

          <h2 className="mt-10 text-center text-5xl font-bold text-white">Registration</h2>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block text-1xl font-medium text-white">First Name</label>
                  <input
                    className="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="first_name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-1xl font-medium text-white">Last Name</label>
                  <input
                    className="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="last_name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-1xl font-medium text-white">Email address</label>
                <div className="mt-2">
                  <input
                    className="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-1xl font-medium leading-6 text-white">Password</label>
                </div>
                <div className="mt-2">
                  <input
                    className="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset"
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-1xl font-medium text-white">Gender</label>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="w-4 h-4 form-radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-white">Male</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="w-4 h-4 form-radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-white">Female</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-black rounded " required />
                <label className="ms-2 text-sm font-medium text-white">Accept <a href='#' className='underline'>Terms</a> & <a href='#' className='underline'>Condtions</a></label>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md font-bold bg-indigo-600 px-3 py-3 text-2xl hover:bg-indigo-900">Register</button>
              </div>
            </form>

            <p className="mt-7 text-center text-sm text-white">
              Already have an account?
              <a href="#" className="font-bold leading-6 px-1 text-white hover:text-blue-500">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
