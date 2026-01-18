export default function ProductBrainAIPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">
            Stage: Continuous Improvement
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">ProductBrain AI</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Post-launch decision-making agent
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">•</span>
              <div>
                <strong>User Feedback Analysis</strong>
                <p className="text-muted-foreground">Analyzes user feedback to extract actionable insights</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">•</span>
              <div>
                <strong>Feature Prioritization</strong>
                <p className="text-muted-foreground">Ranks features based on impact, effort, and user demand</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">•</span>
              <div>
                <strong>Churn Prediction</strong>
                <p className="text-muted-foreground">Identifies users at risk of churning and suggests retention strategies</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">•</span>
              <div>
                <strong>Roadmap Auto-updates</strong>
                <p className="text-muted-foreground">Automatically updates product roadmap based on data-driven insights</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
