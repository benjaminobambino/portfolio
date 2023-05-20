import React, { useEffect, useState } from 'react'
import IntroJS from './IntroJS'
import IntroTS from './IntroTS'
import IntroJava from './IntroJava'
import IntroPython from './IntroPython'
import IntroSql from './IntroSQL'
import IntroJavaMobile from './mobile-intro/IntroJavaMobile'

const CurrentIntro = ({currentLang}) => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  switch(currentLang) {
    case "TypeScript":
      return (<IntroTS />)
    case "Java":
      return (width > 500 ? <IntroJava /> : <IntroJavaMobile />)
    case "Python":
      return (<IntroPython />)
    case "SQL":
      return (<IntroSql />)
    default:
      return (<IntroJS />)
  }
}

export default CurrentIntro