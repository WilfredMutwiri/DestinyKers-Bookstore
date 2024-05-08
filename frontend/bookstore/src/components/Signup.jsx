import React, { useState} from 'react'
import {Alert, Button, Label, Spinner, TextInput} from 'flowbite-react'
import { Link,useNavigate} from 'react-router-dom'
export default function 
() {
  const Navigate=useNavigate()
  const [formdata,setFormData]=useState([]);
  const [errorMessage,setErrorMessage]=useState('');
  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
    setFormData({...formdata,[e.target.id]:e.target.value.trim()})
  }
  const handleSubmit=async(e)=>{
    console.log("submit initiated");
    setLoading(true);
    setErrorMessage(false)
    e.preventDefault();
    if(!formdata.userName || !formdata.email || !formdata.password){
      setErrorMessage("Kindly fill all fields!")
    }
    try {
      const res=await fetch('/api/test/signup',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formdata)
      })
    const data= await res.json()
    if(res.ok){
      Navigate('/login')
    }
    }
    catch (error) {
      console.log(error);
      setErrorMessage(error.message)
      setLoading(false)
    }
  }
  return (
    <div className='mt-10 min-h-screen'>
      <div className='block md:flex md:items-center pt-10 mx-auto w-10/12 gap-4'>
      {/* left div */}
      <div className='flex-1 mr-5 bg-red-500'>
        <h2 className='text-orange-500 text-2xl font-bold'>DestinyKers <span className='text-blue-600'>Bookstore</span></h2>
        <p className=''>
          Your one-stop bookstore, with all th favourite and recent books you can ever think of.
          Signup today to enjoy our premium books...all free!!
        </p>
      </div>
      {/* right div */}
      <div className='flex-1 pt-5'>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div>
            <Label value='Your UserName'/>
            <TextInput
            placeholder='Mark'
            type='text'
            id="userName"
            onChange={handleChange}
            />
          </div>
          <div>
          <Label value='Your Email'/>
            <TextInput
            placeholder='mark@gmail.com'
            type='email'
            id="email"
            onChange={handleChange}
            />
          </div>
          <div>
          <Label value='Your Password'/>
            <TextInput
            placeholder='password'
            type='password'
            id="password"
            onChange={handleChange}
            />
          </div>
          <Button gradientDuoTone="purpleToBlue" type='submit' disabled={loading}>
            {
              loading ? (
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
              ):"Sign up"
            }
          </Button>
        </form>
        <p className='flex gap-2 pt-3 text-sm'>
        Already have an account? <span className='text-blue-600'>
          <Link to='/login'>Sign In</Link>
        </span>
      </p>
      {
        errorMessage && <Alert color="failure">
          {errorMessage}
        </Alert>
      }
      </div>
        </div>
    </div>
  )
}
