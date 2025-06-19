import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category, searchText = ""}) => {

  const {food_list} = useContext(StoreContext);

  const filteredList = food_list.filter(item => {
    const matchCategory = category === "All" || category === item.category;
    const matchSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && (searchText ? matchSearch : true);
  });

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {filteredList.length > 0 ? filteredList.map((item) => (
          <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
        )) : <p style={{padding:'2rem'}}>No food found.</p>}
      </div>
    </div>
  )
}

export default FoodDisplay
