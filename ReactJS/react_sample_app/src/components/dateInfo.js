import React, { useEffect, useState } from "react";

const dateInfo = (OriginalComponent) => {

      const NewComponent = (props) => {

            const [timer, setTimer] = useState(new Date().toLocaleString());

            useEffect(() => {
                  setInterval(() => {
                        setTimer(new Date().toLocaleString())
                  }, 1000)
            }, [])

            return <OriginalComponent {...props} time={timer} />
      }
      return NewComponent;
}

export default dateInfo
