import { Input } from '../../components/ui/input'
import CardFrame from '../../components/CardFrame/CardFrame'
const SignIn = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
        <CardFrame className='w-[400px]'>
              <div className='flex items-center justify-center flex-col mb-8'>
                  <h1 className=" text-[#03050c] text-xl font-semibold">Log in to BitBlogs</h1>
                  <p className="text-[#555969] font-thin">Enter your credentials to access your account</p>
              </div>
              <div className='mb-2'>
              <p className=" text-[#03050c] text-[16px] font-semibold mb-2">Email</p>
              <Input type='email' placeholder='john@example.com' />    
              </div>
              <div className='mb-2'>
              <p className=" text-[#03050c] text-[16px] font-semibold mb-2">Password</p>
              <Input type='password' />    
              </div>
              <button className="py-2 my-2 px-4 bg-buttonblue rounded-md text-white hover:bg-buttonblue-light w-[100%] " >
                  Log in
              </button>    
              <div className='flex justify-between'>
                  <span className='text-buttonblue font-thin text-[14px] hover:underline'>Forgot password?</span>
                  <span className='text-[14px] font-thin'>Don't have an account? <a href='register' className='text-buttonblue'>Sign up</a></span>
              </div>      
      </CardFrame>
    </div>
  )
}

export default SignIn
