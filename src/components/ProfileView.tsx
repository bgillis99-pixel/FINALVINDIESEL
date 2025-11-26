import React, { useState } from 'react';
import { User, HistoryItem } from '../types';

interface ProfileViewProps {
  user: User | null;
  onLogin: (email: string) => void;
  onRegister: (email: string) => void;
  onLogout: () => void;
  onAdminAccess: () => void;
  isOnline: boolean;
}

const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  onLogin,
  onRegister,
  onLogout,
  onAdminAccess,
  isOnline
}) => {
  const [email, setEmail] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (isRegistering) {
      onRegister(email);
    } else {
      onLogin(email);
    }
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-black text-[#003366] mb-6 text-center">
            {isRegistering ? 'Create Account' : 'Sign In'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00C853] focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full py-4 bg-[#003366] text-white font-bold rounded-xl hover:bg-[#002244] active:scale-95 transition-transform"
            >
              {isRegistering ? 'Register' : 'Sign In'}
            </button>
          </form>

          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="w-full mt-4 text-[#00C853] font-bold"
          >
            {isRegistering ? 'Already have an account? Sign In' : 'Need an account? Register'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-black text-[#003366]">Profile</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 active:scale-95 transition-transform"
          >
            Logout
          </button>
        </div>

        {!isOnline && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="text-sm text-yellow-800">You are offline. Some features may be limited.</p>
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={onAdminAccess}
            className="w-full py-3 bg-[#003366] text-white font-bold rounded-xl hover:bg-[#002244] active:scale-95 transition-transform"
          >
            🔧 Admin Panel
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#003366] mb-4">History</h3>
        {user.history.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No history yet</p>
        ) : (
          <div className="space-y-2">
            {user.history.slice(0, 10).map((item: HistoryItem) => (
              <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-mono text-sm font-bold">{item.value}</p>
                    <p className="text-xs text-gray-500">{item.type}</p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(item.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileView;
