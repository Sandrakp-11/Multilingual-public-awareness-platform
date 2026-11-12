import {
  Users,
  Megaphone,
  FileText,
  Languages,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Audience",
      value: "0",
      icon: Users,
      description: "Registered audience members",
    },
    {
      title: "Active Campaigns",
      value: "0",
      icon: Megaphone,
      description: "Currently running campaigns",
    },
    {
      title: "Templates",
      value: "0",
      icon: FileText,
      description: "Available communication templates",
    },
    {
      title: "Languages",
      value: "0",
      icon: Languages,
      description: "Supported communication languages",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <h1>Dashboard</h1>
        <p>Welcome to your Public Awareness Platform.</p>
      </div>

      <div className="stats-grid">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={item.title}>
              <div className="stat-icon">
                <Icon size={24} />
              </div>

              <h3>{item.title}</h3>
              <h2>{item.value}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="dashboard-section">
        <h2>Welcome!</h2>
        <p>
          Manage your audience, plan campaigns and create
          multilingual public awareness communications
          from one platform.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;