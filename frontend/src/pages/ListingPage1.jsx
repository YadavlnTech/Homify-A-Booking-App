// import React, { useContext, useState } from 'react'
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
// import { listingDataContext } from '../Context/ListingContext';

// function ListingPage1() {
//    let navigate = useNavigate()
//    let {title,setTitle,
//     description,setDescription,
//     frontEndImage1,setFrontEndImage1,
//     frontEndImage2,setFrontEndImage2,
//     frontEndImage3,setFrontEndImage3,
//     backEndImage1,setBackEndImage1,
//     backEndImage2,setBackEndImage2,
//     backEndImage3,setBackEndImage3,
//     rent,setRent,
//     city,setCity,
//     landmark,setLandmark,
//     category,setCategory} = useContext(listingDataContext)
    

//     const handleImage1 = (e)=>{
//         let file = e.target.files[0]
//         setBackEndImage1(file)
//         setFrontEndImage1(URL.createObjectURL(file))
//     }
//     const handleImage2 = (e)=>{
//         let file = e.target.files[0]
//         setBackEndImage2(file)
//         setFrontEndImage2(URL.createObjectURL(file))
//     }
//     const handleImage3 = (e)=>{
//         let file = e.target.files[0]
//         setBackEndImage3(file)
//         setFrontEndImage3(URL.createObjectURL(file))
//     }
//   return (
//     <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto'>

//         <form action="" className='max-w-[900px] w-[90%] h-[550px] flex items-center justify-start flex-col md:items-start gap-[10px] overflow-auto mt-[50px]' onSubmit={(e)=>{e.preventDefault()
//             navigate("/listingpage2")}
//         }>
//             <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={()=>navigate("/")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>
//             <div className='w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg'>
//                 SetUp Your Home
//             </div>
//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
//               <label htmlFor="title" className='text-[20px]'>Title</label>
//               <input type="text" id='title' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='_bhk house or best title '/>
//             </div> 

//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
//               <label htmlFor="des" className='text-[20px]'>Description</label>
//               <textarea name="" id="des" className='w-[90%] h-[80px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setDescription(e.target.value)} value={description} ></textarea>
//             </div> 

//             <div className='w-[90%] flex items-start justify-center flex-col gap-[10px]'>
//               <label htmlFor="img1" className='text-[20px]'>Image1</label>
//               <div className='flex items-center justify-start  w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] '><input type="file" id='img1' className='w-[100%] text-[15px] px-[10px] ' required onChange={handleImage1}/>
//               </div>
//             </div> 

//             <div className='w-[90%] flex items-start justify-center flex-col gap-[10px]'>
//               <label htmlFor="img2" className='text-[20px]'>Image2</label>
//               <div className='flex items-center justify-start  w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]'><input type="file" id='img2' className='w-[100%] text-[15px] px-[10px] ' required onChange={handleImage2} />
//               </div>
//             </div> 

//             <div className='w-[90%] flex items-start justify-center flex-col gap-[10px]'>
//               <label htmlFor="img3" className='text-[20px]'>Image3</label>
//               <div className='flex items-center justify-start  w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]'><input type="file" id='img3' className='w-[100%] text-[15px] px-[10px] ' required  onChange={handleImage3}/>
//               </div>
//             </div> 

//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
//               <label htmlFor="rent" className='text-[20px]'>Rent</label>
//               <input type="number" id='rent' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setRent(e.target.value)} value={rent} placeholder='Rs.______/day'/>
//             </div> 

//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
//               <label htmlFor="city" className='text-[20px]'>City</label>
//               <input type="text" id='city' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setCity(e.target.value)} value={city} placeholder='city,country'/>
//             </div> 

//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
//               <label htmlFor="landmark" className='text-[20px]'>Landmark</label>
//               <input type="text" id='landmark' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setLandmark(e.target.value)} value={landmark}/>

//             </div> 

//             <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg '>Next</button>





//         </form>
      

      
//     </div>
//   )
// }

// export default ListingPage1

