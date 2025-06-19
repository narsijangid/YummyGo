import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = ({ searchText }) => {

  const [category, setCategory] = useState("All");
  const [localSearch, setLocalSearch] = useState("");

  useEffect(() => {
    setLocalSearch(searchText);
  }, [searchText]);

  // Reset search when category changes
  useEffect(() => {
    setLocalSearch("");
  }, [category]);

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category} searchText={localSearch}/>
      <AppDownload/>
    </>
  )
}

export default Home
