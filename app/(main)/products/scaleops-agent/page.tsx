export default function ScaleOpsAgentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
            Stage: Growth & Scaling
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">ScaleOps Agent</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Performance & scaling intelligence
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-teal-500">•</span>
              <div>
                <strong>Auto-scaling Recommendations</strong>
                <p className="text-muted-foreground">Suggests optimal scaling configurations based on usage patterns</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-500">•</span>
              <div>
                <strong>Cost Optimization Agent</strong>
                <p className="text-muted-foreground">Identifies opportunities to reduce infrastructure costs</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-500">•</span>
              <div>
                <strong>Performance Bottleneck Detection</strong>
                <p className="text-muted-foreground">Identifies and diagnoses performance issues in real-time</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-500">•</span>
              <div>
                <strong>Feature Usage Analytics</strong>
                <p className="text-muted-foreground">Tracks and analyzes how users interact with features</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
