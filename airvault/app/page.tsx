'use client';
import React from "react";
import { useState } from "react";
import {Sidebar} from "./components/Sidebar";
import {Header} from "./components/Header";
import {EmptyState} from "./components/empty-state";

export default function HomePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [files, setFiles] = useState<any[]>([]);
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header viewMode={viewMode} onViewModeChange={setViewMode} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h1 className="text-xl font-semibold text-gray-900 mb-4"></h1>
            {files.length === 0 ? <EmptyState /> : <div className="text-gray-500">Your files will appear here</div>}
          </div>
        </main>
      </div>
    </div>
  )
}