// import React, { useContext } from 'react'
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
// import { listingDataContext } from '../Context/ListingContext';

// function ListingPage1() {
//   const navigate = useNavigate();
//   const {
//     title, setTitle,
//     description, setDescription,
//     frontEndImage1, setFrontEndImage1,
//     frontEndImage2, setFrontEndImage2,
//     frontEndImage3, setFrontEndImage3,
//     backEndImage1, setBackEndImage1,
//     backEndImage2, setBackEndImage2,
//     backEndImage3, setBackEndImage3,
//     rent, setRent,
//     city, setCity,
//     landmark, setLandmark,
//     category, setCategory
//   } = useContext(listingDataContext);

//   const handleImage1 = (e) => {
//     const file = e.target.files[0];
//     setBackEndImage1(file);
//     setFrontEndImage1(URL.createObjectURL(file));
//   };
//   const handleImage2 = (e) => {
//     const file = e.target.files[0];
//     setBackEndImage2(file);
//     setFrontEndImage2(URL.createObjectURL(file));
//   };
//   const handleImage3 = (e) => {
//     const file = e.target.files[0];
//     setBackEndImage3(file);
//     setFrontEndImage3(URL.createObjectURL(file));
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 flex items-center justify-center p-4 overflow-auto">
//       <form 
//         className="w-full max-w-3xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl px-6 py-8 flex flex-col items-center gap-6 overflow-auto relative"
//         onSubmit={(e) => {
//           e.preventDefault();
//           navigate("/listingpage2");
//         }}
//       >
//         <div
//           className="w-12 h-12 bg-red-500 hover:bg-red-600 transition-colors cursor-pointer absolute top-4 left-4 rounded-full flex items-center justify-center"
//           onClick={() => navigate("/")}
//         >
//           <FaArrowLeftLong className="text-white text-xl" />
//         </div>

//         <div className="text-white bg-red-500 px-6 py-2 rounded-full text-lg font-semibold shadow-md absolute top-4 right-4">
//           SetUp Your Home
//         </div>

//         <div className="w-full">
//           <label htmlFor="title" className="block font-semibold text-gray-700 text-lg mb-1">Title</label>
//           <input
//             type="text"
//             id="title"
//             className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
//             required
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             placeholder="_bhk house or best title"
//           />
//         </div>

//         <div className="w-full">
//           <label htmlFor="des" className="block font-semibold text-gray-700 text-lg mb-1">Description</label>
//           <textarea
//             id="des"
//             className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-800 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-300"
//             required
//             onChange={(e) => setDescription(e.target.value)}
//             value={description}
//             rows={3}
//           />
//         </div>

//         {[1, 2, 3].map((num) => (
//           <div className="w-full" key={num}>
//             <label htmlFor={`img${num}`} className="block font-semibold text-gray-700 text-lg mb-1">Image{num}</label>
//             <input
//               type="file"
//               id={`img${num}`}
//               className="w-full file:border-0 file:rounded-md file:bg-red-500 file:text-white file:px-4 file:py-2 file:cursor-pointer border border-gray-400 rounded-md px-4 py-2 text-gray-700"
//               required
//               onChange={
//                 num === 1 ? handleImage1 :
//                 num === 2 ? handleImage2 :
//                 handleImage3
//               }
//             />
//           </div>
//         ))}

//         <div className="w-full">
//           <label htmlFor="rent" className="block font-semibold text-gray-700 text-lg mb-1">Rent</label>
//           <input
//             type="number"
//             id="rent"
//             className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
//             required
//             onChange={(e) => setRent(e.target.value)}
//             value={rent}
//             placeholder="Rs.______/day"
//           />
//         </div>

//         <div className="w-full">
//           <label htmlFor="city" className="block font-semibold text-gray-700 text-lg mb-1">City</label>
//           <input
//             type="text"
//             id="city"
//             className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
//             required
//             onChange={(e) => setCity(e.target.value)}
//             value={city}
//             placeholder="City, Country"
//           />
//         </div>

