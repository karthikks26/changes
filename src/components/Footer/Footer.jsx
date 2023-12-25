import React from 'react'
import Joinayatrio from './Footer_child/Join_Ayatrio_Family'
import Ayatrio_Family from './Footer_child/Ayatrio_Family'
import Ayatrio_Services from './Footer_child/Ayatrio_Services'
import Help_Supports from './Footer_child/Help_Supports'
import About_Ayatrio from './Footer_child/About_Ayatrio'

const Footer = () => {
  return (
    <div>
      <div className='px-[50px] my-5'>
        <div className='filter_container flex gap-32'>

          <Joinayatrio />
          <Ayatrio_Family />
          <Ayatrio_Services />
          <Help_Supports />
          <About_Ayatrio />

        </div>
      </div>
    </div>
  )
}

export default Footer
