import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { HackatonsOrg } from "@/pages/hackatons-org";
import { HackatonsUser } from "@/pages/hackatons-user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/hackatons/org",
    element: <HackatonsOrg />
  },
  {
    path: "/hackatons/user",
    element: <HackatonsUser />
  },
]);