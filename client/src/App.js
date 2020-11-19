import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import 'bootstrap/dist/css/bootstrap.css'
import { NBar } from './components/Navbar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useHttp } from './hooks/http.hook'
import {Loader} from './components/Loader'
import { NBarNA } from './components/NavbarNotAuth'

function App() {
  const {loading} = useHttp()
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (loading) {
    return <Loader />
  }

  return (
    
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        {isAuthenticated && <NBar/>}
        {!isAuthenticated && <NBarNA/>}
        <div className="container-fluid">
          {routes}
          <ToastContainer />
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
