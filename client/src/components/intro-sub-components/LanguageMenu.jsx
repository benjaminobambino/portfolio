import React from 'react'
import { Link } from 'react-scroll'
import { languages } from '../../data/data.js'

const LanguageMenu = ( {currentLang, setCurrentLang} ) => {

  const handleClick = (language) => {
    setCurrentLang(language)
  }

  return (
      <div className="languages-container">
        { languages.map((language) => {
          return(
            <Link 
              key={language} 
              to=""
              onClick={() => handleClick(language)}
              className={currentLang === language ? "current-language" : "other-language"}>
                {language}
            </Link>
            )
          })}
      </div>
  )
}

export default LanguageMenu