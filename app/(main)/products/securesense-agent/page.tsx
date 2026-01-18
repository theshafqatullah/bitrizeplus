export default function SecureSenseAgentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
            Stage: Security & Compliance
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">SecureSense Agent</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Security-focused AI agents
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-red-500">•</span>
              <div>
                <strong>Code Vulnerability Scanning</strong>
                <p className="text-muted-foreground">Identifies security vulnerabilities in your codebase</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500">•</span>
              <div>
                <strong>OWASP Compliance Checks</strong>
                <p className="text-muted-foreground">Ensures adherence to OWASP security standards</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500">•</span>
              <div>
                <strong>Data Privacy Audits</strong>
                <p className="text-muted-foreground">Reviews data handling practices for privacy compliance</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500">•</span>
              <div>
                <strong>Pen-testing Simulations</strong>
                <p className="text-muted-foreground">Simulates penetration testing to find security weaknesses</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
