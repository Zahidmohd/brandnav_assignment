import { Search, Upload, FolderPlus, LayoutGrid, List } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import account from "../public/accountname.svg";

interface HeaderProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export function Header({ viewMode, onViewModeChange }: HeaderProps) {
    return (
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          {/* Left Section (Search + Files) */}
          <div className="flex flex-1 flex-col gap-4">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="text" placeholder="Search AirVault" className="pl-10 w-full" />
            </div>
  
            {/* Files Section */}
            <div className="text-xl font-semibold text-gray-900 mb-4">
              All files
            </div>
          </div>
  
          {/* Right Section (Account Image, Upload Buttons, Layout Options) */}
          <div className="flex flex-col items-end gap-2">
            {/* Account Image */}
            <div>
              <Image
                src={account}
                alt="Account"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
  
            {/* Upload and New Folder Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
              <Button variant="outline">
                <FolderPlus className="w-4 h-4 mr-2" />
                New folder
              </Button>
            </div>
  
            {/* View Mode Buttons */}
            <div className="flex items-center gap-1">
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => onViewModeChange("list")}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => onViewModeChange("grid")}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }