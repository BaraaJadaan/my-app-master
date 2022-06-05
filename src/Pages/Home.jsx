import React from 'react';
import NavBar from '../components/NavBar';
import Slider from "../components/Slider";
import CategoryCard from "../components/CategoryCard";
import SmlCtgCrds from "../components/SmlCtgCrds";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Announcement from '../components/Announcement';
import ActionButton2 from '../components/ActionButton2';

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Announcement/>
        <Slider/>
        <ActionButton2/>
        <SmlCtgCrds/>
        <CategoryCard/>
        <Products/>
        <Footer/>
     
    </div>
  )
}
