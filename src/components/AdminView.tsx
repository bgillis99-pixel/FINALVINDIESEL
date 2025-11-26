import React from 'react';

const AdminView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-black text-[#003366] mb-4">Admin Panel</h2>
        <p className="text-gray-600 mb-6">Manage users, settings, and system configuration</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#00C853] transition-colors cursor-pointer">
            <h3 className="font-bold text-[#003366] mb-2">👥 User Management</h3>
            <p className="text-sm text-gray-600">View and manage registered users</p>
          </div>

          <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#00C853] transition-colors cursor-pointer">
            <h3 className="font-bold text-[#003366] mb-2">📊 Analytics</h3>
            <p className="text-sm text-gray-600">View usage statistics and reports</p>
          </div>

          <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#00C853] transition-colors cursor-pointer">
            <h3 className="font-bold text-[#003366] mb-2">⚙️ Settings</h3>
            <p className="text-sm text-gray-600">Configure system settings</p>
          </div>

          <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#00C853] transition-colors cursor-pointer">
            <h3 className="font-bold text-[#003366] mb-2">🔑 API Keys</h3>
            <p className="text-sm text-gray-600">Manage API integrations</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Admin features are placeholders. Implement based on your requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
