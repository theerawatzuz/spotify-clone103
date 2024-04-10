import Nav from './nav.jsx'

export default function App() {
  return (
    <>
    <div class="grid grid-cols-12 gap-3 bg-zinc-950 p-3 ">
        <div class="col-span-3 bg-zinc-800 rounded-lg">2</div>
        <div class="col-span-9 bg-zinc-800 rounded-lg">
          <Nav />
          10
          </div>
     </div>
    </>
  )
}
