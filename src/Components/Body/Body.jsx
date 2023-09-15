import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import veganBurger from '../../Assets/veganBurger.jpg'

const Body = () => {
  return (
    <div className='bg-bodyBg h-[100%] basis-80 p-8 '>
      {/* Top Half */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center border-b-2 pb-2 basis-1/2 gap-2'>
          <AiOutlineSearch className='text-hoverColor text-[20px] cursor-pointer'/>
          <input type="text" placeholder='Search your favourite' className='border-none outline-none placeholder:text-sm focus:outline-none' />
        </div>
          <div className='flex gap-4 items-center'>
            <AiOutlineAppstoreAdd className='text-hoverColor cursor-pointer text-[25px] hover:text-[20px] transition-transform delay-150' />
            <button className='transition-colors hover:bg-[#808080] hover:duration-7000 ease-in-out bg-sideMenuBg cursor-pointer text-bodyBg font-semibold py-2 px-4 rounded-[5px]  '>   
              Go Premium
            </button>
  
          
          
          </div> 
         

      </div>

      {/* Title Section */}
      <div className='flex items-center justify-between mt-8'>
        <div className='title'>
          <h1 className='text-[35px] text-titleColor tracking[1px] font-extrabold'>Find the best Vegan place...
          </h1>
          <span className='text-[18px] opacity-70' ><strong>+350 Vegan restaurants,</strong> the choice is yours</span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='specials px-6 text-center border-r-2'>
            <h3 className='text-[20px] font-bold text-titleColor'>95</h3>
            <small className='text-[16px] opacity-70'>Specials</small>
          </div>

          <div className='deliveries px-6 text-center border-r-2'>
            <h3 className='text-[20px] font-bold text-titleColor'>82</h3>
            <small className='text-[16px] opacity-70'>Deliveries</small>
          </div>

        </div>


      </div>
      {/* categories Div */}
      <div className='flex mt-8 items-centergap-10'>
        <div className='singleCategory items-center justify-between text-center'>
          <div className='imDiv h-[40px] w-[40px] bg-[#fff] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={veganBurger} alt="vegan Burger" className='w-[70%] flex justify-center m-auto' />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Body