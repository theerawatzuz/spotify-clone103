import NavRight from './navright.jsx'
import NavLeft from './navleft.jsx'

export default function App() {
  return (
    <>
    <div class="grid grid-cols-12 gap-2 bg-zinc-950 p-2 ">
        <div class="grid col-span-3">
            {/* <div class="p-3 bg-zinc-800">

            </div>
            <div class="p-3  bg-zinc-800">

            </div> */}
          <NavLeft/>
          <div class="bg-zinc-800 pt-4"> 
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
             
          </div>
              
          </div>
        <div class="col-span-9 bg-zinc-800 rounded-lg">
          <NavRight />
          10
          </div>
     </div>
    </>
  )
}
