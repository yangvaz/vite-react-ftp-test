import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import Contact, { loader as contactLoader } from './routes/contact'
import EditContact, { action as editAction } from './routes/edit'
import ErrorPage from './error-page'
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        // We reused the contactLoader for this route. 
        // This is only because we're being lazy in this example
        // There is no reason to attempt to share loaders among routes,
        // they usually have their own.
        loader: contactLoader,
        action: editAction
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
