import { useState } from "react"
import { backendUrl } from "../App"
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = ({ setToken,  }) => {
 const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
    const submitHandler = async (e) => {
       
        try {
            e.preventDefault()
            console.log(email,password);
            const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
            console.log("Login response:", response.data); 
            
            if (response.data.success) {
                setToken(response.data.token)
            }
            else {
                toast.error(response.data.message)
            }
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
            
        }
        
    }
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
            <h1 className="text-2xl font-bold mb-4 ">Admin Panel</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3 min-w-72">
                    <span className="text-sm font-md text-gray-700 mb-2">Email Address</span>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} className="w-full rounded-md px-3 py-2 border border-gray-200 outline-none" type="email" placeholder="your@email.com" required/>
                </div>
                
                <div className="mb-3 min-w-72">
                    <span className="text-sm font-md text-gray-700 mb-2">Password</span>
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} className="w-full rounded-md px-3 py-2 border border-gray-200 outline-none" type="password" placeholder="Enter your password" required/>
                </div>

                <button className="w-full px-4 py-2 rounded-md text-white bg-black" type="submit">Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login