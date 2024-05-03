
import React, { useEffect, useState } from 'react'
import Container from '../containner/Container'
import { Link } from 'react-router-dom'
import axios from 'axios'
import InputField from '../input/InputField'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function SignUp() {


  const initialValues = {
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      }
    },
    phone: "",
  }
  const notify = () => toast.sucess(' User Signed Up Sucessfully!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
    });;                                         //toastify error msg
  
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)


  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log(formErrors)
    }
  }, [formErrors])

  const handleChange = (e) => {                                            //handle change
    const { name, value } = e.target;

    // Check if the name attribute includes a dot (indicating nested property)
    if (name.includes('.')) {
      // Split the name attribute to get nested property names
      const [parent, child] = name.split('.');

      // Update the nested state using functional update
      setFormValues(prevState => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value
        }
      }));
    } else {
      // If the name attribute doesn't include a dot, update normally
      setFormValues({ ...formValues, [name]: value });
    }
  };


  const signup = async () => {

    try {
      const data = await axios.post("https://fakestoreapi.com/users", formValues)
      notify()

    } catch (error) {
      console.log(error)
    }

  }

  const handleSubmit = (e) => {                                                 // handle on submit
    e.preventDefault()

    setIsSubmit(true)
    setFormErrors(validate(formValues))
    signup()
    console.log(Object.keys(formErrors).length)
    console.log(formValues)
  }

  const validate = (values) => {                                               // validate errors

    let errors = {};
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\d{10}$/;
    let zipcodeRegex = /^\d{6}$/;

    if (!values.username) {                                                //username 
      errors.username = "Name is required"
    }

    if (!values.name.firstName) {                                         //firstname 
      errors.firstName = "firstName is required"
    }

    if (!values.name.lastName) {                                         //firstname 
      errors.lastName = "lastName is required"
    }

    if (!values.email) {                                                // email error
      errors.email = "Email is required"
    }
    else if (!regex.test(values.email)) {
      errors.email = "Please enter valid email"
    }

    if (!values.phone) {
      errors.phone = "Phone number  is required"
    }
    else if (!values.phone.match(phoneRegex)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!values.password) {                                                                                          // password error
      errors.password = "Password is required"
    }
    else if (values.password.length > 8 || values.password.length < 8) {
      errors.password = "Password should be of 8 characters"
    }

    if (!values.address.city) {                                           //address
      errors.city = "city name is required"
    }
    if (!values.address.street) {
      errors.street = "street name is required"
    }
    if (!values.address.number) {
      errors.numder = "street number is required"
    }
    if (!values.address.zipcode) {
      errors.zipcode = "zipcode  is required"
    }
    else if (!values.address.zipcode.match(zipcodeRegex)) {
      errors.zipcode = " please fill valid zipcode  "
    }

    return errors;
  }

  return (
    <Container>

      <div className="flex items-center justify-center mt-24 bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

          <h2 className="text-2xl font-bold leading-tight text-violet-600">Create new Account account</h2>
          <p className="mt-2text-sm text-gray-600 ">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-violet-600 transition-all duration-200 hover:underline"
            >
              Login
            </Link>
          </p>

          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
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
                  label="User name"
                    type="text"
                    name='username'
                    placeholder="Username"
                    value={formValues.username}
                    onChange={handleChange}
                    error={formErrors.username}
                  />

                <InputField
                  label="Password"
                    type="text"
                    name='password'
                    placeholder="password"
                    value={formValues.password}
                    onChange={handleChange}
                    error={formErrors.password}
                  />      

                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Name{' '}
                  </label>
                  <InputField
                  
                    type="text"
                    name='firstname'
                    placeholder="firstname"
                    value={formValues.firstname}
                    onChange={handleChange}
                    error={formErrors.firstname}
                  />

                 <InputField
                  
                    type="text"
                    name='lastname'
                    placeholder='lastname'
                    value={formValues.lastname}
                    onChange={handleChange}
                    error={formErrors.lastname}
                  /> 




                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Address{' '}
                  </label>
                  <div className="mt-2">
                  <InputField
                    type="text"
                    name=' city'
                    placeholder="city"
                    value={formValues.city}
                    onChange={handleChange}
                    error={formErrors.city}
                  />

                  <InputField
                    type="text"
                    name='street'
                    placeholder="street"
                    value={formValues.street}
                    onChange={handleChange}
                    error={formErrors.street}
                  />
                  <InputField
                    type="text"
                    name='number'
                    placeholder="number"
                    value={formValues.address.number}
                    onChange={handleChange}
                    error={formErrors.number}
                  />


                  <InputField
                   
                    type="text"
                    name='zipcode'
                    placeholder="zipcode"
                    value={formValues.zipcode}
                    onChange={handleChange}
                    error={formErrors.zipcode}
                  />

                 
                  </div>
                </div>
                <InputField
                  label="phone"
                    type="text"
                    name='phone'
                    placeholder="phone"
                    value={formValues.phone}
                    onChange={handleChange}                  
                    error={formErrors.phone}
                  />
                
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-violet-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"

                >
                  Get started
                </button>
              </div>
            
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>


      <ToastContainer />
    </Container>
  )
}

export default SignUp
