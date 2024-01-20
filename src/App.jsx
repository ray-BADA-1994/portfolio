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
import HomePage from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
