import React from 'react'
import {Button, Label, TextInput} from 'flowbite-react'
import { Link } from 'react-router-dom'
export default function 
() {
  return (
    <div className='mt-10 min-h-screen'>
      <div className='block md:flex md:items-center pt-10 mx-auto w-10/12 gap-4'>
      {/* left div */}
      <div className='flex-1 mr-5 bg-red-500'>
        <h2 className='text-orange-500 text-2xl font-bold'>DestinyKers <span className='text-blue-600'>Bookstore</span></h2>
        <p className=''>
          Welcome back!
        </p>
      </div>
      {/* right div */}
      <div className='flex-1 pt-5'>
        <form className='flex flex-col gap-2'>
          <div>
            <Label value='Your UserName'/>
            <TextInput
            placeholder='Mark'
            type='text'
            id="userName"
            />
          </div>
          <div>
          <Label value='Your Email'/>
            <TextInput
            placeholder='mark@Gmail.com'
            type='email'
            id="email"
            />
          </div>
          <div>
          <Label value='Your Password'/>
            <TextInput
            placeholder='password'
            type='password'
            id="password"
            />
          </div>
          <Button gradientDuoTone="purpleToBlue">
            SignIn
          </Button>
        </form>
        <p className='flex pt-3 gap-2 text-sm'>
        Don't have an account? <span className='text-blue-600'>
          <Link to='/signup'>Sign up</Link>
        </span>
      </p>
      </div>
        </div>
    </div>
  )
}
