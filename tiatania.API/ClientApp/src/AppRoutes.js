import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Prices } from "./pages/Prices";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/prices',
    element: <Prices />
  },
  {
    path: '/gallery',
    element: <Gallery />
  }

];


export default AppRoutes;
