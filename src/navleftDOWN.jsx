import album from './assets/icons/album.png'
import plus from './assets/icons/plus.png'
import next from './assets/icons/next.png'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NavLeftDown() {
  return (
    <div class="rounded-t-lg bg-zinc-800">
      <div class="flex p-8 gap-5 justify-between font-bold text-zinc-400">
        <div class="flex search-text cursor-pointer gap-2">
          <div>
            <img src={album} alt="album" />
          </div>
          
           คอลเลกชันของคุณ
        </div>
        <div class="flex items-center search-text cursor-pointer gap-7">
          <Menu as="div">
          <div class="has-tooltip flex items-center">
            <Menu.Button>
            <img class="h-4 has-tooltip" src={plus} alt="Add new"/>
              <span class='tooltip rounded shadow-lg p-2 bg-zinc-900 text-white mt-2 -mx-10'>สร้างเพลย์ลิสต์หรือโฟลเดอร์</span>
              </Menu.Button>
           </div>

           <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
 <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-zinc-800 text-gray-300' : 'text-gray-400',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  สร้างเพลย์ลิสต์ใหม่
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href="#"
                className={classNames(
                  active ? 'bg-zinc-800 text-gray-300' : 'text-gray-400',
                  'block px-4 py-2 text-sm'
                )}
              >
                  สร้างโฟลเดอร์เพลย์ลิสต์
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
        </Transition>
           </Menu>
           <div class="has-tooltip">
              <img class="h-5" src={next} alt="Add new" />
                <span class='tooltip rounded shadow-lg p-2 bg-zinc-900 text-white mt-2 -mx-10'>แสดงเพิ่มเติม</span>
            </div>
        </div>
      </div>
      <div>
      <div class="flex gap-3 pl-8 pr-8">

            <button class=" bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-full">
              เพลย์ลิสต์
            </button>
            <button class="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-full">
              ศิลปิน
            </button>
      </div>
      </div>
    </div>
  )
}
