import NavLeftTop from './navleftTOP'
import NavLeftDown from './navleftDOWN'

export default function NavLeft({ setIsCreateMode }) {
  return (
    <div class="flex flex-col gap-2">
      <div >
        <NavLeftTop/>
    
      </div>
      <div>
        <NavLeftDown setIsCreateMode={setIsCreateMode}/>
      </div>
   </div>
  )
}
