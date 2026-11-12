import Sidebar from "../components/Sidebar";
import { Bell, UserCircle } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-section">
        <header className="topbar">
          <h3>Public Awareness Platform</h3>

          <div className="topbar-actions">
            <Bell size={22} />
            <UserCircle size={26} />
            <span>Administrator</span>
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;