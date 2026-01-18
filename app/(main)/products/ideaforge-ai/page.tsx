export default function IdeaForgeAIPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            Stage: Ideation
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">IdeaForge AI</h1>
        <p className="text-xl text-muted-foreground mb-8">
          AI agents that turn raw ideas into validated software concepts
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-500">•</span>
              <div>
                <strong>Market Research Agent</strong>
                <p className="text-muted-foreground">Analyzes market trends and opportunities for your idea</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500">•</span>
              <div>
                <strong>Competitor Analysis Agent</strong>
                <p className="text-muted-foreground">Identifies and evaluates competitors in your target space</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500">•</span>
              <div>
                <strong>Feature Suggestion Agent</strong>
                <p className="text-muted-foreground">Recommends features based on market needs and user expectations</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500">•</span>
              <div>
                <strong>Problem–Solution Fit Scoring</strong>
                <p className="text-muted-foreground">Validates how well your solution addresses the target problem</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
