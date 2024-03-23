import React from 'react';
import Circularline from './Circularline';
import all_photo from '../Components/Assets/all_img';

const Ticketcard = ({ id }) => {
    const selectedItem = all_photo.find(item => item.id === id);

    if (!selectedItem) {
        return <div>No item found for the given id</div>;
    }

    const { name, image ,ticket } = selectedItem;

    return (
        <div className="outercard h-[675px] w-[255px]  flex flex-col justify-center items-center">
            <div className='card bg-zinc-700 w-[255.5px]'>
                <div className="box-1 p-3 w-[250px]">
                    <img className='h-[400px] w-[245px]' src={image} alt={name} />
                </div>
                <Circularline />
                <div className="box-2 flex flex-col items-center text-center">
                    <span className='text-xl font-semibold mt-2 text-slate-100'>{name}</span> <br />
                       <span className='text-slate-200 mt-[-12px] text-sm'>OCT 15 | SUN | 4:30 PM</span>
                       <span className='text-slate-300'>Las Vegas Ballpark,Las Vegas, <br />
                       Nevada</span>
                    <div className="btn p-4 bg-black text-white flex flex-col justify-center h-[40px] w-[230px] mt-2 mb-2 rounded-sm">
                    {ticket}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticketcard;
