import React from 'react'
import ImageCarosel from './ImageCarosel'
import Header from '../components/Header'
import AllitemsinHome from './AllitemsinHome'
import { useState,useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button, Row} from 'react-bootstrap';





function Home() {
  const [showspin,setshowspin] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setshowspin(false)
    },2000)
  },[])   
  return (   
    <>
      <Header></Header>
      <ImageCarosel></ImageCarosel>
      <Row>
      {
      showspin ?(
      <LoadingSpinner/> 
      ):(
        <Row className="mt-4 ms-3 me-2">
      <AllitemsinHome></AllitemsinHome>
        </Row>
 
      )}
      </Row>
      <ToastContainer
position="top-center"
autoClose={5000}
/>
    </>
  )
}

export default Home