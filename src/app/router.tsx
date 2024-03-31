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
import { TeamUserPage } from "@/pages/teams/user";
import {ImportGithub} from "@/pages/imports/import-github";
import {ImportHh} from "@/pages/imports/import-hh";
import {ImportPdf} from "@/pages/imports/import-pdf";
import { ResumeView } from "@/pages/resume-view";
import {Profile} from "@/pages/profile";
import {CreateHackathon} from "@/pages/create-hackathon";
import { MyResume } from "@/pages/my-resume";

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
    path: "/hackathon/:id",
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
    path: "/hackathon/:id/create-resume",
    element: <CreateResume />,
  },
  {
    path: "/hackathon/:id/create-resume/github",
    element: <ImportGithub />,
  },
  {
    path: "/hackathon/:id/create-resume/hh",
    element: <ImportHh />,
  },
  {
    path: "/hackathon/:id/create-resume/pdf",
    element: <ImportPdf />,
  },
  {
    path: "/hackathon/:id/teams",
    element: <TeamUserPage/>,
  },
  {
    path: "/hackathon/:hackathon_id/resume/:user_id",
    element: <ResumeView />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/create-hackathon",
    element: <CreateHackathon />
  },
  {
    path: "/my-resume",
    element: <MyResume />
  }
]);