import React, { useState } from 'react';
import NavRight from './navright.jsx'
import NavLeft from './navleft.jsx'
import PlayerFooter from './playerFooter.jsx'
import CreatePlayList from './createPlayList.jsx'

export default function App() {

  const [showNavRight, setShowNavRight] = useState(true);

  const handleMenuClick = () => {
    // console.log('มีการคลิกเมนูใน NavletDown.jsx');
    setShowNavRight(false);
  };

  if (typeof window !== 'undefined') {
    window.handleMenuClick = handleMenuClick;
  }

  return (
    <>
    <div class="relative">
    <div class="grid grid-cols-12 gap-2 bg-zinc-950 p-2 h-screen">
        <div class="flex flex-col col-span-3 ">

          <NavLeft/>
          <div class="hide-scroll bg-zinc-800 pt-4 overflow-y-auto flex-grow h-10"> 
              <div class="pl-2 pr-2 ">
              <div class="gap-2 item-center pt-2 pb-2 pl-6 hover:bg-zinc-900 flex flex-col rounded-lg bg-zinc-800 text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
                  <img
                    class="h-16 w-16 rounded-lg object-cover "
                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    alt="" />
                  <div class="flex flex-col justify-start p-2">
                  
                    <p class="text-base mb-2">
                      เพลย์ลิสต์ของฉัน
                    </p>
                    <p class="text-xs text-surface/75 text-zinc-400">
                      เพลย์ลิสต์ 
                    </p>
                  </div>
                </div>
              </div>
              <div class="pl-2 pr-2 ">
              <div class="gap-2 item-center pt-2 pb-2 pl-6 hover:bg-zinc-900 flex flex-col rounded-lg bg-zinc-800 text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
                  <img
                    class="h-16 w-16 rounded-lg object-cover "
                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    alt="" />
                  <div class="flex flex-col justify-start p-2">
                  
                    <p class="text-base mb-2">
                      เพลย์ลิสต์ของฉัน
                    </p>
                    <p class="text-xs text-surface/75 text-zinc-400">
                      ถูกใจ 
                    </p>
                  </div>
                </div>
              </div>
              <div class="pl-2 pr-2 ">
              <div class="gap-2 item-center pt-2 pb-2 pl-6 hover:bg-zinc-900 flex flex-col rounded-lg bg-zinc-800 text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
                  <img
                    class="h-16 w-16 rounded-lg object-cover "
                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    alt="" />
                  <div class="flex flex-col justify-start p-2">
                  
                    <p class="text-base mb-2">
                      เพลย์ลิสต์ของฉัน
                    </p>
                    <p class="text-xs text-surface/75 text-zinc-400">
                      ถูกใจ 
                    </p>
                  </div>
                </div>
              </div>
              <div class="pl-2 pr-2 ">
              <div class="gap-2 item-center pt-2 pb-2 pl-6 hover:bg-zinc-900 flex flex-col rounded-lg bg-zinc-800 text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
                  <img
                    class="h-16 w-16 rounded-lg object-cover "
                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    alt="" />
                  <div class="flex flex-col justify-start p-2">
                  
                    <p class="text-base mb-2">
                      เพลย์ลิสต์ของฉัน
                    </p>
                    <p class="text-xs text-surface/75 text-zinc-400">
                      ถูกใจ 
                    </p>
                  </div>
                </div>
              </div>
              <div class="pl-2 pr-2 ">
              <div class="gap-2 item-center pt-2 pb-2 pl-6 hover:bg-zinc-900 flex flex-col rounded-lg bg-zinc-800 text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
                  <img
                    class="h-16 w-16 rounded-lg object-cover "
                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    alt="" />
                  <div class="flex flex-col justify-start p-2">
                  
                    <p class="text-base mb-2">
                      เพลย์ลิสต์ของฉัน
                    </p>
                    <p class="text-xs text-surface/75 text-zinc-400">
                      ถูกใจ 
                    </p>
                  </div>
                </div>
              </div>
              <div class="pl-2 pr-2 ">
              <div class="gap-2 item-center pt-2 pb-2 pl-6 hover:bg-zinc-900 flex flex-col rounded-lg bg-zinc-800 text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
                  <img
                    class="h-16 w-16 rounded-lg object-cover "
                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    alt="" />
                  <div class="flex flex-col justify-start p-2">
                  
                    <p class="text-base mb-2">
                      เพลย์ลิสต์ของฉัน
                    </p>
                    <p class="text-xs text-surface/75 text-zinc-400">
                      ถูกใจ 
                    </p>
                  </div>
                </div>
              </div>  
          </div>
              
          </div>
        <div class="flex flex-col col-span-9 bg-zinc-800 rounded-lg">
        <NavRight setShowNavRight={setShowNavRight}/>
        {showNavRight ? ( 
          <div class="overflow-y-auto flex-grow h-10">
              <div class="flex gap-3 mt-4 pl-5">
              <button class="bg-white hover:bg-slate-300 text-black font-bold py-2 px-4 rounded-full">
                ทั้งหมด
              </button>
              <button class="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-full">
                เพลง
              </button>
              <button class="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-full">
                พอดแคสต์
              </button>
        </div>
             
            <div class="hide-scroll p-7 text-white text-2xl font-bold ">
              มิกซ์ยอดนิยม
              <div class=" flex pb-5 pt-3 ">
                <div class="w-48 p-3 rounded-lg overflow-hidden hover:bg-zinc-900 ">
                  <img class="w-48 h-auto rounded-lg " src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb013b76dbf70fc11888902360/1/th/default" alt="Sunset in the mountains"/>
                  <div class="pt-2">
                    <div class="font-bold text-base mb-2">The Coldest Sunset</div>
                    <p class="text-gray-500 text-xs text-wrap">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
               
                </div>
                <div class="w-48 p-3 rounded-lg overflow-hidden hover:bg-zinc-900 ">
                  <img class="w-48 h-auto rounded-lg " src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb013b76dbf70fc11888902360/1/th/default" alt="Sunset in the mountains"/>
                  <div class="pt-2">
                    <div class="font-bold text-base mb-2">The Coldest Sunset</div>
                    <p class="text-gray-500 text-xs text-wrap">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
               
                </div>
                <div class="w-48 p-3 rounded-lg overflow-hidden hover:bg-zinc-900 ">
                  <img class="w-48 h-auto rounded-lg " src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb013b76dbf70fc11888902360/1/th/default" alt="Sunset in the mountains"/>
                  <div class="pt-2">
                    <div class="font-bold text-base mb-2">The Coldest Sunset</div>
                    <p class="text-gray-500 text-xs text-wrap">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
               
                </div>
              </div>
            </div>
            </div>
            
          ) : (
          
            <div class="hide-scroll overflow-y-auto flex-grow h-10">
              <CreatePlayList />
            </div>
              
            )}
          
        </div>
        
     </div>
     <div class="fixed bottom-0 left-0 right-0">
      <PlayerFooter/>
     </div>
 
     </div>
     
    </>
  )
}
