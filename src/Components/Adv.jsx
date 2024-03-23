import React from 'react'
import img4 from '../Components/Assets/img4.png'

const Adv = () => {
    return (
        <div className='card'>
            <div className="box-1 p-3 bg-zinc-700 w-[255px]">
                <div className="inner-box ">
                <div className="element-1">
                    <img className='h-[230px] w-[240px]' src={img4} alt="" />
                </div>
                <div className="element-2 flex flex-col items-center p-3 mb-10 text-sm">
                    <span className='text-xl font-bold mt-6 mb-2 mr-4 text-slate-100'>Advertisement Title</span>
                    <span className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum repudiandae labore atque eum illum veniam, cupiditate deleniti ab blanditiis maxime quaerat? Esse molestias illo provident atque itaque ipsum reiciendis.</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Adv