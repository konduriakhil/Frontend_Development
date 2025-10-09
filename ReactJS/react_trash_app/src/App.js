import React, { createContext } from 'react'
import ComponentA from './components/ComponentA'

export const UserContext = createContext()
export const UserNames = createContext()

const App = () => {
      return (
            <UserNames.Provider value={['AKhil', 'Sai', 'Eswar', 'Chandra Kaladara']}>
                  <UserContext.Provider value={[
                        { username: 'Akhil', id: 1 },
                        { username: 'Sai', id: 2 },
                        { username: 'Vasantha', id: 3 }]}>
                        <div>
                              <h1>Welcome to react</h1>
                              <ComponentA />
                        </div>
                  </UserContext.Provider>
            </UserNames.Provider >
      )
}

export default App