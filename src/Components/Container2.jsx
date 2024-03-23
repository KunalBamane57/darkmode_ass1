// import React from 'react';
// import Ticketcard from './Ticketcard';
// import './mainbg.css'

// const Container2 = () => {
//     return (
//         <div className='pt-[50px] pb-[100px] px-[100px] md:h-auto'>
//             <div id="innner-box" className='mainbg'>
//                 <div className="container-1 pt-2 flex flex-wrap justify-center h-[230px] bg-transparent">
//                     <span className='text-6xl font-bold mt-10 text-slate-100'>Collection Spotlight</span>
//                     <div className="innert-container-1 text-center text-slate-200">
//                         Discover extraordinary moments with our Spotlight Collection metatickets-exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!
//                     </div>
//                 </div>
//                 <div className="container-2 h-[730px] flex flex-wrap justify-center gap-20 pb-28  bg-transparent">
//                     <div className="box-1 flex items-center">
//                         <div className="blue-arrow border-2 border-sky-500 p-2 cursor-pointer">
//                             <span className='text-4xl text-sky-500'>{"<"}</span>
//                         </div>
//                     </div>
//                     <div className="box-2 flex flex-wrap justify-center gap-10">
//                         <Ticketcard id={4} />
//                         <Ticketcard id={5} />
//                         <Ticketcard id={4} />
//                     </div>
//                     <div className="box-1 flex items-center">
//                         <div className="blue-arrow border-2 border-sky-500 p-2 cursor-pointer">
//                             <span className='text-4xl text-sky-500'>{">"}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Container2;



import React from 'react';
import Ticketcard from './Ticketcard';
import './mainbg.css';

const Container2 = () => {
    return (
        <div className='pt-10 md:pt-20 pb-20 md:pb-40 px-5 md:px-10 lg:px-20 xl:px-32'>
            <div id="innner-box" className='mainbg'>
                <div className="container-1 pt-2 flex flex-wrap justify-center md:h-40 lg:h-60 xl:h-80 bg-transparent">
                    <span className='text-4xl md:text-6xl font-bold mt-5 md:mt-10 text-slate-100'>Collection Spotlight</span>
                    <div className="innert-container-1 text-center text-slate-200 mt-3 md:mt-5">
                        Discover extraordinary moments with our Spotlight Collection metatickets-exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!
                    </div>
                </div>
                <div className="container-2 md:h-[calc(100vh - 230px)] flex flex-wrap justify-center gap-10 md:gap-20 pb-10 md:pb-28  bg-transparent">
                    <div className="box-1 flex items-center">
                        <div className="blue-arrow border-2 border-sky-500 p-2 cursor-pointer">
                            <span className='text-4xl text-sky-500'>{"<"}</span>
                        </div>
                    </div>
                    <div className="box-2 flex flex-wrap justify-center gap-5 md:gap-10">
                        <Ticketcard id={4} />
                        <Ticketcard id={5} />
                        <Ticketcard id={4} />
                    </div>
                    <div className="box-1 flex items-center">
                        <div className="blue-arrow border-2 border-sky-500 p-2 cursor-pointer">
                            <span className='text-4xl text-sky-500'>{">"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container2;
