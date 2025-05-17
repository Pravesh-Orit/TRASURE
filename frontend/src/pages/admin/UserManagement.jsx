// src/pages/admin/UserManagement.jsx - placeholder for implementation
import React, { useEffect, useState } from "react";
import { getAllUsers, toggleUserStatus } from "../../api/adminApi";
import { Button } from "../../components/ui/Button";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  const handleToggle = (userId) => {
    toggleUserStatus(userId).then(() =>
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, active: !u.active } : u))
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.active ? "Active" : "Inactive"}</td>
              <td>
                <Button onClick={() => handleToggle(user.id)}>
                  {user.active ? "Deactivate" : "Activate"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
