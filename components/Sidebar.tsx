import Link from "next/link";
import { Home, Megaphone, FileText } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5 shadow-lg">
      {/* Logo */}
      <h2 className="text-xl font-bold tracking-wide mb-6">🚀 Escalation System</h2>

      {/* Navigation */}
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-700">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/escalations" className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-700">
              <FileText size={20} />
              <span>Escalations</span>
            </Link>
          </li>
          <li>
            <Link href="/announcements" className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-700">
              <Megaphone size={20} />
              <span>Announcements</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
