import { Upload } from "lucide-react"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] text-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to AirVault</h1>
      <p className="text-gray-500 mb-8">
        Drag your files and folders here or use the <span className="text-blue-500 font-medium">"Upload"</span> button
      </p>
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        <Upload className="w-8 h-8 text-blue-500" />
      </div>
    </div>
  )
}

