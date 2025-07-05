// import React, { useContext } from 'react'
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
// import { listingDataContext } from '../Context/ListingContext';
// function ListingPage3() {
//     let navigate = useNavigate()
//     let {title,setTitle,
//         description,setDescription,
//         frontEndImage1,setFrontEndImage1,
//         frontEndImage2,setFrontEndImage2,
//         frontEndImage3,setFrontEndImage3,
//         backEndImage1,setBackEndImage1,
//         backEndImage2,setBackEndImage2,
//         backEndImage3,setBackEndImage3,
//         rent,setRent,
//         city,setCity,
//         landmark,setLandmark,
//         category,setCategory,
//         handleAddListing,
//         adding,setAdding
//     } = useContext(listingDataContext)
//   return (
//     <div className='w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto  relative'>
//          <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={()=>navigate("/listingpage2")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>

//          <div className='w-[95%]  flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]'>
//             <h1 className='text-[20px]  text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden px-[70px] md:px-[0px]'>
//                 {`In ${landmark.toUpperCase()} , ${city.toUpperCase()}`}
//             </h1>
//          </div>

//          <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row '>
//             <div className='w-[100%]  h-[65%]  md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] '>
//                 <img src={frontEndImage1} alt="" className='w-[100%]' />
//             </div>
//             <div className='w-[100%] h-[50%]  flex  items-center justify-center md:w-[50%] md:h-[100%] md:flex-col '>
//                 <div className='w-[100%] h-[100%]  overflow-hidden  flex items-center justify-center border-[2px] '>
//                 <img src={frontEndImage2} alt="" className='w-[100%]' />
//                 </div>
//                 <div className='w-[100%] h-[100%]  overflow-hidden  flex items-center justify-center border-[2px] '>
//                 <img src={frontEndImage3} alt="" className='w-[100%]' />
//                 </div>
//             </div>
           
//          </div>
//          <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`${title.toUpperCase()} ${category.toUpperCase()} , ${landmark.toUpperCase()}`}</div>
//          <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] text-gray-800'>{`${description.toUpperCase()}`}</div>
//          <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`Rs.${rent}/day`}</div>

//          <div className='w-[95%] h-[50px] flex items-center justify-start px-[110px]'><button className='px-[30px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg text-nowrap ' onClick={handleAddListing} disabled={adding}> 
//           {adding? "adding...":"Add Listing"}
//          </button>
//          </div>
         
      
//     </div>
//   )
// }

// export default ListingPage3



import React, { useContext } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../Context/ListingContext';

function ListingPage3() {
  const navigate = useNavigate();
  const {
    title, description,
    frontEndImage1, frontEndImage2, frontEndImage3,
    rent, city, landmark, category,
    handleAddListing, adding
  } = useContext(listingDataContext);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-start gap-6 py-6 px-4 relative overflow-auto">

      {/* Back Button */}
      <div
        className="w-12 h-12 bg-red-600 hover:bg-red-700 cursor-pointer absolute top-4 left-4 rounded-full flex items-center justify-center transition"
        onClick={() => navigate("/listingpage2")}
      >
        <FaArrowLeftLong className="text-white text-xl" />
      </div>

      {/* Location Heading */}
      <div className="w-full max-w-5xl text-xl md:text-3xl font-semibold text-left mt-16">
        {`In ${landmark.toUpperCase()}, ${city.toUpperCase()}`}
      </div>

      {/* Images */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 h-[300px] bg-gray-700 rounded-xl overflow-hidden shadow-md">
          <img src={frontEndImage1} alt="Front 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="h-[145px] bg-gray-700 rounded-xl overflow-hidden shadow-md">
            <img src={frontEndImage2} alt="Front 2" className="w-full h-full object-cover" />
          </div>
          <div className="h-[145px] bg-gray-700 rounded-xl overflow-hidden shadow-md">
            <img src={frontEndImage3} alt="Front 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="w-full max-w-5xl space-y-3 text-gray-200">
        <div className="text-lg md:text-2xl font-semibold">
          {`${title.toUpperCase()} ${category.toUpperCase()}, ${landmark.toUpperCase()}`}
        </div>
        <div className="text-base md:text-xl text-gray-300">
          {description.toUpperCase()}
        </div>
        <div className="text-lg md:text-2xl font-bold text-red-400">
          {`Rs. ${rent}/day`}
        </div>
      </div>

      {/* Add Button */}
      <div className="w-full max-w-5xl flex justify-end mt-4">
        <button
          className={`px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition duration-300 ${adding ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleAddListing}
          disabled={adding}
        >
          {adding ? "Adding..." : "Add Listing"}
        </button>
      </div>
    </div>
  );
}

export default ListingPage3;

