import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';


const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <Link to="/" className=' font-bold dark:text-white text-3xl'>
        <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sahand's</span>
        Blog
        </Link>
        <p className='text-sm mt-5'>
          This is a demo Project. you can sign up with your email and 
          password 
          or with Google
        </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div className='mt-4'>
            <Label  value="Your Username" ></Label>
            <TextInput type='text' placeholder='Username' id='username'></TextInput>
            <div/>
           <div className='mt-4'>
            <Label  value="Your email" ></Label>
            <TextInput type='text' placeholder='email' id='name@company.com'></TextInput>
            </div>
            <div className='mt-4'>
            <Label  value="Your password" ></Label>
            <TextInput type='text' placeholder='password' id='password'></TextInput>
            </div>

            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <p className=''>
              Already have an account? <Link to="/Sign-in" className='text-blue-500'>Sign In</Link>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp