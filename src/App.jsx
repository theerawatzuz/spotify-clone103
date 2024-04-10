import NavRight from './navright.jsx'
import NavLeft from './navleft.jsx'

export default function App() {
  return (
    <>
    <div class="grid grid-cols-12 gap-2 bg-zinc-950 p-2 ">
        <div class="grid col-span-3  rounded-lg gap-3">
            {/* <div class="p-3 bg-zinc-800">

            </div>
            <div class="p-3  bg-zinc-800">

            </div> */}
          <NavLeft/>
          </div>
        <div class="col-span-9 bg-zinc-800 rounded-lg">
          <NavRight />
          10
          </div>
     </div>
    </>
  )
}
