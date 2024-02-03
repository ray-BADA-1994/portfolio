// react router imports
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Router,
} from "react-router-dom";
// component imports
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import RootLayout from "./Layout/RootLayout";
// From Pages folder
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
