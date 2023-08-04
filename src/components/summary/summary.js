import React from "react"
import {AiFillExperiment} from 'react-icons/ai'
import {DiRuby} from 'react-icons/di'
import { PiVirtualRealityFill } from "react-icons/pi"
import {TbAugmentedReality, TbBrandReact, TbBrandUnity, TbBrandJavascript} from "react-icons/tb"
import {SiIos} from 'react-icons/si'
import { shape, ProfileType } from "../../types"

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}

var isNeg = true;
var colors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2']

const WobbleIcon = ({Icon}) => {
  let rotate = Math.floor(Math.random() * 10) + 20
  if (isNeg)
    rotate -= 50
  isNeg = !isNeg

  const random = Math.floor(Math.random() * colors.length);
  const color = colors.splice(random, 1)[0]

  return (
    <div className="ml-2">
      <Icon style={{transform: `rotate(${rotate}deg)`, color}} />
    </div>
  )
}

const icons = shuffle([AiFillExperiment, TbBrandReact,SiIos,TbBrandJavascript,PiVirtualRealityFill,TbAugmentedReality,TbBrandUnity,DiRuby])
const Summary = ({ profile }) => (
  <div className="pb-8">
    <h3 className="font-header font-light text-2xl text-front leading-tight">
      I create experiences from ideation, through development and into testing
    </h3>
    <h1 className="flex md:text-5xl text-4xl mt-4 flex-wrap">
      {icons.map((icon) => <WobbleIcon Icon={icon} key={icon}/>)}
    </h1>
  </div>
)

Summary.propTypes = {
  profile: shape(ProfileType),
}

export default Summary
