import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Route';
import AuthProvider from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
     <ToastContainer />
     </AuthProvider>
  </StrictMode>,
)
