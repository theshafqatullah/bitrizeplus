export default function SpecGenAgentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            Stage: Requirements & Planning
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">SpecGen Agent</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Converts ideas into technical & business specs
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-500">•</span>
              <div>
                <strong>PRD & SRS Generation</strong>
                <p className="text-muted-foreground">Creates comprehensive Product Requirements Documents and Software Requirements Specifications</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500">•</span>
              <div>
                <strong>User Stories & Acceptance Criteria</strong>
                <p className="text-muted-foreground">Generates detailed user stories with clear acceptance criteria</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500">•</span>
              <div>
                <strong>Tech Stack Recommendation</strong>
                <p className="text-muted-foreground">Suggests optimal technology stack based on project requirements</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500">•</span>
              <div>
                <strong>Timeline & Cost Estimation</strong>
                <p className="text-muted-foreground">Provides realistic project timelines and budget estimates</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
