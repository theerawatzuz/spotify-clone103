import React, { useState } from 'react';

export default function CreatePlayList() {

    const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

    return(
        <>
        <div class="flex h-80 w-auto pl-10 pt-10 bg-gradient-to-b from-zinc-800 to-zinc-900 gap-7">
            {/* <img class="w-40 h-40 rounded" src="" alt="Default avatar"/> */}
           
            {!isHovered ? (
                 <div class="relative inline-flex items-center justify-center w-60 h-60 overflow-hidden bg-zinc-700 shadow-lg rounded-sm cursor-pointer"  
                 onMouseEnter={handleHover}
                 onMouseLeave={handleMouseOut}>
                    <span
                    className="font-medium text-zinc-900 text-8xl"
                   
                    >
                    T
                    </span>
                    </div>
                ) : (
                    <div class="relative inline-flex items-center justify-center w-60 h-60 overflow-hidden bg-zinc-700 shadow-lg rounded-sm cursor-pointer "  
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}>
                    <span
                    className="font-medium text-zinc-900 text-8xl"
                  
                    >
                    <span role="img" aria-label="Edit">✎</span>
                    </span>
                    </div>
                 )}
         
         <div class="text-white grid justify-items-start">
            <div class="text-sm content-end">
                เพลย์ลิสต์
            </div>
            <div class="text-8xl font-bold cursor-pointer">
                 เพลย์ลิสต์ของฉัน
            </div>
         </div>
        </div>
        <div class="text-white">
            ด้านบน
        </div>
        
        <div class="p-7">
            <div class="text-white text-xl font-bold">
                มาค้นหาเพลงสำหรับเพลยลิสต์ของคุณกัน
            </div>
            <div>
            <form class="max-w-md pt-5 mb-5">   
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-zinc-900 border border-zinc-300 rounded-sm bg-zinc-50  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" placeholder="ค้นหาเพลงหรือตอน" required />
                    </div>
                </form>
            </div>
            <div class="pr-2 grid grid-cols-10 hover:bg-zinc-900 justify-between rounded-md">
              <div class="col-span-5 w-full gap-2 item-center pt-2 pb-2 pl-2  flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
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
                <div class="col-span-3 w-full text-zinc-400 flex items-center justify-start truncate">
                          Neque porro quisquam est qui dolorem ipsum quia dolor sit a
                </div>
                <div class="col-span-2 w-full text-white flex items-center pr-3 justify-end">
                <button class="bg-transparent text-white font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-white rounded-full">
                    เพิ่ม
                </button>
                </div>
              </div>
              <div class="pr-2 grid grid-cols-10 hover:bg-zinc-900 justify-between rounded-md">
              <div class="col-span-5 w-full gap-2 item-center pt-2 pb-2 pl-2  flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
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
                <div class="col-span-3 w-full text-zinc-400 flex items-center justify-start truncate">
                          Neque porro quisquam est qui dolorem ipsum quia dolor sit a
                </div>
                <div class="col-span-2 w-full text-white flex items-center pr-3 justify-end">
                <button class="bg-transparent text-white font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-white rounded-full">
                    เพิ่ม
                </button>
                </div>
              </div>
              <div class="pr-2 grid grid-cols-10 hover:bg-zinc-900 justify-between rounded-md">
              <div class="col-span-5 w-full gap-2 item-center pt-2 pb-2 pl-2  flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
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
                <div class="col-span-3 w-full text-zinc-400 flex items-center justify-start truncate">
                          Neque porro quisquam est qui dolorem ipsum quia dolor sit a
                </div>
                <div class="col-span-2 w-full text-white flex items-center pr-3 justify-end">
                <button class="bg-transparent text-white font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-white rounded-full">
                    เพิ่ม
                </button>
                </div>
              </div>
              <div class="pr-2 grid grid-cols-10 hover:bg-zinc-900 justify-between rounded-md">
              <div class="col-span-5 w-full gap-2 item-center pt-2 pb-2 pl-2  flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark text-white md:max-w-xl md:flex-row ">
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
                <div class="col-span-3 w-full text-zinc-400 flex items-center justify-start truncate">
                          Neque porro quisquam est qui dolorem ipsum quia dolor sit a
                </div>
                <div class="col-span-2 w-full text-white flex items-center pr-3 justify-end">
                <button class="bg-transparent text-white font-semibold hover:text-white py-1 px-4 border border-zinc-500 hover:border-white rounded-full">
                    เพิ่ม
                </button>
                </div>
              </div>

            {/* forPushContentUp */}
              <div class="h-32">
                 {/* footer */}
              </div>
        </div>
        
        </>
    )
}
