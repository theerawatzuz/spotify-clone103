import home from './assets/icons/home.png'
import search from './assets/icons/search.png'

export default function NavLeftTop() {
  return (
    <div class="gap-2 rounded-lg">
      <div class="grid p-8 gap-5 font-bold text-white">
        <div class="flex gap-4 cursor-pointer">
          <img src={home} alt="home" />
          หน้าหลัก
          </div>
          <div class="flex gap-4 cursor-pointer text-zinc-400">
            <img src={search} alt="search" />
            <div class="search-text">ค้นหา</div>
        </div>
      </div>
    </div>
  )
}
