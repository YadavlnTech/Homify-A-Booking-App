// import axios from 'axios'
// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { authDataContext } from './AuthContext'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify';

// export const listingDataContext = createContext()

// function ListingContext({children}) {
//     let navigate = useNavigate() 
//     let [title,setTitle] = useState("")
//     let [description,setDescription]=useState("")
//     let [frontEndImage1,setFrontEndImage1]=useState(null)
//     let [frontEndImage2,setFrontEndImage2]=useState(null)
//     let [frontEndImage3,setFrontEndImage3]=useState(null)
//     let [backEndImage1,setBackEndImage1]=useState(null)
//     let [backEndImage2,setBackEndImage2]=useState(null)
//     let [backEndImage3,setBackEndImage3]=useState(null)
//     let [rent,setRent]=useState("")
//     let [city,setCity]=useState("")
//     let [landmark,setLandmark]=useState("")
//     let [category,setCategory]=useState("")
//     let [adding,setAdding]=useState(false)
//     let [updating,setUpdating]=useState(false)
//     let [deleting,setDeleting]=useState(false)
//     let [listingData,setListingData]=useState([])
//     let [newListData,setNewListData]=useState([])
//     let [cardDetails,setCardDetails]=useState(null)
//     let [searchData,setSearchData]=useState([])

//     let {serverUrl} = useContext(authDataContext)

    

//      const handleAddListing = async () => {
//         setAdding(true)
//         try {

//             let formData = new FormData()
//      formData.append("title",title)
//      formData.append("image1",backEndImage1)
//      formData.append("image2",backEndImage2)
//      formData.append("image3",backEndImage3)
//      formData.append("description",description)
//      formData.append("rent",rent)
//      formData.append("city",city)
//      formData.append("landMark",landmark)
//      formData.append("category",category)
        
//         let result = await axios.post( serverUrl + "/api/listing/add" ,formData, {withCredentials:true}  )
//         setAdding(false)
//         console.log(result)
//         navigate("/")
//         toast.success("AddListing Successfully")
//         setTitle("")
//         setDescription("")
//        setFrontEndImage1(null)
//        setFrontEndImage2(null)
//        setFrontEndImage3(null)
//        setBackEndImage1(null)
//        setBackEndImage2(null)
//        setBackEndImage3(null)
//        setRent("")
//        setCity("")
//        setLandmark("")
//        setCategory("")
            
//         } catch (error) {
//             setAdding(false)
//             console.log(error)
//             toast.error(error.response.data.message)
//         }
        
//      }
//      const handleViewCard = async (id) => {
//         try {
//             let result = await axios.get( serverUrl + `/api/listing/findlistingByid/${id}`,{withCredentials:true})
//             console.log(result.data)
//             setCardDetails(result.data)
//             navigate("/viewcard")
//         } catch (error) {
//             console.log(error)
//         }
        
//      }
//      const handleSearch = async (data) => {
//         try {
//             let result = await axios.get(serverUrl + `/api/listing/search?query=${data}`)
//             setSearchData(result.data)
//         } catch (error) {
//             setSearchData(null)
//             console.log(error)
            
//         }
        
//      }

//      const getListing = async () => {
//         try {
//             let result = await axios.get( serverUrl + "/api/listing/get",{withCredentials:true})
//             setListingData(result.data)
//             setNewListData(result.data)

//         } catch (error) {
//             console.log(error)
//         }
        
//      }

//     useEffect(()=>{
//      getListing()
//     },[adding,updating,deleting])



//     let value={
//         title,setTitle,
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
//         setAdding,adding,
//         listingData,setListingData,
//         getListing,
//         newListData,setNewListData,
//         handleViewCard,
//         cardDetails,setCardDetails,
//         updating,setUpdating,
//         deleting,setDeleting,handleSearch,searchData,setSearchData
       

//     }
//   return (
//     <div>
//         <listingDataContext.Provider value={value}>
//             {children}
//         </listingDataContext.Provider>
      
//     </div>
//   )
// }

// export default ListingContext

import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export const listingDataContext = createContext()

function ListingContext({ children }) {
    const navigate = useNavigate();
    const { serverUrl } = useContext(authDataContext);

    // States for listing details
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [frontEndImage1, setFrontEndImage1] = useState(null);
    const [frontEndImage2, setFrontEndImage2] = useState(null);
    const [frontEndImage3, setFrontEndImage3] = useState(null);
    const [backEndImage1, setBackEndImage1] = useState(null);
    const [backEndImage2, setBackEndImage2] = useState(null);
    const [backEndImage3, setBackEndImage3] = useState(null);
    const [rent, setRent] = useState("");
    const [city, setCity] = useState("");
    const [landmark, setLandmark] = useState("");
    const [category, setCategory] = useState("");

    // Flags
    const [adding, setAdding] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);

    // Listing data
    const [listingData, setListingData] = useState([]);
    const [newListData, setNewListData] = useState([]);
    const [cardDetails, setCardDetails] = useState(null);
    const [searchData, setSearchData] = useState([]);

    // Add listing
    const handleAddListing = async () => {
        setAdding(true);
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image1", backEndImage1);
            formData.append("image2", backEndImage2);
            formData.append("image3", backEndImage3);
            formData.append("description", description);
            formData.append("rent", rent);
            formData.append("city", city);
            formData.append("landMark", landmark);
            formData.append("category", category);

            const result = await axios.post(`${serverUrl}/api/listing/add`, formData, { withCredentials: true });
            setAdding(false);
            toast.success("Listing added successfully");
            console.log(result);

            // Clear fields
            setTitle("");
            setDescription("");
            setFrontEndImage1(null);
            setFrontEndImage2(null);
            setFrontEndImage3(null);
            setBackEndImage1(null);
            setBackEndImage2(null);
            setBackEndImage3(null);
            setRent("");
            setCity("");
            setLandmark("");
            setCategory("");

            navigate("/");
        } catch (error) {
            setAdding(false);
            console.log(error);
            toast.error(error?.response?.data?.message || "Failed to add listing");
        }
    }

    // View single listing
    const handleViewCard = async (id) => {
        try {
            const result = await axios.get(`${serverUrl}/api/listing/findlistingByid/${id}`, { withCredentials: true });
            setCardDetails(result.data);
            navigate("/viewcard");
        } catch (error) {
            console.log(error);
        }
    }

    // ✅ Corrected Search Handler
    const handleSearch = async (data) => {
        if (!data || data.trim() === "") {
            toast.error("Search query cannot be empty");
            return;
        }

        try {
            const result = await axios.get(`${serverUrl}/api/listing/search?query=${data}`, {
                withCredentials: true
            });
            setSearchData(result.data);
        } catch (error) {
            setSearchData([]);
            console.log(error);
            toast.error("Search failed");
        }
    }

    // Get all listings
    const getListing = async () => {
        try {
            const result = await axios.get(`${serverUrl}/api/listing/get`, { withCredentials: true });
            setListingData(result.data);
            setNewListData(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Refresh listing data when modified
    useEffect(() => {
        getListing();
    }, [adding, updating, deleting]);

    const value = {
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
        category, setCategory,
        handleAddListing,
        setAdding, adding,
        listingData, setListingData,
        getListing,
        newListData, setNewListData,
        handleViewCard,
        cardDetails, setCardDetails,
        updating, setUpdating,
        deleting, setDeleting,
        handleSearch, searchData, setSearchData
    };

    return (
        <listingDataContext.Provider value={value}>
            {children}
        </listingDataContext.Provider>
    );
}

export default ListingContext;
