import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { HackathonsOrg } from "@/pages/hackathons/org";
import { HackathonsUser } from "@/pages/hackathons/user";
import { HackathonInfo } from "@/pages/hackathon-info";
import {SignUpUser} from "@/pages/sign-up/user";
import {SignUpOrg} from "@/pages/sign-up/org";
import {Login} from "@/pages/login";
import {JoinHackathon} from "@/pages/join-hackathon";
import {CreateResume} from "@/pages/create-resume";
import { TeamOrgPage } from "@/pages/teams/org";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/hackathons/org",
    element: <HackathonsOrg />
  },
  {
    path: "/hackathons/user",
    element: <HackathonsUser />
  },
  {
    path: "/sign-up/user",
    element: <SignUpUser />
  },
  {
    path: "/sign-up/org",
    element: <SignUpOrg />
  },
  {
    path: "/hackathon-info",
    element: <HackathonInfo />
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
    path: "/hackathons/:id/create-resume",
    element: <CreateResume />,
  },
  {
    path: "/hackathon/:id/teams",
    element: <TeamOrgPage/>,
    errorElement: <NotFound/>
  }
]);