
    import React, { useState ,useEffect} from 'react'
    import Container from '../containner/Container'
    import { Link,useNavigate } from 'react-router-dom'
    import axios from 'axios';
import InputField from '../input/InputField';

import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

    
    function Login() {
  
        const [error, setError ] = useState(false);
      const initialValues = {
        
        email:"",
        password:"",
       
    }
    const [formValues,setFormValues] = useState(initialValues);
    const [formErrors,setFormErrors] = useState({});
    const[isSubmit, setIsSubmit]=useState(false)
    let navigate = useNavigate();

    const notify = () => toast.success('User Logged In SucessFully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });                     //toastify error msg
    

    useEffect(()=>{
      if(Object.keys(formErrors).length==0 && isSubmit){
        console.log(formErrors)
      }
    },[formErrors])
    
    const  handleChange =(e)=>{                                                              //handle_Change
    
      const{name,value} = e.target;
      console.log(e.target.value)
    
      setFormValues({...formValues,[name]:value});
      console.log(formValues)
    }
    
    const login = async()=>{                                                             // login function                                  
       
      let staticData={
        username: "mor_2314",
        password: "83r5^_"
      }
      notify();
      try {
         const res = await axios.post("https://fakestoreapi.com/auth/login", staticData)
          console.log(res.data.token)
          Cookies.set("token",res.data.token,{expires:7});                                 // key = token , value  res.data.token
         let token = Cookies.get("token")
          console.log(token) 
          
          if(token){
            
            setError(false)
            navigate("/dashboard")
          } 
          else{
           // navigate( "/signUp")
          }
        } catch (error) {
          setError(true);
        console.log(error) 
      }
    }
       
      
    const  handleSubmit =(e)=>{                                                           // handle on submit
           e.preventDefault()
           setIsSubmit(true)
         setFormErrors(validate(formValues))
           //signUp()
  
         console.log(Object.keys(formErrors).length)
         console.log(formValues)
         login();
    }
    
    const validate = (values)=>{                                                         // validate errors
    
         let errors ={};
         let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
    
         if(!values.email){                                                         // email error
          errors.email= "Email is required"
         }
         else if(!regex.test(values.email)){
          errors.email= "Please enter valid email"
         }
    
        
         if(!values.password){                                                      // password error
          errors.password = "Password is required"
         }
         else if(values.password.length >8 || values.password.length <8 ){
          errors.password = "Password should be of 8 characters"
         }
        return errors;
    }
    
      { if(error) return <div className='text-5xl text-red-500'>Error in fetching data</div> }
    
      return (
        <Container>
    
       
          <div className="flex items-center justify-center mt-24 bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
             
              <h2 className="text-2xl font-bold leading-tight text-violet-600">Login in to your account</h2>
              <p className="mt-2text-sm text-gray-600 ">
                Don&apos;t have an account?{' '}
                <Link
                  to="/signIn"
                  className="font-semibold text-violet-600 transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="space-y-5">
                
                  <InputField
                  label="Email"
                    type="email"
                    name='firstName'
                    placeholder="Your email"
                    value={formValues.email}
                    onChange={handleChange}
                    error={formErrors.email}
                  />
                  
                  <InputField
                  label="Password"
                    type="password"
                    name='password'
                    placeholder="Your password"
                    value={formValues.password}
                    onChange={handleChange}
                    error={formErrors.password}
                  />

                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-violet-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
              
            </div>
          </div>
      
    
          <ToastContainer />
    </Container>
  )
}

export default Login
