import React from 'react'
import IntroJS from './IntroJS'
import IntroTS from './IntroTS'
import IntroJava from './IntroJava'
import IntroPython from './IntroPython'

const CurrentIntro = ({currentLang}) => {

  switch(currentLang) {
    case "TypeScript":
      return (<IntroTS />)
    case "Java":
      return (<IntroJava />)
    case "Python":
      return (<IntroPython />)
    default:
      return (<IntroJS />)
  }
}

export default CurrentIntro