import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Container from '../containner/Container'
import axios  from 'axios';
import {Link, useNavigate} from "react-router-dom"
function Dashboard() {

    const [people, setPeople] = useState([]);
    const navigate = useNavigate();
    useEffect( ()=>{
         
        const fetchData = async ()=>{                                        //  fetch user data
            try {
                const res = await axios.get("https://fakestoreapi.com/users");
                setPeople(res.data);
                console.log(res.data)
                console.log(people)
            } catch (error) {
                console.log(error)
            }
        }
      fetchData();
    },[])

    const  handleDelete = async(userId)=>{                                            //delete User
        try {
         let deletedUser=   await axios.delete(`https://fakestoreapi.com/users/${userId}`)
         console.log(deletedUser)
        let updArray=  people.filter((person)=> person.id !== userId )
        setPeople(updArray);
        } catch (error) {
             console.log(error)
        }
    }

  return (
   <>
   <Container>
   <section className="mt-16 w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Employees</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
          
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Username
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        email
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        City
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://media.istockphoto.com/id/1488678095/photo/mid-adult-latin-man-smiling-pointing-to-the-side-showing-copy-blank-space-isolated-over-blue.webp?b=1&s=170667a&w=0&k=20&c=cbhA4aDRJQ--oN-mat4syFk7oqlC8IK7MTXw22bZwXc="
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name.firstname}</div>
                              <div className="text-sm text-gray-700">{person.name.lastname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.username}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {person.email}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.address.city}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <Link to={`editUser/${person.id}`} className="text-gray-700 mr-2 ">
                            Edit
                          </Link>
                          <a onClick={()=>{                              // delete button  
                              handleDelete(person.id)
                          }} className="text-gray-700 ml-6 hover:cursor-pointer">
                            Delete
                          </a>
                        </td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </Container>
        <div className='fiexd'>
        <Footer/>
        </div>
        
   </>
        
    
  )
}

export default Dashboard
