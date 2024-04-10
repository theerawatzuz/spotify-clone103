import notification from './assets/icons/bell.png'
import downloadicon from './assets/icons/download-circular-button.png'
import lefticon from './assets/icons/left-chevron.png'
import righticon from './assets/icons/chevron.png'
import profile from './assets/pic/profile.jpg'

export default function NavRight() {
  return (
    <div class="bg-zinc-800 p-3 ml-3 rounded-lg">
      <div class="flex justify-between">
        <div class="flex gap-1">
          <button class="bg-zinc-950 hover:bg-zinc-950 text-white font-bold py-2 px-2 rounded-full">
          <img src={lefticon} alt="left" />
             </button>
             <button class="bg-zinc-950 hover:bg-zinc-950 text-white font-bold py-2 px-2 rounded-full">
             <img src={righticon} alt="rifgt" />
             </button>
        </div>
        <div class="flex gap-1 ">
          <button class="bg-white hover:bg-slate-300 text-black font-bold py-2 px-4 rounded-full">
              สำรวจ Premium
            </button>
          <button class="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-2 px-4 rounded-full">
                <div class="flex gap-1">
                  <img src={downloadicon} alt="download" />
                  ติดตั้งแอพ
                </div>
            </button>
          <button class="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-2 px-2 rounded-full has-tooltip">
              <img src={notification} alt="notification" />
              <span class='tooltip rounded shadow-lg p-2 bg-zinc-900 text-white mt-3 -mx-11'>มีอะไรใหม่</span>
            </button>
            <img class="w-9 h-9 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 ml-1" src={profile} alt="Bordered avatar"/>
        </div>
      </div>
      <div class="flex gap-3 mt-4">
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
    </div>
  )
}
