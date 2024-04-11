import play from './assets/icons/play.png'
import pause from './assets/icons/pause.png'
import React, { useState } from 'react';

export default function PlayerFooter() {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
    };
  return (
    <>
    <nav class="bg-zinc-950">
  <div class="mx-auto">
    <div class="flex justify-between h-24 items-center text-white p-7">
        <div class="flex-1 grid justify-items-start">
              <div class="flex gap-2 item-center rounded-lg text-white">
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
         <div className="flex-1 grid justify-items-center cursor-pointer" onClick={togglePlayPause}>
                {isPlaying ? (
                <img src={pause} alt="Pause" />
                ) : (
                <img src={play} alt="Play" />
                )}
            </div>
            <div className="flex-1 grid justify-items-end cursor-pointer" onClick={togglePlayPause}>
                {isPlaying ? (
                <img src={pause} alt="Pause" />
                ) : (
                <img src={play} alt="Play" />
                )}
            </div>
    </div>
  </div>

</nav>

   </>
  )
}
