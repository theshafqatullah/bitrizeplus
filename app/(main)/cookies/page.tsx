import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Bitrize Plus",
    description: "Learn how Bitrize Plus uses cookies and similar technologies.",
};

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
                <div className="container relative mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Cookie Policy
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Last updated: January 19, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl">

                        <div className="space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    This Cookie Policy explains how Bitrize Plus (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar technologies on our platform and website.
                                </p>
                            </div>

                            {/* Types of Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>

                                <div className="space-y-6 mt-6">
                                    <div className="p-6 rounded-lg bg-card border border-border">
                                        <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                                        <p className="text-muted-foreground">
                                            These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and session management. You cannot opt out of these cookies as the Services would not work without them.
                                        </p>
                                        <div className="mt-4">
                                            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Examples:</strong></p>
                                            <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground space-y-1">
                                                <li>Session cookies for maintaining your logged-in state</li>
                                                <li>Security cookies for fraud prevention</li>
                                                <li>Load balancing cookies for optimal performance</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-lg bg-card border border-border">
                                        <h3 className="text-xl font-semibold text-foreground mb-3">Functional Cookies</h3>
                                        <p className="text-muted-foreground">
                                            These cookies allow us to remember choices you make and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we use.
                                        </p>
                                        <div className="mt-4">
                                            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Examples:</strong></p>
                                            <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground space-y-1">
                                                <li>Language and region preferences</li>
                                                <li>Theme settings (dark/light mode)</li>
                                                <li>Editor preferences and configurations</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-lg bg-card border border-border">
                                        <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
                                        <p className="text-muted-foreground">
                                            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our Services.
                                        </p>
                                        <div className="mt-4">
                                            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Examples:</strong></p>
                                            <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground space-y-1">
                                                <li>Page views and navigation patterns</li>
                                                <li>Feature usage statistics</li>
                                                <li>Error and performance monitoring</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-lg bg-card border border-border">
                                        <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Cookies</h3>
                                        <p className="text-muted-foreground">
                                            These cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our marketing campaigns.
                                        </p>
                                        <div className="mt-4">
                                            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Examples:</strong></p>
                                            <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground space-y-1">
                                                <li>Ad targeting and retargeting</li>
                                                <li>Campaign performance tracking</li>
                                                <li>Social media sharing features</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cookie Table */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. Specific Cookies We Use</h2>
                                <div className="overflow-x-auto mt-6">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="text-left py-3 px-4 text-foreground font-semibold">Cookie Name</th>
                                                <th className="text-left py-3 px-4 text-foreground font-semibold">Type</th>
                                                <th className="text-left py-3 px-4 text-foreground font-semibold">Duration</th>
                                                <th className="text-left py-3 px-4 text-foreground font-semibold">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground text-sm">
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-mono text-xs">session_id</td>
                                                <td className="py-3 px-4">Essential</td>
                                                <td className="py-3 px-4">Session</td>
                                                <td className="py-3 px-4">Maintains user session</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-mono text-xs">auth_token</td>
                                                <td className="py-3 px-4">Essential</td>
                                                <td className="py-3 px-4">30 days</td>
                                                <td className="py-3 px-4">Authentication</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-mono text-xs">csrf_token</td>
                                                <td className="py-3 px-4">Essential</td>
                                                <td className="py-3 px-4">Session</td>
                                                <td className="py-3 px-4">Security protection</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-mono text-xs">preferences</td>
                                                <td className="py-3 px-4">Functional</td>
                                                <td className="py-3 px-4">1 year</td>
                                                <td className="py-3 px-4">User preferences</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-mono text-xs">_ga</td>
                                                <td className="py-3 px-4">Analytics</td>
                                                <td className="py-3 px-4">2 years</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-mono text-xs">_gid</td>
                                                <td className="py-3 px-4">Analytics</td>
                                                <td className="py-3 px-4">24 hours</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-mono text-xs">cookie_consent</td>
                                                <td className="py-3 px-4">Essential</td>
                                                <td className="py-3 px-4">1 year</td>
                                                <td className="py-3 px-4">Cookie preferences</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Third-Party Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We use services from third parties that may place cookies on your device. These include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                                    <li><strong className="text-foreground">Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                                    <li><strong className="text-foreground">Stripe:</strong> For secure payment processing</li>
                                    <li><strong className="text-foreground">Intercom:</strong> For customer support and communication</li>
                                    <li><strong className="text-foreground">Sentry:</strong> For error monitoring and performance tracking</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    These third parties have their own privacy policies governing their use of cookies. We encourage you to review their policies.
                                </p>
                            </div>

                            {/* Managing Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Browser Settings</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Most web browsers allow you to control cookies through their settings. You can typically:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                                    <li>View and delete cookies stored on your device</li>
                                    <li>Block all cookies or only third-party cookies</li>
                                    <li>Set preferences for specific websites</li>
                                    <li>Receive notifications when cookies are set</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Browser-Specific Instructions</h3>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                                    <li><strong className="text-foreground">Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                                    <li><strong className="text-foreground">Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                                    <li><strong className="text-foreground">Safari:</strong> Preferences → Privacy → Cookies</li>
                                    <li><strong className="text-foreground">Edge:</strong> Settings → Cookies and Site Permissions</li>
                                </ul>

                                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground">Note:</strong> Disabling certain cookies may affect the functionality of our Services. Essential cookies cannot be disabled as they are required for the platform to work properly.
                                    </p>
                                </div>
                            </div>

                            {/* Similar Technologies */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">6. Similar Technologies</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    In addition to cookies, we may use other similar technologies:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                                    <li><strong className="text-foreground">Local Storage:</strong> Stores data locally in your browser for features like offline access and caching</li>
                                    <li><strong className="text-foreground">Session Storage:</strong> Temporary storage that is cleared when you close your browser</li>
                                    <li><strong className="text-foreground">Pixel Tags:</strong> Small images used to track email opens and page visits</li>
                                    <li><strong className="text-foreground">Web Beacons:</strong> Similar to pixel tags, used for analytics purposes</li>
                                </ul>
                            </div>

                            {/* Do Not Track */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">7. Do Not Track Signals</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no universal standard for how websites should respond to DNT signals. We currently do not respond to DNT signals, but you can manage your cookie preferences as described above.
                                </p>
                            </div>

                            {/* Updates */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically.
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have questions about our use of cookies or this policy, please contact us:
                                </p>
                                <div className="mt-4 p-6 rounded-lg bg-card border border-border">
                                    <p className="text-foreground font-semibold">Bitrize Plus, Inc.</p>
                                    <p className="text-muted-foreground mt-2">Email: privacy@bitrizeplus.com</p>
                                    <p className="text-muted-foreground">Address: 100 Innovation Drive, San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
