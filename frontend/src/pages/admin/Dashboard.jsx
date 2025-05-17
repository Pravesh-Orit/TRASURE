// src/pages/admin/Dashboard.jsx - placeholder for implementation
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { fetchAdminDashboardStats } from "../../api/adminApi";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchAdminDashboardStats().then((data) => setStats(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Total Revenue">
        <CardContent>₹{stats.revenue || 0}</CardContent>
      </Card>
      <Card title="Bookings">
        <CardContent>{stats.bookings || 0}</CardContent>
      </Card>
      <Card title="SLA Compliance">
        <CardContent>{stats.slaCompliance || 0}%</CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
