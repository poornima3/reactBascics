import { CDN_URL } from '../utils/constants';

const ResturantCard = (props) => {
  const { resData } = props;
  // const { name, cuisines, avgRating, sla } = resData?.card?.info;
  console.log('resData', resData)
  return (
    <div data-testid="resCard" className='m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200'>
      {resData?.card?.card?.info?.cloudinaryImageId.length && <img className='res-logo rounded-lg' alt='res-logo' src={`${CDN_URL}/${resData?.card?.card?.info?.cloudinaryImageId}`} />}
      {resData?.card?.card?.info?.name.length && <h3 className='font-bold py-4 text-lg'>{resData?.card?.card?.info?.name}</h3>}
      {resData?.card?.card?.info?.cuisines.length && <h4>{resData?.card?.card?.info?.cuisines.join(", ")}</h4>}
      {/* <h4>{resData?.card?.card?.avgRating }</h4>
      <h4>{resData?.card?.card?.sla.slaString}</h4> */}
    </div>
  )
}

// Higher Order Component
// input -- Resturant Card --> ResturantCard Promoted

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-xl'>Promoted</label>
        <ResturantCard {...props} />
      </div>
    )
  }
}

export default ResturantCard;