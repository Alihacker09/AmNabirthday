import React from 'react'
import "./button.css"

const Lovebutton = ({text, onClick}) => {
  return (
    <div class="love">
<button type="button" id="button" class="buttons" onClick={onClick}>{text}</button>
<div id="heart1" class="hearts"></div>
<div id="heart2" class="hearts"></div>
<div id="heart3" class="hearts"></div>
<div id="heart4" class="hearts"></div>
<div id="heart5" class="hearts"></div>
</div>
  )
}

export default Lovebutton