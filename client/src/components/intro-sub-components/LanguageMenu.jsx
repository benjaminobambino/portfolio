import React from 'react'
import { languages } from '../../data/data.js'

const LanguageMenu = ( {currentLang, setCurrentLang} ) => {

  const handleClick = (language) => {
    setCurrentLang(language)
  }

  return (
      <div className="languages-container">
        { languages.map((language) => {
          return(
            <h3 key={language} onClick={() => handleClick(language)}>{language}</h3>
            )
          })}
      </div>
  )
}

export default LanguageMenu