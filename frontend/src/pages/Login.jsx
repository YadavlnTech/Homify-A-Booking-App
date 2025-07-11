// import React, { useContext, useState } from 'react'
// import { IoMdEye } from "react-icons/io";
// import { IoMdEyeOff } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { authDataContext } from '../Context/AuthContext';
// import axios from 'axios';
// import { userDataContext } from '../Context/UserContext';
// import { toast } from 'react-toastify';

// function Login() {
//     let [show,setShow] = useState(false)
//     let {serverUrl} = useContext(authDataContext)
//     let {userData,setUserData} = useContext(userDataContext)
//     let [email,setEmail]= useState("")
//     let [password,setPassword]= useState("")
//     let {loading,setLoading}= useContext(authDataContext)
//     let navigate = useNavigate()
//      const handleLogin = async (e) => {
//         setLoading(true)
//             try {
//                 e.preventDefault()
//                 let result = await axios.post(serverUrl + "/api/auth/login",{
//                     email,
//                     password
    
//                 },{withCredentials:true})
//                 setLoading(false)
//                 setUserData(result.data)
//                 navigate("/")
//                 console.log(result)
//                  toast.success("Login Successfully")
//             } catch (error) {
//                 setLoading(false)
//                 console.log(error)
//                 toast.error(error.response.data.message)

//             }
            
//         }
//   return (
//      <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
//         <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={()=>navigate("/")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>
//             <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]' onSubmit={handleLogin}>
//                 <h1 className='text-[30px] text-[black]'>Welcome to Airbnb</h1>
//                 <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
//               <label htmlFor="email" className='text-[20px]'>Email</label>
//               <input type="text" id='email' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
//               </div> 
//               <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative  '>
//               <label htmlFor="password" className='text-[20px]' >Password</label>
//               <input type={show?"text":"password"} id='password' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px] ' required onChange={(e)=>setPassword(e.target.value)} value={password} />
//               {!show && <IoMdEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={()=>setShow(prev =>!prev)}/>}
//               {show && <IoMdEyeOff className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={()=>setShow(prev =>!prev)}/>}
//               </div>
//               <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg ' disabled={loading}>{loading?"Loading...":"Login"}</button>
//               <p className='text-[18px]'>Create new account <span className='text-[19px] text-[red] cursor-pointer' onClick={()=>navigate("/SignUP")}>SignUp</span>
//               </p>
//             </form>
         
//         </div>
//   )
// }

// export default Login



import React, { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';
import { userDataContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { serverUrl, loading, setLoading } = useContext(authDataContext);
  const { setUserData } = useContext(userDataContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(serverUrl + "/api/auth/login", {
        email,
        password
      }, { withCredentials: true });
      setUserData(result.data);
      toast.success("Login Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative text-white">
      
      {/* Back Button */}
      <div
        className="w-12 h-12 bg-red-600 hover:bg-red-700 cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center transition"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="text-white text-xl" />
      </div>

      {/* Login Form */}
      <form
        className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col items-center gap-6"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl font-bold mb-4 text-red-400">Welcome to Homyfy</h1>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">Email</label>
          <input
            type="email"
            id="email"
            className="w-full h-12 px-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:border-red-500"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-2 relative">
          <label htmlFor="password" className="text-lg">Password</label>
          <input
            type={show ? "text" : "password"}
            id="password"
            className="w-full h-12 px-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:border-red-500"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute right-4 bottom-3 cursor-pointer text-xl text-gray-400"
            onClick={() => setShow(prev => !prev)}
          >
            {show ? <IoMdEyeOff /> : <IoMdEye />}
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg font-semibold transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p className="text-base mt-2">
          Don't have an account?{" "}
          <span
            className="text-red-400 hover:underline cursor-pointer"
            onClick={() => navigate("/SignUP")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;

