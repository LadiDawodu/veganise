import React from 'react';
import Body from './Body/Body';
import SideMenu from './SideMenu/SideMenu';

const Container = () => {
  return (
    <div className='flex  h-[90vh] 
    items-center justify-center w-[85vw] 
    my-10 rounded-xl overflow-hidden'>
        <SideMenu />
        <Body />
    </div>
  )
}

export default Container