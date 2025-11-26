export default function AdminView() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-black mb-2">🔐 ADMIN PANEL</h2>
        <p className="text-sm text-gray-200">
          System management and analytics
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
          <div className="text-3xl mb-2">👥</div>
          <div className="text-2xl font-black text-gray-900">1,247</div>
          <div className="text-sm text-gray-600">Total Users</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
          <div className="text-3xl mb-2">🔍</div>
          <div className="text-2xl font-black text-gray-900">8,392</div>
          <div className="text-sm text-gray-600">VIN Checks</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
          <div className="text-3xl mb-2">💬</div>
          <div className="text-2xl font-black text-gray-900">2,156</div>
          <div className="text-sm text-gray-600">Chat Sessions</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
          <div className="text-3xl mb-2">📊</div>
          <div className="text-2xl font-black text-gray-900">342</div>
          <div className="text-sm text-gray-600">API Calls Today</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          System Status
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
            <span className="font-semibold text-sm">API Server</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
              ● ONLINE
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
            <span className="font-semibold text-sm">Database</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
              ● ONLINE
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
            <span className="font-semibold text-sm">Gemini AI</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
              ● ONLINE
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl">
            <span className="font-semibold text-sm">Cache Layer</span>
            <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-bold">
              ● DEGRADED
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-[#003366] text-white font-bold py-3 rounded-xl hover:bg-[#002244] transition-colors active:scale-95">
            📥 Export Data
          </button>

          <button className="bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700 transition-colors active:scale-95">
            📊 Analytics
          </button>

          <button className="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors active:scale-95">
            👥 Manage Users
          </button>

          <button className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-colors active:scale-95">
            ⚙️ Settings
          </button>
        </div>
      </div>

      <div className="bg-gray-100 rounded-2xl p-4 text-center">
        <p className="text-sm text-gray-600">
          Admin panel v1.0.0 • Last updated: Nov 26, 2025
        </p>
      </div>
    </div>
  )
}
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
