import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Bitrize Plus",
    description: "Read the terms and conditions governing your use of Bitrize Plus services.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
                <div className="container relative mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Terms of Service
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
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Bitrize Plus, Inc. (&quot;Bitrize Plus,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) governing your access to and use of our AI-powered software development platform, including all associated services, features, content, and applications (collectively, the &quot;Services&quot;).
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
                                </p>
                            </div>

                            {/* Eligibility */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You must be at least 16 years of age to use our Services. By using the Services, you represent and warrant that you meet this requirement and have the legal capacity to enter into these Terms. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
                                </p>
                            </div>

                            {/* Account Registration */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. Account Registration</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    To access certain features of our Services, you must create an account. When registering, you agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Provide accurate, current, and complete information</li>
                                    <li>Maintain and promptly update your account information</li>
                                    <li>Keep your password secure and confidential</li>
                                    <li>Accept responsibility for all activities under your account</li>
                                    <li>Notify us immediately of any unauthorized access or security breach</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our sole discretion.
                                </p>
                            </div>

                            {/* Services Description */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. Description of Services</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Bitrize Plus provides an AI-powered platform that assists with various stages of software development, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Idea validation and market analysis (IdeaForge AI)</li>
                                    <li>Requirements and specification generation (SpecGen Agent)</li>
                                    <li>UI/UX design recommendations (UXMind Agent)</li>
                                    <li>Code generation and assistance (CodePilot AI)</li>
                                    <li>DevOps automation (AutoDevOps Agent)</li>
                                    <li>Testing and quality assurance (TestGuard AI)</li>
                                    <li>Security analysis (SecureSense Agent)</li>
                                    <li>Deployment and launch support (LaunchMate AI)</li>
                                    <li>Infrastructure scaling (ScaleOps Agent)</li>
                                    <li>Product analytics and optimization (ProductBrain AI)</li>
                                </ul>
                            </div>

                            {/* Subscription and Payment */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. Subscription and Payment</h2>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Pricing and Plans</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our Services are offered under various subscription plans as described on our pricing page. Prices are subject to change with reasonable notice. We offer both monthly and annual billing options.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Billing</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis. Subscription fees are billed in advance and are non-refundable except as expressly stated in these Terms or required by law.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Free Trial</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may offer free trials for certain plans. At the end of the trial period, your subscription will automatically convert to a paid plan unless you cancel before the trial ends.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.4 Cancellation</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period. You will retain access to paid features until then.
                                </p>
                            </div>

                            {/* User Content */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">6. User Content and Intellectual Property</h2>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.1 Your Content</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    You retain ownership of all content, code, data, and materials you upload, create, or input into our Services (&quot;User Content&quot;). By using our Services, you grant us a limited license to process, store, and display your User Content solely to provide the Services.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.2 Generated Content</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Content generated by our AI tools based on your inputs (&quot;Generated Content&quot;) is owned by you, subject to any underlying third-party rights. You are responsible for reviewing and ensuring the appropriateness of Generated Content before use.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.3 Our Intellectual Property</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Bitrize Plus and its licensors retain all rights to the Services, including software, algorithms, AI models, trademarks, and other intellectual property. These Terms do not grant you any rights to our intellectual property except for the limited license to use the Services.
                                </p>
                            </div>

                            {/* Acceptable Use */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">7. Acceptable Use Policy</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    You agree not to use the Services to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                                    <li>Generate malicious code, malware, or content intended to harm systems or users</li>
                                    <li>Attempt to reverse engineer, decompile, or extract our AI models or algorithms</li>
                                    <li>Use automated methods to access the Services beyond intended API usage</li>
                                    <li>Share your account credentials or allow unauthorized access</li>
                                    <li>Interfere with or disrupt the Services or our infrastructure</li>
                                    <li>Generate content that is illegal, harmful, abusive, or infringes on others&apos; rights</li>
                                    <li>Circumvent usage limits, rate limiting, or access controls</li>
                                    <li>Use the Services to develop competing AI products without our written consent</li>
                                </ul>
                            </div>

                            {/* AI Disclaimer */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">8. AI-Generated Content Disclaimer</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our AI tools are designed to assist with software development but are not infallible. Generated Content may contain errors, inaccuracies, or security vulnerabilities. You acknowledge that:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                                    <li>AI-generated code and content should be reviewed before production use</li>
                                    <li>We do not guarantee the accuracy, completeness, or fitness of Generated Content</li>
                                    <li>You are solely responsible for testing and validating all outputs</li>
                                    <li>Security recommendations are advisory and do not guarantee protection</li>
                                    <li>AI suggestions should complement, not replace, professional judgment</li>
                                </ul>
                            </div>

                            {/* Limitation of Liability */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, BITRIZE PLUS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                                </p>
                            </div>

                            {/* Warranty Disclaimer */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">10. Warranty Disclaimer</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                                </p>
                            </div>

                            {/* Indemnification */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">11. Indemnification</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You agree to indemnify, defend, and hold harmless Bitrize Plus and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
                                </p>
                            </div>

                            {/* Termination */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may suspend or terminate your access to the Services at any time for violation of these Terms or for any other reason with or without notice. Upon termination, your right to use the Services will immediately cease. Provisions that by their nature should survive termination will remain in effect.
                                </p>
                            </div>

                            {/* Governing Law */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law and Dispute Resolution</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    These Terms shall be governed by the laws of England and Wales. Any disputes arising from these Terms shall be resolved through binding arbitration in London, United Kingdom, except that either party may seek injunctive relief in court for intellectual property violations.
                                </p>
                            </div>

                            {/* Changes to Terms */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may modify these Terms at any time. We will notify you of material changes by posting the updated Terms and revising the &quot;Last updated&quot; date. Your continued use of the Services after changes constitutes acceptance of the new Terms.
                                </p>
                            </div>

                            {/* Miscellaneous */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">15. Miscellaneous</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong className="text-foreground">Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Bitrize Plus.</li>
                                    <li><strong className="text-foreground">Severability:</strong> If any provision is found unenforceable, the remaining provisions will continue in effect.</li>
                                    <li><strong className="text-foreground">Waiver:</strong> Our failure to enforce any right does not constitute a waiver of that right.</li>
                                    <li><strong className="text-foreground">Assignment:</strong> You may not assign these Terms without our consent. We may assign our rights and obligations freely.</li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">16. Contact Information</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    For questions about these Terms, please contact us:
                                </p>
                                <div className="mt-4 p-6 rounded-lg bg-card border border-border">
                                    <p className="text-foreground font-semibold">Bitrize Plus, Inc.</p>
                                    <p className="text-muted-foreground mt-2">Email: legal@bitrizeplus.dev</p>
                                    <p className="text-muted-foreground">Address: 7 Dove Ln, Potters Bar EN6 2SG, United Kingdom</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
