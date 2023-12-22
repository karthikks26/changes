import React, { useState } from 'react';
import  room from './room.jpg'
import living from './living.jpg'
import kitchen from './kitchen.webp'
import work from './work.jpg'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getContent = () => {
    switch (activeTab) {
      case 'all':
        return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover ' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover ' src={kitchen} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover ' src={work} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover ' src={living} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover ' src={living} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover ' src={room} alt="Room" />
  </div>
</div>
</div></p>;
      case 'bedroom':
        return <p>
          <div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>
        </p>;
      case 'livingroom':
        return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={living} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={living} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={living} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={living} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={living} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={living} alt="Room" />
  </div>
</div>
</div></p>;
        case 'kitchen':
          return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={kitchen} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={kitchen} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={kitchen} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={kitchen} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={kitchen} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={kitchen} alt="Room" />
  </div>
</div>
</div></p>;
          case 'workspace':
            return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={work} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={work} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={work} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={work} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={work} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={work} alt="Room" />
  </div>
</div>
</div></p>;
            case 'outdoor':
              return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div></p>;
              case 'bathroom':
                return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div></p>;
                case 'babychildren':
                  return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div></p>;
                  case 'dining':
                    return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div></p>;
                    case 'hallway':
                      return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div></p>;
                      case 'laundry':
                        return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div></p>;
                        case 'accessories':
                          return <p><div className='container mr-4'>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div></p>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='mt-8 ml-10 cursor-pointer'>
        <div className='bloc-tabs flex' style={{marginBottom:'-64px'}}>
          <div className={`${activeTab === 'all' ? 'tabs active-tabs mr-2 border border-black rounded-full w-10 pl-2 pr-2 pt-1 pb-1 bg-gray-100' : 'tabs mr-2 border w-10 border-white rounded-full pl-2 pr-2 pt-1 pb-1 bg-gray-100'}`} onClick={() => handleTabClick('all')}>
            All
          </div>
          <div className={activeTab === 'bedroom' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('bedroom')}>
            Bedroom
          </div>
          <div className={activeTab === 'livingroom' ? 'tabs active-tabs border border-black rounded-full w-28 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs  border border-white rounded-full w-28 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('livingroom')}>
            Living Room
          </div>
          <div className={activeTab === 'kitchen' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('kitchen')}>
            Kitchen
          </div>
          <div className={activeTab === 'workspace' ? 'tabs active-tabs border border-black rounded-full w-28 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs  border border-white rounded-full w-28 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('workspace')}>
            Workspace
          </div>
          <div className={activeTab === 'outdoor' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('outdoor')}>
            Outdoor
          </div>
          <div className={activeTab === 'bathroom' ? 'tabs active-tabs border border-black rounded-full w-24 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs  border border-white rounded-full w-24 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('bathroom')}>
            Bathroom
          </div>
          <div className={activeTab === 'babychildren' ? 'tabs active-tabs border border-black rounded-full w-44 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-44 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('babychildren')}>
            Baby & children room
          </div>
          <div className={activeTab === 'dining' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('dining')}>
            Dining
          </div>
          <div className={activeTab === 'hallway' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('hallway')}>
            Hallway
          </div>
          <div className={activeTab === 'laundry' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('laundry')}>
            Laundry
          </div>
          <div className={activeTab === 'accessories' ? 'tabs active-tabs border border-black rounded-full w-24 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs  border border-white rounded-full w-24 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('accessories')}>
          Accessories
          </div>
        </div>

        <div className='content-tabs'>
          {getContent()}
        </div>
      </div>
    </>
  );
};

export default Tabs;
