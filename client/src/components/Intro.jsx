import React, { useState } from 'react'
import IntroJS from './intro-sub-components/IntroJS'
import IntroTS from './intro-sub-components/IntroTS'

const Intro = () => {
  const [language, setLanguage] = useState("ts")

  if (language === "js") {
    return (
      <IntroJS />
    )     
  } else if (language === "ts") {
    return (
      <IntroTS />
    )     
  }
}

export default Intro