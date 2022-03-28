import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase/Firebase'

const EditProducts = () => {

const [EditProduct,setEditProduct]=useState([])
const userCollection=collection(db, "Inventory-Management")
useEffect(()=>{
    
    const getUser=async ()=>{
        const data=await getDocs(userCollection);
        const test=data.docs.map((doc)=>({...doc.data(),id: doc.id}))
    
}
getUser()
},[])
  return (
    <>
      
    </>
  )
}

export default EditProducts
