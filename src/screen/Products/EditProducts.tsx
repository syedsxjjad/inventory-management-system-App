import { async } from '@firebase/util'
import { collection, doc, getDocs,addDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Button from '../../component/Button'
import { db } from '../../Firebase/Firebase'

const EditProducts = () => {

const [EditProduct,setEditProduct]=useState([])
const userCollection=collection(db, "Inventory-Management")

const createUser=async()=>{
 await addDoc(userCollection,{})
}

useEffect(()=>{
    
    const getUser=async ()=>{
        const data=await getDocs(userCollection);
        const test=data.docs.map((doc)=>({...doc.data(),id: doc.id}))
    
}
getUser()
},[])
  return (
    <>
    <Button
    title='OK'
    onClick={createUser}
    />
      
    </>
  )
}

export default EditProducts
