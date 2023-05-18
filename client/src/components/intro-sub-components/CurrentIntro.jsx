import React from 'react'
import IntroJS from './IntroJS'
import IntroTS from './IntroTS'
import IntroJava from './IntroJava'
import IntroPython from './IntroPython'
import IntroSql from './IntroSQL'

const CurrentIntro = ({currentLang}) => {

  switch(currentLang) {
    case "TypeScript":
      return (<IntroTS />)
    case "Java":
      return (<IntroJava />)
    case "Python":
      return (<IntroPython />)
    case "SQL":
      return (<IntroSql />)
    default:
      return (<IntroJS />)
  }
}

export default CurrentIntro