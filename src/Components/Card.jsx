import React from 'react';
import all_photo from '../Components/Assets/all_img';

const Card = ({ id }) => {
  const photo = all_photo.find(item => item.id === id);
  if (!photo) {
    return <p>Photo not found!</p>;
  }
  return (
    <div className="box-1 p-3 bg-zinc-700 w-[255px]">
      <img className='h-[400px] w-[240px]' src={photo.image} alt={photo.name} />
      <p className='text-xl font-semibold p-1 mt-3 text-slate-100' >{photo.name}</p>
      <div className="detail flex flex-row justify-between bg-zinc-800 px-3 py-2 mt-3">
        <p className='text-sm text-slate-300' >Total Events <br /> <span className='font-semibold text-slate-100'>{photo.events} Events</span></p>
        <p className='text-sm pr-10 text-slate-300'>Sport <br /> <span className='font-semibold text-slate-100'>{photo.sport}</span></p>
      </div>
    </div>
  );
}

export default Card;
