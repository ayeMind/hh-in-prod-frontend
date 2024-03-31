import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import {SignUpUser} from "@/pages/sign-up/user";
import {SignUpOrg} from "@/pages/sign-up/org";
import { TeamOrgPage } from "@/pages/teams/org";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/sign-up/user",
    element: <SignUpUser />,
    errorElement: <NotFound />
  },
  {
    path: "/sign-up/org",
    element: <SignUpOrg />,
    errorElement: <NotFound />
  },
  {
    path: "/hackathon/:id/teams",
    element: <TeamOrgPage/>,
    errorElement: <NotFound/>
  }
]);