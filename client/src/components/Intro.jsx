import React, { useState } from 'react'
import LanguageMenu from './intro-sub-components/LanguageMenu'
import CurrentIntro from './intro-sub-components/CurrentIntro'

const Intro = () => {
  const [currentLang, setCurrentLang] = useState('JavaScript')

  return (
    <div>
      <LanguageMenu currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <CurrentIntro currentLang={currentLang} />
    </div>
  )     
}

export default Intro