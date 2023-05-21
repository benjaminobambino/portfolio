import React from 'react'

const IntroSqlMobile = () => {

    return (
      <div className="intro">
          <p className="typed-out sql-type1">DECLARE</p>
          <p className="typed-out sql-type2"><span className="indent">@name AS VARCHAR(100) = 'Benjamin Peck',</span></p>
          <p className="typed-out sql-type3"><span className="indent">@title AS VARCHAR(100) =</span></p>
          <p className="typed-out sql-type4"><span className="indent"><span className="indent">'Full-Stack Software Engineer';</span></span></p>
          <br/>
          <p className="typed-out sql-type5">CREATE PROCEDURE read_on</p>
          <p className="typed-out sql-type6">AS</p>
          <p className="typed-out sql-type7">EXEC scroll</p>
          <p className="typed-out sql-type8">GO;</p>
      </div>
    )     
}

export default IntroSqlMobile