export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-900">
          🚀 FunnelForge
        </h1>
        <p className="text-2xl text-gray-600 max-w-2xl">
          Production-Ready Multi-Tenant SaaS Platform
        </p>
        <p className="text-lg text-gray-500 max-w-xl">
          Build high-converting funnels, host courses, and grow your business with our all-in-one platform.
        </p>
        
        <div className="flex gap-4 justify-center mt-8">
          <a
            href="/login"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://github.com/itskiranbabu/funnelforge"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="font-semibold text-lg mb-2">Page Builder</h3>
            <p className="text-gray-600 text-sm">Drag-and-drop visual editor with pre-built blocks</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="font-semibold text-lg mb-2">LMS Platform</h3>
            <p className="text-gray-600 text-sm">Host courses with drip content and certificates</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="font-semibold text-lg mb-2">AI Generation</h3>
            <p className="text-gray-600 text-sm">Generate pages, emails, and marketing copy</p>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>✅ Repository Created | ✅ Code Pushed | 🚀 Ready for Deployment</p>
        </div>
      </div>
    </div>
  );
}