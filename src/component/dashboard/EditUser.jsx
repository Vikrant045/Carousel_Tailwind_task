import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../containner/Container';
import InputField from '../input/InputField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector,useDispatch} from 'react-redux'
import { updateUser } from '../../redux-toolkit/authSlice';

function EditUser() {
    const [user, setUser] = useState({

    });
    const { id } = useParams();
    const navigate = useNavigate();
  
console.log("User", user
)

    const notify = () => toast.error(' There is some error!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                let res = await axios.get(`https://fakestoreapi.com/users/${id}`);
                setUser(res.data);
            } catch (error) {
                notify();
                console.log(error);
            }
        };

        getUserDetails();
    }, [id]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name);
      console.log( value);
      if (name.startsWith("address")) {
          setUser(prevUser => ({
              ...prevUser,
              address: {
                  ...prevUser.address,
                  [name.split(".")[1]]: value
              }
          }));
      } else {
          setUser(prev => ({ ...prev, [name]: value }));
      }
  };
     const dispatch = useDispatch();
    const handleUpdate = async (e) => {

        e.preventDefault();
        let res= dispatch(updateUser(id,user))
           if(res){
            navigate("/dashboard");
           }
           else{
            notify();
            
           }
        // try {
        //     let response = await axios.put(`https://fakestoreapi.com/users/${id}`, user);
        //     console.log("Response from PUT request:", response.data);
        //     navigate("/dashboard");
        // } catch (error) {
        //     notify();
        //     console.log("Error updating user:", error);
        // }
    };

    return (
        <Container>
            <form onSubmit={(e) => handleUpdate(e)}>
                <div className='px-48'>
                    <div className="w-[300px] rounded-md border mt-48 ">
                        <img
                            src="https://media.istockphoto.com/id/1488678095/photo/mid-adult-latin-man-smiling-pointing-to-the-side-showing-copy-blank-space-isolated-over-blue.webp?b=1&s=170667a&w=0&k=20&c=cbhA4aDRJQ--oN-mat4syFk7oqlC8IK7MTXw22bZwXc="
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Username</h1>
                            <InputField
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={user?.username}
                                onChange={handleChange}
                            />
                            <h1 className="text-lg font-semibold">Email</h1>
                            <InputField
                                type="text"
                                placeholder="email"
                                name="email"
                                value={user?.email || ""}
                                onChange={handleChange}
                            />
                            <h1 className="text-lg font-semibold">City</h1>
                            <InputField
                                type="text"
                                placeholder="city"
                                name="address.city"
                                value={user?.address?.city || ""}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[20px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </Container>
    );
}

export default EditUser;
