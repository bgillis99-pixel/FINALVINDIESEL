import React, { useState } from 'react';

interface VinCheckerProps {
  onAddToHistory: (value: string, type: 'VIN' | 'ENTITY') => void;
  onNavigateChat: () => void;
  onInstallApp: () => void;
}

const VinChecker: React.FC<VinCheckerProps> = ({ onAddToHistory, onNavigateChat, onInstallApp }) => {
  const [vin, setVin] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = async () => {
    if (!vin || vin.length < 17) {
      alert('Please enter a valid 17-character VIN');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onAddToHistory(vin, 'VIN');
      setResult(`VIN ${vin} checked successfully. This is a placeholder result.`);
    } catch (error) {
      setResult('Error checking VIN. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-black text-[#003366] mb-4">VIN Compliance Check</h2>
        <p className="text-sm text-gray-600 mb-6">Enter a 17-character VIN to check CARB compliance status</p>

        <div className="space-y-4">
          <input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
            maxLength={17}
            placeholder="Enter VIN (17 characters)"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00C853] focus:outline-none font-mono text-lg"
          />

          <button
            onClick={handleCheck}
            disabled={loading || vin.length !== 17}
            className="w-full py-4 bg-[#003366] text-white font-bold rounded-xl shadow-lg hover:bg-[#002244] disabled:bg-gray-300 disabled:cursor-not-allowed active:scale-95 transition-transform"
          >
            {loading ? 'Checking...' : 'CHECK VIN'}
          </button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-green-800">{result}</p>
          </div>
        )}
      </div>

      <div className="bg-[#003366] text-white rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-2">Need Help?</h3>
        <p className="text-sm mb-4">Chat with our AI assistant for compliance questions</p>
        <button
          onClick={onNavigateChat}
          className="w-full py-3 bg-[#00C853] text-white font-bold rounded-xl hover:bg-[#00a844] active:scale-95 transition-transform"
        >
          Open Chat Assistant
        </button>
      </div>

      <div className="text-center">
        <button
          onClick={onInstallApp}
          className="text-[#00C853] font-bold underline"
        >
          Install App for Offline Access
        </button>
      </div>
    </div>
  );
};

export default VinChecker;
