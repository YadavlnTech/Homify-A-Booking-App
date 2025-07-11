// import React, { useContext, useState } from 'react'
// import { IoMdEye } from "react-icons/io";
// import { IoMdEyeOff } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
// import { FaArrowLeftLong } from "react-icons/fa6";
// import axios from 'axios';
// import { authDataContext } from '../Context/AuthContext';
// import { userDataContext } from '../Context/UserContext';
// import { toast } from 'react-toastify';

// function SignUp() {
//     let [show,setShow] = useState(false)
//     let navigate = useNavigate()
//     let {serverUrl} = useContext(authDataContext)
//     let {userData,setUserData} = useContext(userDataContext)
//     let [name,setName]= useState("")
//     let [email,setEmail]= useState("")
//     let [password,setPassword]= useState("")
//     let {loading,setLoading}= useContext(authDataContext)



//     const handleSignUP = async (e) => {
//       setLoading(true)
//         try {
//             e.preventDefault()
//             let result = await axios.post(serverUrl + "/api/auth/signup",{
//                 name,
//                 email,
//                 password

//             },{withCredentials:true})
//             setLoading(false)
//             setUserData(result.data)
//             navigate("/")
//             toast.success("Signup Successfully")
//             console.log(result)
//         } catch (error) {
//           setLoading(false)
//             console.log(error)
//             toast.error("Somethings went wrong")
//         }
        
//     }
//   return (
//     <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
//         <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={()=>navigate("/")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>
//         <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]' onSubmit={handleSignUP}>
//             <h1 className='text-[30px] text-[black]'>Welcome to Airbnb</h1>
//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px] '>
//           <label htmlFor="name" className='text-[20px]'>UserName</label>
//           <input type="text" id='name' className='w-[90%] h-[40px] border-[2px] border-[#555656]  rounded-lg text-[18px] px-[20px] ' required onChange={(e)=>setName(e.target.value)} value={name}/>
//           </div> 
//           <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
//           <label htmlFor="email" className='text-[20px]'>Email</label>
//           <input type="text" id='email' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
//           </div> 
//           <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative  '>
//           <label htmlFor="password" className='text-[20px]'>Password</label>
//           <input type={show?"text":"password"} id='password' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px] ' required onChange={(e)=>setPassword(e.target.value)} value={password} />
//           {!show && <IoMdEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={()=>setShow(prev =>!prev)}/>}
//           {show && <IoMdEyeOff className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={()=>setShow(prev =>!prev)}/>}
//           </div>
//           <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg mt-[20px]' disabled={loading}>{loading?"Loading...":"SignUp"}</button>
//           <p className='text-[18px]'>Already have a account? <span className='text-[19px] text-[red] cursor-pointer' onClick={()=>navigate("/login")}>Login</span>
//           </p>
//         </form>
     
//     </div>
//   )
// }

// export default SignUp


import React, { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from 'axios';
import { authDataContext } from '../Context/AuthContext';
import { userDataContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

function SignUp() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { serverUrl, loading, setLoading } = useContext(authDataContext);
  const { setUserData } = useContext(userDataContext);
  const navigate = useNavigate();

  const handleSignUP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(serverUrl + "/api/auth/signup", {
        name,
        email,
        password
      }, { withCredentials: true });

      setUserData(result.data);
      toast.success("Signup Successfully");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
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

      {/* Signup Form */}
      <form
        className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col items-center gap-6"
        onSubmit={handleSignUP}
      >
        <h1 className="text-3xl font-bold mb-4 text-red-400">Join Homyfy</h1>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name" className="text-lg">Username</label>
          <input
            type="text"
            id="name"
            className="w-full h-12 px-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:border-red-500"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? <IoMdEyeOff /> : <IoMdEye />}
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg font-semibold transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>

        <p className="text-base mt-2">
          Already have an account?{" "}
          <span
            className="text-red-400 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
