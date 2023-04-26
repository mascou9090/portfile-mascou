import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Contact } from './shared/components/Contact';
import { ErrorPage } from './shared/components/Error';
import { Main } from './shared/components/Main';
import { Projects } from './shared/components/Projects';
import { Provider } from 'react-redux'
import { store } from './shared/redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "contato",
        element: <Contact />
      },
      {
        path: "projetos",
        element: <Projects />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);

