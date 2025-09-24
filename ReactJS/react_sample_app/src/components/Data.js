import React from 'react'
import useFetch from '../hooks/useFetch'
import useCounter from '../hooks/useCounter'

const Data = () => {

      const userInfo = useFetch('https://jsonplaceholder.typicode.com/users')
      const covid19Summery = useFetch('https://disease.sh/v3/covid-19/countries')
      const msg = useCounter('Akhil', '06/21/1998')

      console.log(covid19Summery)
      console.log(userInfo)
      console.log(msg)

      return (
            <div>
                  <h1>Data - {msg}</h1>
            </div>
      )
}

export default Data