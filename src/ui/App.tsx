import './App.css'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider, RequireAuth } from './src/contexts/AuthContext'
import LoadingProvider from './src/contexts/LoadingContext'
import LoginpPage from './src/pages/Auth/LoginPage'
import FrameComponent from './src/components/frame/FrameComponent'
import { ThemeProvider } from './src/contexts/ThemeContext'
import { MailStack } from './src/navigate/MailStack'
import { NotificationProvider } from './src/contexts/NotificationContext'
import CalendarPage from './src/pages/Cal/CalendarPage'


function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <NotificationProvider>
          <LoadingProvider>
            <AuthProvider>
              <Routes>
                <Route path='/auth' element={<LoginpPage />} />
                <Route path='/dev-info' />
                <Route
                  path="*"
                  element={
                    <RequireAuth>
                      <FrameComponent>

                        <Routes>
                          <Route path='*' element={<Navigate to="/mail" replace />} />
                          <Route path='/mail' element={<MailStack />} />
                          <Route path='/calendar' element={<CalendarPage />} />
                        </Routes>
                      </FrameComponent>

                    </RequireAuth>
                  }
                />
              </Routes>
            </AuthProvider>
          </LoadingProvider>
        </NotificationProvider>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
