import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Prices } from "./pages/Prices";
import { Menu } from "./pages/Menu";
import { PageNotFound } from "./pages/PageNotFound";
import { Layout } from "./components/Layout";

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
      element: <Layout><About /></Layout>
  },
  {
      path: '/prices',
      element: <Layout><Prices /></Layout>
  },
  {
      path: '/gallery',
      element: <Layout><Gallery /></Layout>
  },
  {
      path: '/menu',
      element: <Layout><Menu /></Layout>
  },
  {
    path: '*',
    element: <PageNotFound />
  },


];


export default AppRoutes;
