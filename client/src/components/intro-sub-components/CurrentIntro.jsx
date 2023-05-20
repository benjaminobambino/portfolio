import React from 'react'
import IntroJS from './IntroJS'
import IntroTS from './IntroTS'
import IntroJava from './IntroJava'
import IntroPython from './IntroPython'
import IntroSql from './IntroSQL'
import IntroJavaMobile from './mobile-intro/IntroJavaMobile'
import useWindowWidth from '../../custom-hooks/useWindowWidth'
import IntroTSMobile from './mobile-intro/IntroTSMobile'
import IntroSqlMobile from './mobile-intro/IntroSQLMobile'

const CurrentIntro = ({currentLang}) => {
  const width = useWindowWidth()
  const isMobile = width <= 500

  switch(currentLang) {
    case "TypeScript":
      return (isMobile ? <IntroTSMobile /> : <IntroTS />)
    case "Java":
      return (isMobile ? <IntroJavaMobile /> : <IntroJava />)
    case "Python":
      return (<IntroPython />)
    case "SQL":
      return (isMobile ? <IntroSqlMobile /> : <IntroSql />)
    default:
      return (<IntroJS />)
  }
}

export default CurrentIntro