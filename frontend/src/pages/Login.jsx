import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setAdmin } from '../redux/authSlice';
import { Loader2 } from 'lucide-react';
import { ADMIN_API_ENDPOINT } from '../utils/constant'

const Login = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const { loading, admin } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.post(`${ADMIN_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      })
      if (res.data.success) {
        dispatch(setAdmin(res.data.adminData));
        navigate('/admin/dashboard')
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message);

    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5 '>Login</h1>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-600 font-bold">Name</label>
            <input
              type="text"
              value={input.name}
              name='name'
              onChange={changeEventHandler}
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email Field  */}
          <div className="mb-4">
            <label className="block text-gray-600 font-bold">Email</label>
            <input
              type="email"
              value={input.email}
              name='email'
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 font-bold">Password</label>
            <input
              type="password"
              value={input.password}
              name='password'
              onChange={changeEventHandler}
              placeholder="eg: kI@323kjsf"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div className="flex items-center justify-between">
            <div className='flex items-center space-x-2 font-bold' name="example" color="gray" highContrast>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={input.role === 'admin'}
                onChange={changeEventHandler}
                className='cursor-pointer'
              />
              <label htmlFor="">Admin</label>
              <input
                type="radio"
                name="role"
                value="superadmin"
                checked={input.role === 'superadmin'}
                onChange={changeEventHandler}
                className='cursor-pointer'
              />
              <label htmlFor="">SuperAdmin</label>
            </div>
          </div>
          {
            loading ? <button className='flex  justify-center items-center w-full my-4 border border-black p-1 b bg-black text-white rounded-md font-medium '> <Loader2 className='m-2 h-4 w-4 animate-spin' /> <span>Please wait!</span> </button> : <button type='submit' className='w-full my-4 border border-black p-1 b bg-black text-white rounded-md font-medium'>Login</button>
          }
        </form>
      </div>
    </div>
  )
}

export default Login