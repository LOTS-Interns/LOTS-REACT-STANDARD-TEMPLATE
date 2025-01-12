import { NavLink } from "react-router-dom";
import ErrorBoundary from "../../shared/components/error-boundary/ErrorBoundary";
import AccordionSection from "./Accordian-Section/Accordion";

const USER_DRAWER = () => {
  return (
    <aside>
      <div className="toggle">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/lotswhite.png"} alt="Logo" />
          <h2>
            L<span className="danger">OTS</span>
          </h2>
        </div>
        <div className="close" id="close-btn">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>

      <div className="sidebar">
        <NavLink to="/l/dashboard">
          <span className="material-icons-sharp">dashboard</span>
          <h3>Dashboard</h3>
        </NavLink>
        <NavLink to="/l/client">
          <span className="material-icons-sharp">person_outline</span>
          <h3>Users</h3>
        </NavLink>

        <NavLink to="/l/history">
          <span className="material-icons-sharp">receipt_long</span>
          <h3>History</h3>
        </NavLink>
        <NavLink to="/analytics" className="active">
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </NavLink>
        <NavLink to="/tickets">
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Tickets</h3>
          <span className="message-count">27</span>
        </NavLink>
        <NavLink to="/sale-list">
          <span className="material-icons-sharp">inventory</span>
          <h3>Sale List</h3>
        </NavLink>
        <NavLink to="/reports">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reports</h3>
        </NavLink>
        <div>
          <AccordionSection title={"S"}>
            <NavLink to="/notifications">
              <span className="material-icons-sharp">inventory</span>
              <h3>Notification Settings</h3>
            </NavLink>
            <NavLink to="/theme">
              <span className="material-icons-sharp">report_gmailerrorred</span>
              <h3>Theme Settings</h3>
            </NavLink>
            <NavLink to="/user">
              <span className="material-icons-sharp">insights</span>
              <h3>User Preference Settings</h3>
            </NavLink>
          </AccordionSection>
        </div>
        <NavLink to="/new-login">
          <span className="material-icons-sharp">add</span>
          <h3>New Login</h3>
        </NavLink>
        <NavLink to="/logout">
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </NavLink>
      </div>
    </aside>
  );
};

const DrawerContent = () => {
  return (
    <>
      <USER_DRAWER />
    </>
  );
};

const FixedDrawer = () => {
  return <DrawerContent />;
};

const Drawer = () => {
  return (
    <ErrorBoundary>
      <FixedDrawer />
    </ErrorBoundary>
  );
};

export default Drawer;
