import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import Nav from './components/nav';
// import NavBar from './components/navbar';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
