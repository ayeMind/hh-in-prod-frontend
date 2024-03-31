import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import {SignUpUser} from "@/pages/sign-up/user";
import {SignUpOrg} from "@/pages/sign-up/org";
import {Login} from "@/pages/login";
import {JoinHackathon} from "@/pages/join-hackathon";
import {CreateResume} from "@/pages/create-resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/sign-up/user",
    element: <SignUpUser />,
  },
  {
    path: "/sign-up/org",
    element: <SignUpOrg />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/join-hackathon",
    element: <JoinHackathon />,
  },
  {
    path: "/create-resume",
    element: <CreateResume />,
  },
]);