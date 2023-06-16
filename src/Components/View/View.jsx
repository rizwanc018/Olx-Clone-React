import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../store/PostContext';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config';

import './View.css';
function View() {

  const [userDetails, setUserDetails] = useState()
  console.log("🚀 ~ file: View.jsx:10 ~ View ~ userDetails:", userDetails)
  const { postDetails } = useContext(PostContext)

  const getPostDetails = async () => {
      const { userId } = postDetails
      const usersRef = collection(db, 'users')
      const qry = query(usersRef, where('id', '==', userId))
      const qrySnapShot = await getDocs(qry)
      qrySnapShot.forEach(doc => {
          setUserDetails(doc.data())
      })
  }

  useEffect(() => {
      getPostDetails()
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imgUrl}
          alt={postDetails.name}
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
