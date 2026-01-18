export default function UXMindAgentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
            Stage: Design
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">UXMind Agent</h1>
        <p className="text-xl text-muted-foreground mb-8">
          AI agents that design product experiences
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-pink-500">•</span>
              <div>
                <strong>User Flow Generation</strong>
                <p className="text-muted-foreground">Creates intuitive user journey maps and flow diagrams</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500">•</span>
              <div>
                <strong>Wireframes (Figma-ready)</strong>
                <p className="text-muted-foreground">Generates wireframes that can be directly imported into Figma</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500">•</span>
              <div>
                <strong>UX Improvement Suggestions</strong>
                <p className="text-muted-foreground">Provides actionable recommendations to enhance user experience</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500">•</span>
              <div>
                <strong>Accessibility & Usability Checks</strong>
                <p className="text-muted-foreground">Ensures designs meet accessibility standards and usability best practices</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
