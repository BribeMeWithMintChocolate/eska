export default function DashboardPage() {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg transition">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome to the Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Manage escalations, announcements, and more.</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Escalations</h2>
          <p className="text-2xl">12</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Resolved</h2>
          <p className="text-2xl">45</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-2xl">8</p>
        </div>
      </div>
    </div>
  );
}