//         <div className="w-full">
//           <label htmlFor="landmark" className="block font-semibold text-gray-700 text-lg mb-1">Landmark</label>
//           <input
//             type="text"
//             id="landmark"
//             className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
//             required
//             onChange={(e) => setLandmark(e.target.value)}
//             value={landmark}
//           />
//         </div>

//         <button
//           type="submit"
//           className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-12 py-3 rounded-full shadow-md transition-colors"
//         >
//           Next
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ListingPage1;
import React, { useContext } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../Context/ListingContext';

function ListingPage1() {
  const navigate = useNavigate();
  const {
    title, setTitle,
    description, setDescription,
    frontEndImage1, setFrontEndImage1,
    frontEndImage2, setFrontEndImage2,
    frontEndImage3, setFrontEndImage3,
    backEndImage1, setBackEndImage1,
    backEndImage2, setBackEndImage2,
    backEndImage3, setBackEndImage3,
    rent, setRent,
    city, setCity,
    landmark, setLandmark,
    category, setCategory
  } = useContext(listingDataContext);

  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setBackEndImage1(file);
    setFrontEndImage1(URL.createObjectURL(file));
  };

  const handleImage2 = (e) => {
    const file = e.target.files[0];
    setBackEndImage2(file);
    setFrontEndImage2(URL.createObjectURL(file));
  };

  const handleImage3 = (e) => {
    const file = e.target.files[0];
    setBackEndImage3(file);
    setFrontEndImage3(URL.createObjectURL(file));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-4 overflow-auto">
      <form 
        className="w-full max-w-3xl bg-gray-800 border border-gray-700 shadow-2xl rounded-xl px-6 py-8 flex flex-col items-center gap-6 overflow-auto relative"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/listingpage2");
        }}
      >
        <div
          className="w-12 h-12 bg-red-600 hover:bg-red-700 transition-colors cursor-pointer absolute top-4 left-4 rounded-full flex items-center justify-center"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="text-white text-xl" />
        </div>

        <div className="text-white bg-red-600 px-6 py-2 rounded-full text-lg font-semibold shadow-md absolute top-4 right-4">
          SetUp Your Home
        </div>

        <div className="w-full">
          <label htmlFor="title" className="block font-semibold text-gray-300 text-lg mb-1">Title</label>
          <input
            type="text"
            id="title"
            className="w-full bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-gray-100 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="_bhk house or best title"
          />
        </div>

        <div className="w-full">
          <label htmlFor="des" className="block font-semibold text-gray-300 text-lg mb-1">Description</label>
          <textarea
            id="des"
            className="w-full bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-gray-100 placeholder-gray-400 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={3}
          />
        </div>

        {[1, 2, 3].map((num) => (
          <div className="w-full" key={num}>
            <label htmlFor={`img${num}`} className="block font-semibold text-gray-300 text-lg mb-1">Image{num}</label>
            <input
              type="file"
              id={`img${num}`}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-red-600 hover:file:bg-red-700 bg-gray-900 border border-gray-600 rounded-md px-4 py-2"
              required
              onChange={
                num === 1 ? handleImage1 :
                num === 2 ? handleImage2 :
                handleImage3
              }
            />
          </div>
        ))}

        <div className="w-full">
          <label htmlFor="rent" className="block font-semibold text-gray-300 text-lg mb-1">Rent</label>
          <input
            type="number"
            id="rent"
            className="w-full bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-gray-100 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            onChange={(e) => setRent(e.target.value)}
            value={rent}
            placeholder="Rs.______/day"
          />
        </div>

        <div className="w-full">
          <label htmlFor="city" className="block font-semibold text-gray-300 text-lg mb-1">City</label>
          <input
            type="text"
            id="city"
            className="w-full bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-gray-100 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="City, Country"
          />
        </div>

        <div className="w-full">
          <label htmlFor="landmark" className="block font-semibold text-gray-300 text-lg mb-1">Landmark</label>
          <input
            type="text"
            id="landmark"
            className="w-full bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-gray-100 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            onChange={(e) => setLandmark(e.target.value)}
            value={landmark}
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default ListingPage1;
