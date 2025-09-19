import React from 'react'
import dateInfo from './dateInfo'

const Footer = (props) => {
      
      const { time } = props;

      return (
            <footer id="footer">
                  <div className="footer">
                        <p>&copy; 2022 All rights reserved</p>
                        <p>Time - {time}</p>
                  </div>
            </footer>
      )
}

export default dateInfo(Footer)