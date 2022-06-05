import {useParams} from "react-router-dom";
// import NavBar from '../components/NavBar';
import Announcement from "../components/Announcement";
import Details from '../components/Details';
import Reviews from '../components/Reviews';
import React from 'react'

export default function ProductPage() {
    // const {id} = useParams()
  return (

    <div className="title">
      {/* ProductPage - {id} */}
      {/* <NavBar/> */}
      <Announcement />
      <Details/>
      <Reviews/>
    </div>
  )
}
