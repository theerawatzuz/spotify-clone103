import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
  return (
    <div class="bg-zinc-800 p-7 rounded-lg">
      <div class="flex justify-between">
        <div></div>
        <div class="flex gap-1 ">
          <button class="bg-white hover:bg-slate-300 text-black font-bold py-2 px-4 rounded-full">
              สำรวจ Premium
            </button>
          <button class="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-2 px-4 rounded-full">
              ติดตั้งแอพ
            </button>
          <button class="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-2 px-4 rounded-full">
              
            </button>
          <button class="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-2 px-4 rounded-full">
             
            </button>
        </div>
      </div>
      <div class="flex gap-3 mt-4">
            <button class="bg-white hover:bg-slate-300 text-black font-bold py-2 px-4 rounded-full">
              ทั้งหมด
            </button>
            <button class="bg-zinc-700 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded-full">
              เพลง
            </button>
            <button class="bg-zinc-700 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded-full">
              พอดแคสต์
            </button>
      </div>
    </div>
  )
}
