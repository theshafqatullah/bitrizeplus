export default function CodePilotAIPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
            Stage: Development
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">CodePilot AI</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Multi-agent coding system
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-500">•</span>
              <div>
                <strong>Frontend Agent (React / RN / Next.js)</strong>
                <p className="text-muted-foreground">Builds modern, responsive frontend applications with React ecosystem</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">•</span>
              <div>
                <strong>Backend Agent (Node, Python, Java)</strong>
                <p className="text-muted-foreground">Develops scalable backend services in multiple languages</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">•</span>
              <div>
                <strong>API & DB Design Agent</strong>
                <p className="text-muted-foreground">Designs RESTful/GraphQL APIs and optimized database schemas</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">•</span>
              <div>
                <strong>Code Refactor & Optimization Agent</strong>
                <p className="text-muted-foreground">Improves code quality, performance, and maintainability</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
