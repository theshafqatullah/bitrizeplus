export default function TestGuardAIPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
            Stage: Quality Assurance
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">TestGuard AI</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Autonomous testing agents
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500">•</span>
              <div>
                <strong>Unit & Integration Tests</strong>
                <p className="text-muted-foreground">Generates comprehensive unit and integration test suites</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500">•</span>
              <div>
                <strong>UI/UX Testing</strong>
                <p className="text-muted-foreground">Validates user interface functionality and user experience flows</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500">•</span>
              <div>
                <strong>Load & Stress Testing</strong>
                <p className="text-muted-foreground">Simulates high traffic to identify performance limits</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500">•</span>
              <div>
                <strong>Bug Reproduction & Fix Suggestions</strong>
                <p className="text-muted-foreground">Automatically reproduces bugs and suggests potential fixes</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
