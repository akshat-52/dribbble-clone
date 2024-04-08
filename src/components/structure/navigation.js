import { About } from "../pages/About"
import { Account } from "../pages/Account"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Inspiration } from "../pages/Inspiration"
import { FindWork } from "../pages/FindWork"
import { LearnDesign } from "../pages/LearnDesign"
import { GoPro } from "../pages/GoPro"
import { HireDesigner } from "../pages/HireDesigner"

export const nav = [
     { path: "/", name: "Home", element: <Home />, isMenu: true, isPrivate: false },
     { path: "/about", name: "About", element: <About />, isMenu: true, isPrivate: false },
     { path: "/login", name: "Login", element: <Login />, isMenu: false, isPrivate: false },
     { path: "/inspiration", name: "Inspiration", element: <Inspiration />, isMenu: true, isPrivate: true },
     { path: "/findwork", name: "Find Work", element: <FindWork />, isMenu: true, isPrivate: true },
     { path: "/learndesign", name: "Learn Design", element: <LearnDesign />, isMenu: true, isPrivate: true },
     { path: "/gopro", name: "Go Pro", element: <GoPro />, isMenu: true, isPrivate: true },
     { path: "/hiredesigner", name: "Hire Designer", element: <HireDesigner />, isMenu: true, isPrivate: true },
     { path: "/account", name: "Account", element: <Account />, isMenu: true, isPrivate: true },
]