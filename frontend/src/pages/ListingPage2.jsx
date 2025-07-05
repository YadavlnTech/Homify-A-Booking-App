// import React from 'react'
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
// import { GiFamilyHouse } from "react-icons/gi";
// import { MdBedroomParent } from "react-icons/md";

// import { MdOutlinePool } from "react-icons/md";
// import { GiWoodCabin } from "react-icons/gi";
// import { SiHomeassistantcommunitystore } from "react-icons/si";

// import { IoBedOutline } from "react-icons/io5";

// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { useContext } from 'react';
// import { listingDataContext } from '../Context/ListingContext';

// function ListingPage2() {

//     let navigate = useNavigate()
//     let {category,setCategory} = useContext(listingDataContext)
//   return (
//     <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto '>
//          <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={()=>navigate("/listingpage1")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>
//         <div className='w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg'> Set Your Category </div>

//         <div className='max-w-[900px] w-[100%] h-[550px] overflow-auto bg-white flex items-center justify-start flex-col gap-[40px] mt-[30px] '>
//         <h1 className='text-[18px] text-[black] md:text-[30px] px-[10px] '>Which of these best describes your place?</h1>
        
//         <div className='max-w-[900px] w-[100%] h-[100%] flex flex-wrap items-center justify-center gap-[15px] md:w-[70%]'>

//             <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category == "villa" ?"border-3 border-[#8b8b8b]" : ""}`} onClick={()=>setCategory("villa")}>
//             <GiFamilyHouse className='w-[30px] h-[30px] text-[black]' /><h3>Villa</h3>
//             </div>

//             <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category == "farmHouse" ?"border-3 border-[#8b8b8b]" : ""}`} onClick={()=>setCategory("farmHouse")}>
//             <FaTreeCity className='w-[30px] h-[30px] text-[black]' /><h3>Farm House</h3>
//             </div>

//             <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category == "poolHouse" ?"border-3 border-[#8b8b8b]" : ""}`} onClick={()=>setCategory("poolHouse")}>
//             <MdOutlinePool className='w-[30px] h-[30px] text-[black]' /><h3>Pool House</h3>
//             </div>

//             <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category == "rooms" ?"border-3 border-[#8b8b8b]" : ""}`} onClick={()=>setCategory("rooms")}>
//             <MdBedroomParent className='w-[30px] h-[30px] text-[black]' /><h3>Rooms</h3>
//             </div>

//             <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category == "flat" ?"border-3 border-[#8b8b8b]" : ""}`}onClick={()=>setCategory("flat")}>
//             <BiBuildingHouse className='w-[30px] h-[30px] text-[black]' /><h3>Flat</h3>
//             </div>

//             <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category == "pg" ?"border-3 border-[#8b8b8b]" : ""}`} onClick={()=>setCategory("pg")}>
//             <IoBedOutline className='w-[30px] h-[30px] text-[black]' /><h3>PG</h3>
//             </div>

//             <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category == "cabin" ?"border-3 border-[#8b8b8b]" : ""}`} onClick={()=>setCategory("cabin")}>
//             <GiWoodCabin className='w-[30px] h-[30px] text-[black]' /><h3>Cabin</h3>
//             </div>

//             <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category == "shops" ?"border-3 border-[#8b8b8b]" : ""}`} onClick={()=>setCategory("shops")}>
//             <SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-[black]' /><h3>Shops</h3>
//             </div>

            
//         </div>
//         <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg absolute right-[5%] bottom-[5%]' onClick={()=>navigate("/listingpage3")} disabled={!category}>Next</button>
//         </div>
      
//     </div>
//   )
// }

// export default ListingPage2



import React, { useContext } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { listingDataContext } from '../Context/ListingContext';

function ListingPage2() {
  const navigate = useNavigate();
  const { category, setCategory } = useContext(listingDataContext);

  const categoryItems = [
    { id: "villa", label: "Villa", icon: <GiFamilyHouse /> },
    { id: "farmHouse", label: "Farm House", icon: <FaTreeCity /> },
    { id: "poolHouse", label: "Pool House", icon: <MdOutlinePool /> },
    { id: "rooms", label: "Rooms", icon: <MdBedroomParent /> },
    { id: "flat", label: "Flat", icon: <BiBuildingHouse /> },
    { id: "pg", label: "PG", icon: <IoBedOutline /> },
    { id: "cabin", label: "Cabin", icon: <GiWoodCabin /> },
    { id: "shops", label: "Shops", icon: <SiHomeassistantcommunitystore /> }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-4 relative overflow-auto">
      
      {/* Back Button */}
      <div
        className="w-12 h-12 bg-red-600 hover:bg-red-700 transition-colors cursor-pointer absolute top-4 left-4 rounded-full flex items-center justify-center"
        onClick={() => navigate("/listingpage1")}
      >
        <FaArrowLeftLong className="text-white text-xl" />
      </div>

      {/* Heading */}
      <div className="text-white bg-red-600 px-6 py-2 rounded-full text-lg font-semibold shadow-md absolute top-4 right-4">
        Set Your Category
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl bg-gray-800 border border-gray-700 shadow-2xl rounded-xl px-6 py-8 flex flex-col items-center gap-10 mt-20">

        <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-100">Which of these best describes your place?</h1>

        <div className="w-full flex flex-wrap justify-center items-center gap-6">
          {categoryItems.map((item) => (
            <div
              key={item.id}
              className={`w-40 h-28 flex flex-col items-center justify-center rounded-xl border-2 transition-all duration-300 cursor-pointer
              ${category === item.id ? 'border-red-500 bg-gray-900 shadow-md' : 'border-gray-600 hover:border-gray-400'}
              `}
              onClick={() => setCategory(item.id)}
            >
              <div className="text-3xl mb-2 text-white">{item.icon}</div>
              <h3 className="text-sm font-medium text-gray-200">{item.label}</h3>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className={`mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-3 rounded-full shadow-lg transition-all duration-300 absolute bottom-6 right-6 ${
            !category ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => category && navigate("/listingpage3")}
          disabled={!category}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ListingPage2;
