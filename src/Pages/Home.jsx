import React from 'react';
import NavBar from '../components/NavBar';
import Slider from "../components/Slider";
import CategoryCard from "../components/CategoryCard";
import SmlCtgCrds from "../components/SmlCtgCrds";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Grid from '@mui/material/Grid';
import Announcement from '../components/Announcement';


export default function Home() {
  return (
    <div>
        <NavBar/>
        <Announcement/>
        
          <Slider/>
          <SmlCtgCrds/>
          <CategoryCard/>
          <Products/>
          <Footer/>
     
    </div>
  )
}
