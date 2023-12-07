import React from 'react'
import RoomPageHeader from '../components/Room/RoomPageHeader'
import '../components/Room/styles.css'
import RoomImageList from '../components/Room/RoomImageList'
import RoomInfo from '../components/Room/RoomInfo'
import Reviews from '../components/Room/Other/Reviews'

const RoomPage = () => {
  return (
    <>
    <div className='mx-16'>
      <RoomPageHeader/>
      <RoomImageList/>
      <RoomInfo/>
      <Reviews/>
    </div>
    </>
  )
}

export default RoomPage