import React, { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItems, setShowIndex }) => {
  
  // const [showItems, setShowItems] = useState(false);
  // console.log('category props', data?.itemCards || data?.categories)

  const handleClick = () => {
    setShowIndex();
  }

  // Header
  // Accordian Body
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length || data?.categories?.length})</span>
          <span>⌄</span>
        </div>
        { showItems && <ItemList items={data?.itemCards || data?.categories} />}
      </div>
    </div>
  )
}

export default ResturantCategory;