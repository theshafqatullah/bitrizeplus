export default function AutoDevOpsAgentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            Stage: CI/CD & Infrastructure
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">AutoDevOps Agent</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Automates infrastructure and deployment
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span>
              <div>
                <strong>Cloud Setup (AWS, GCP, Azure)</strong>
                <p className="text-muted-foreground">Configures cloud infrastructure across major providers</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span>
              <div>
                <strong>Docker & Kubernetes Agent</strong>
                <p className="text-muted-foreground">Containerizes applications and orchestrates deployments</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span>
              <div>
                <strong>CI/CD Pipeline Generation</strong>
                <p className="text-muted-foreground">Creates automated build, test, and deployment pipelines</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span>
              <div>
                <strong>Rollback & Uptime Monitoring</strong>
                <p className="text-muted-foreground">Ensures system reliability with automatic rollbacks and monitoring</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
