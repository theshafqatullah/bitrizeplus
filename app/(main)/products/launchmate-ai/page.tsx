export default function LaunchMateAIPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Stage: Product Launch
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">LaunchMate AI</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Go-to-market automation
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What it does</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-indigo-500">•</span>
              <div>
                <strong>Release Checklist Agent</strong>
                <p className="text-muted-foreground">Creates comprehensive pre-launch checklists to ensure nothing is missed</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500">•</span>
              <div>
                <strong>App Store / Play Store Optimization</strong>
                <p className="text-muted-foreground">Optimizes app listings for maximum visibility and downloads</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500">•</span>
              <div>
                <strong>Landing Page Copy & SEO</strong>
                <p className="text-muted-foreground">Generates compelling copy and optimizes for search engines</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500">•</span>
              <div>
                <strong>Pricing & Monetization Agent</strong>
                <p className="text-muted-foreground">Recommends optimal pricing strategies and monetization models</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
