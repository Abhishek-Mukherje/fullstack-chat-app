
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Navbar from './component/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import SettingPage from './Pages/Settingpage.jsx'
import ProfilePage from './Pages/ProfilePage'
import { useEffect } from 'react';
import { Loader } from "lucide-react"
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/useAuthStore.jsx'
import { useThemeStore } from "./store/useThemeStore.jsx";

function App() {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log({ onlineUsers });


  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)

    return (
      <div className='flex items-center justify-center h-screen'>

        <Loader className='size-10 animate-spin' />
      </div>
    )

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>

        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />

      </Routes>
      <Toaster />
    </div>
  )
}

export default App
