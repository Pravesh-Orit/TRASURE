// src/pages/admin/ProviderManagement.jsx - placeholder for implementation
import React, { useEffect, useState } from "react";
import { getAllProviders, approveKYC } from "../../api/adminApi";
import { Button } from "../../components/ui/Button";

const ProviderManagement = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getAllProviders().then(setProviders);
  }, []);

  const handleApprove = (id) => {
    approveKYC(id).then(() =>
      setProviders((prev) =>
        prev.map((p) => (p.id === id ? { ...p, kycStatus: "approved" } : p))
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Providers</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Company</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.kycStatus}</td>
              <td>
                {p.kycStatus !== "approved" && (
                  <Button onClick={() => handleApprove(p.id)}>
                    Approve KYC
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProviderManagement;
