import React from 'react'
import IntroJS from './IntroJS'
import IntroTS from './IntroTS'
import IntroJava from './IntroJava'

const CurrentIntro = ({currentLang}) => {

  if (currentLang === "JavaScript") {
    return (
      <IntroJS />
    )
  } else if (currentLang === "TypeScript") {
    return (
      <IntroTS />
    )     
  } else if (currentLang === "Java") {
    return (
      <IntroJava />
    )     
  }
}

export default CurrentIntro