import NavLeftTop from './navleftTOP'
import NavLeftDown from './navleftDOWN'

export default function NavLeft() {
  return (
    <div class="grid gap-2">
      <div >
        <NavLeftTop/>
    
      </div>
      <div>
        <NavLeftDown/>
      </div>
   </div>
  )
}
