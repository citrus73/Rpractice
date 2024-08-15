import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Index = lazy(() => import('@/view/Index'))

function RouterConfig() {
  const routes = [
    {
      path: '/',
      element: <Index />
    }
  ]

  const element = useRoutes(routes)
  return element;
}

export default RouterConfig;