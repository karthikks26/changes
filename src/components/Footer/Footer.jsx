import React from 'react'
import Featured from '../../Dropitems/Featured'
import Collections from '../../Dropitems/Collections'
import Styles from '../../Dropitems/Styles'
import Colours from '../../Dropitems/Colours'
import Rooms from '../../Dropitems/Rooms'

const Footer = () => {
  return (
    <div>
      <div className='px-[50px] my-5'>
        <h2 className='main_heading'>Shop Wallpapers</h2>
        <div className='filter_container flex gap-32'>

          <Collections />
          <Collections />
          <Styles />
          <Colours />
          <Rooms />

        </div>
      </div>
    </div>
  )
}

export default Footer
