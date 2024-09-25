import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './App.css';
import { AuthProvider } from './context/auth';

const App = () => {
  
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>    
  )
}

export default App
