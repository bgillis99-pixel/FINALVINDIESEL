export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Carb Clean Truck Check
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Truck compliance and cleanliness verification system
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Your Application
            </h2>
            <p className="text-gray-600 mb-6">
              This is your deployed Next.js application on Vercel.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Quick Check</h3>
                <p className="text-gray-600 text-sm">
                  Fast verification for truck compliance
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Reports</h3>
                <p className="text-gray-600 text-sm">
                  View and manage inspection reports
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Track compliance trends and data
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-green-800 font-medium">
              ✓ Successfully deployed to Vercel
            </p>
            <p className="text-green-600 text-sm mt-2">
              Your domain carbcleantruckcheck.app is ready to be configured
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
