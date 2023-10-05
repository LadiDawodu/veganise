import React from 'react';
import Body from './Body/Body';
import SideMenu from './SideMenu/SideMenu';


const Container = () => {
  return (
    <div className=' flex
    w-full
     rounded-sm overflow-hidden'>
        <SideMenu />
        <Body />
     
    </div>
  )
}

export default Container