// CSS
import './App.css';

// Libs
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Context
import { AuthProvider } from './context/AuthContext'

// Firebase
import { onAuthStateChanged } from 'firebase/auth'

function App() {

  const [user, setUser] = useState(undefined)

  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to='/login' />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
