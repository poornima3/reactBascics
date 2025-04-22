import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log('item', item )
    // Dispatch an action
    dispatch(addItem(item));
  }

  console.log('items', items)
  return (
    <div>
      {items.map((item) => (
        <div data-testid="foodItems" key={item?.card?.info?.id || item?.categoryId} className='p-2 m-2 border-gray-200 border-b-2 text-left'>
          {/* <img src={CDN_URL + item?.card?.info?.imageId} className='w-14' /> */}
          <div className='p-2'>
            <span>{item?.card?.info?.name || item?.title}</span>
            <span> - ₹ {item?.card?.info?.price/100 || '100'}</span>
          </div>
          <p className='text-xs'>{item?.card?.info?.description || "Lorem Epsum"}</p>
          <button className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg' onClick={() => handleAddItem(item)}>Add + </button>
        </div>
      ))}
    </div>
  )
}

export default ItemList;