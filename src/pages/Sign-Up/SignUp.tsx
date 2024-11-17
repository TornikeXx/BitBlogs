import { Input } from '../../components/ui/input'
import CardFrame from '../../components/CardFrame/CardFrame'
const SignUp = () => {
    return (
      <div className='h-[100vh] flex items-center justify-center'>

      
    <CardFrame className='w-[400px]'>
    <div className='flex items-center justify-center flex-col mb-8'>
                  <h1 className=" text-[#03050c] text-xl font-semibold">Sign Up for BitBlogs</h1>
                  <p className="text-[#555969] font-thin">Create your account to start blogging</p>
                </div>
                <div className='mb-2'>
              <p className=" text-[#03050c] text-[16px] font-semibold mb-2">Name</p>
              <Input placeholder='john Doe' />    
                </div>
                <div className='mb-2'>
              <p className=" text-[#03050c] text-[16px] font-semibold mb-2">Email</p>
              <Input type='email' placeholder='john@example.com' />    
                </div>
                <div className='mb-2'>
              <p className=" text-[#03050c] text-[16px] font-semibold mb-2">Password</p>
              <Input type='password' />    
                </div>
                <div className='mb-2'>
              <p className=" text-[#03050c] text-[16px] font-semibold mb-2">Confrim Password</p>
              <Input type='password' />    
                </div>
                <button className="py-2 my-2 px-4 bg-buttonblue rounded-md text-white hover:bg-buttonblue-light w-[100%] " >
                  Sign up
                </button> 
                <div className='flex justify-center'>
                    <span className='text-[14px] font-thin'>Already have an account? <a href='login' className='text-buttonblue'>Log in</a></span>
                </div>
    </CardFrame>
    </div>
  )
}

export default SignUp
