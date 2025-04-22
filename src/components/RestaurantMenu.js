import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import { MENU_API } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data)
  //   // console.log(json.data)
  // }

  // const { name } = resInfo?.cards[2]?.card?.card?.info
  if (resInfo === null) return <Shimmer />
  
  // const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p className="font-bold text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      {/* {categories accordian} */}
      {/* controlled component */}
      {categories.map((category, index) => <ResturantCategory showItems={index=== showIndex && true} setShowIndex={() => setShowIndex(index)} key={category?.card?.card?.title} data={category?.card?.card} />)}

      {/* <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {
          itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 }</li>)
        }
      </ul> */}
    </div>
  )
}

export default RestaurantMenu