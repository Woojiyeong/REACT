import { useState } from 'react'
import Count from './Example'
import MirrorInput from './MirrorInput'
import ToggleBox from './ToggleBox'
import Task from './homework'
import "./App.css"

function App(){
  return(
    <div className='app'>
      {/* <Count/>
      <MirrorInput />
      <ToggleBox /> */}
      <Task name = "지영" hobby="잠쿨쿨자기" fav_food="엽기떡볶이"/>
    </div>
  )
  
}
export default App
