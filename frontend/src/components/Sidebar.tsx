import {
  LayoutDashboard,
  Users,
  Megaphone,
  FileText,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>PublicConnect</h2>

      <nav>
        <a href="/" className="active">
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a href="#">
          <Users size={20} />
          Audience
        </a>

        <a href="#">
          <Megaphone size={20} />
          Campaigns
        </a>

        <a href="#">
          <FileText size={20} />
          Templates
        </a>

        <a href="#">
          <Settings size={20} />
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;