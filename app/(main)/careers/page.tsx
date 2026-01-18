const openings = [
  {
    department: "Engineering",
    positions: [
      {
        title: "Senior AI Engineer",
        location: "San Francisco, CA / Remote",
        type: "Full-time",
      },
      {
        title: "Full Stack Developer",
        location: "San Francisco, CA / Remote",
        type: "Full-time",
      },
      {
        title: "DevOps Engineer",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "Machine Learning Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
      },
    ],
  },
  {
    department: "Product",
    positions: [
      {
        title: "Senior Product Manager",
        location: "San Francisco, CA / Remote",
        type: "Full-time",
      },
      {
        title: "UX Designer",
        location: "Remote",
        type: "Full-time",
      },
    ],
  },
  {
    department: "Sales & Marketing",
    positions: [
      {
        title: "Account Executive",
        location: "New York, NY",
        type: "Full-time",
      },
      {
        title: "Content Marketing Manager",
        location: "Remote",
        type: "Full-time",
      },
    ],
  },
];

const perks = [
  {
    title: "Competitive Compensation",
    description: "Top-tier salary, equity, and performance bonuses",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance",
  },
  {
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours",
  },
  {
    title: "Learning Budget",
    description: "$2,000 annual budget for courses and conferences",
  },
  {
    title: "Unlimited PTO",
    description: "Take the time you need to recharge",
  },
  {
    title: "Equipment",
    description: "Latest MacBook Pro and home office stipend",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us build the future of AI-powered software development. We're looking for talented individuals who want to make an impact.
          </p>
        </div>

        {/* Culture Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
            <p className="leading-relaxed">
              At Bitrize Plus, we believe in fostering an environment where creativity thrives, 
              diverse perspectives are valued, and everyone has the opportunity to grow. We're 
              building something extraordinary, and we want you to be part of it.
            </p>
          </div>
        </div>

        {/* Perks Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black dark:text-white">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  {perk.title}
                </h3>
                <p className="text-sm text-muted-foreground">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black dark:text-white">
            Open Positions
          </h2>
          <div className="space-y-8">
            {openings.map((dept) => (
              <div key={dept.department}>
                <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                  {dept.department}
                </h3>
                <div className="space-y-3">
                  {dept.positions.map((position) => (
                    <div
                      key={position.title}
                      className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div>
                        <h4 className="font-semibold text-black dark:text-white">
                          {position.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {position.location} • {position.type}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Don't see a position that fits? We're always looking for talented people.
          </p>
          <button className="px-8 py-3 border border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            Send General Application
          </button>
        </div>
      </main>
    </div>
  );
}
