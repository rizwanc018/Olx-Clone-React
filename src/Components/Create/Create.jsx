import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { db, storage } from '../../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { AuthContext } from '../../store/context';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const date = new Date()

  const handleSubmit = async () => {
    try {
      const storageRef = ref(storage, `/images/${image.name}`);
      const uploadTask = await uploadBytesResumable(storageRef, image);
      const imgUrl = await getDownloadURL(storageRef);
      const res = await addDoc(collection(db, 'products'), {
        name,
        category,
        price,
        imgUrl,
        userId: user.uid,
        createdAt: date.toDateString()
      });
    } catch (error) {
      console.error(error);
    }
    navigate('/')
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            onChange={e => setCategory(e.target.value)}
            value={category}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            onChange={e => setPrice(e.target.value)}
            value={price}
          />
          <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <br />
          <input onChange={e => {
            setImage(e.target.files[0])
          }}
            type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
