import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { HackatonsOrganizer } from "@/pages/hackatons-organizer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/hackatons",
    element: <HackatonsOrganizer />
  }
]);