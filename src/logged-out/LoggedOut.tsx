import { observer } from "mobx-react-lite";
import MainLayout from "../logged-in/main-layout/MainLayout";
import Drawer from "../logged-in/nagivation/Drawer";
import Navbar from "../logged-in/nagivation/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import Reminders from "./components/Reminders/Reminders";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const LoggedOut = observer(() => {


  return (
    <div className="container">
      {/* This is the main Layout  which will contain the Drawer The main layout which renders components in nested Routes 
       structure is the Drawer |Main Content| right Drawer  */}
      <Drawer />
      <main>
        <MainLayout />
      </main>

      {/*  Right Section */}
      <div className="right-section">
        <Navbar />
        <UserProfile
          username="Lots"
          jobTitle="Web Developer"
          logoSrc="/images/lotswhite.png"
        />
        <Reminders />
      </div>
    </div>
  );
});

export default LoggedOut;


