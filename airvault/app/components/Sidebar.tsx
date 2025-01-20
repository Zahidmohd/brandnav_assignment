import { Home, FileText, Share2, Trash2, Star, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "./lib/utils";
import Logo from "../public/Logo.svg";
import Image from "next/image";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}

function NavItem({ href, icon, children, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
        active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
      )}
    >
      {icon}
      {children}
    </Link>
  );
}

export function Sidebar() {
  return (
    <div className="w-56 h-screen bg-white border-r flex flex-col">
      <div className="p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8">
            <Image
              src={Logo} // Replace with the name of your image in the public folder
              alt="AirVault Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg font-semibold text-gray-700">AirVault</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <NavItem href="/" icon={<Home className="w-4 h-4" />} active>
            Home
          </NavItem>
          <NavItem href="/my-files" icon={<FileText className="w-4 h-4" />}>
            My files
          </NavItem>
          <NavItem href="/shared" icon={<Share2 className="w-4 h-4" />}>
            Shared with me
          </NavItem>
          <NavItem href="/deleted" icon={<Trash2 className="w-4 h-4" />}>
            Deleted files
          </NavItem>
        </nav>

        {/* Quick Access */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Quick access</span>
            <button className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100">
              <span className="text-xl leading-none text-gray-400">+</span>
            </button>
          </div>
          <nav className="space-y-1">
            <NavItem href="/starred" icon={<Star className="w-4 h-4" />}>
              Starred
            </NavItem>
            <NavItem href="/custom" icon={<Users className="w-4 h-4" />}>
              Custom
            </NavItem>
          </nav>
        </div>

        {/* Storage Section */}
        <div className="mt-auto pt-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Storage</span>
              <span className="text-xs text-gray-500">250 GB left</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
