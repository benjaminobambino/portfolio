import React from 'react'
import IntroJS from './IntroJS'
import IntroTS from './IntroTS'

const CurrentIntro = ({currentLang}) => {

  if (currentLang === "JavaScript") {
    return (
      <IntroJS />
    )     
  } else if (currentLang === "TypeScript") {
    return (
      <IntroTS />
    )     
  }
}

export default CurrentIntro