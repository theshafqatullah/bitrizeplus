import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Bitrize Plus",
    description: "Learn how Bitrize Plus collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
                <div className="container relative mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Privacy Policy
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
                    <div className="mx-auto max-w-3xl prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">

                        <div className="space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    At Bitrize Plus (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered software development platform and related services.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    By accessing or using Bitrize Plus, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 Information You Provide</h3>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong className="text-foreground">Account Information:</strong> Name, email address, password, and profile details when you create an account.</li>
                                    <li><strong className="text-foreground">Payment Information:</strong> Billing address, credit card details, and transaction history (processed securely through our payment providers).</li>
                                    <li><strong className="text-foreground">Project Data:</strong> Code, specifications, requirements, and other content you upload or create using our platform.</li>
                                    <li><strong className="text-foreground">Communications:</strong> Messages, feedback, and support requests you send to us.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2 Information Collected Automatically</h3>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong className="text-foreground">Usage Data:</strong> Features used, actions taken, and time spent on the platform.</li>
                                    <li><strong className="text-foreground">Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                                    <li><strong className="text-foreground">Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience.</li>
                                </ul>
                            </div>

                            {/* How We Use Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We use the information we collect for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Provide, maintain, and improve our AI-powered development tools and services</li>
                                    <li>Process transactions and send related information</li>
                                    <li>Send administrative information, updates, and security alerts</li>
                                    <li>Respond to your comments, questions, and support requests</li>
                                    <li>Train and improve our AI models (with anonymized and aggregated data)</li>
                                    <li>Analyze usage patterns to enhance user experience</li>
                                    <li>Detect, prevent, and address technical issues and security threats</li>
                                    <li>Comply with legal obligations and enforce our terms</li>
                                </ul>
                            </div>

                            {/* Data Sharing */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Share Your Information</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We do not sell your personal information. We may share your information in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong className="text-foreground">Service Providers:</strong> With third-party vendors who perform services on our behalf (hosting, analytics, payment processing).</li>
                                    <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                                    <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
                                    <li><strong className="text-foreground">With Your Consent:</strong> When you explicitly authorize us to share your information.</li>
                                </ul>
                            </div>

                            {/* Data Security */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We implement industry-standard security measures to protect your information, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                                    <li>End-to-end encryption for data in transit and at rest</li>
                                    <li>Regular security audits and penetration testing</li>
                                    <li>Access controls and authentication measures</li>
                                    <li>SOC 2 Type II compliance</li>
                                    <li>GDPR and CCPA compliance frameworks</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
                                </p>
                            </div>

                            {/* Data Retention */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We retain your information for as long as your account is active or as needed to provide services. We may retain certain information for legitimate business purposes or as required by law. You can request deletion of your data at any time by contacting us.
                                </p>
                            </div>

                            {/* Your Rights */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights and Choices</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Depending on your location, you may have the following rights:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong className="text-foreground">Access:</strong> Request a copy of your personal information.</li>
                                    <li><strong className="text-foreground">Correction:</strong> Update or correct inaccurate information.</li>
                                    <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information.</li>
                                    <li><strong className="text-foreground">Portability:</strong> Receive your data in a portable format.</li>
                                    <li><strong className="text-foreground">Opt-out:</strong> Unsubscribe from marketing communications.</li>
                                    <li><strong className="text-foreground">Restrict Processing:</strong> Limit how we use your information.</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    To exercise these rights, please contact us at privacy@bitrizeplus.com.
                                </p>
                            </div>

                            {/* International Transfers */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                                </p>
                            </div>

                            {/* Children's Privacy */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">9. Children&apos;s Privacy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                                </p>
                            </div>

                            {/* Changes */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have questions about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="mt-4 p-6 rounded-lg bg-card border border-border">
                                    <p className="text-foreground font-semibold">Bitrize Plus, Inc.</p>
                                    <p className="text-muted-foreground mt-2">Email: privacy@bitrizeplus.com</p>
                                    <p className="text-muted-foreground">Address: 100 Innovation Drive, San Francisco, CA 94105</p>
                                    <p className="text-muted-foreground">Data Protection Officer: dpo@bitrizeplus.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
