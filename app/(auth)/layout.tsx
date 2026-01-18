import Link from "next/link";
import HorizontalLogo from "@/components/shared/HorizontalLogo";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex">
            {/* Left side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative z-10 flex flex-col justify-between p-12 w-full">
                    <Link href="/" className="flex items-center">
                        <HorizontalLogo className="h-10 w-auto text-foreground" />
                    </Link>

                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">
                            Build Better Software, <span className="text-primary">10x Faster</span>
                        </h1>
                        <p className="mt-4 text-muted-foreground">
                            The complete AI-powered software development lifecycle platform.
                            From ideation to continuous improvement, our intelligent agents
                            automate every stage of your product journey.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                                    ✓
                                </div>
                                <span className="text-sm">10 specialized AI agents</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                                    ✓
                                </div>
                                <span className="text-sm">Complete SDLC automation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                                    ✓
                                </div>
                                <span className="text-sm">14-day free trial</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        © 2026 Bitrize Plus. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Right side - Auth Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile logo */}
                    <div className="lg:hidden mb-8 text-center">
                        <Link href="/" className="inline-flex items-center">
                            <HorizontalLogo className="h-10 w-auto text-foreground" />
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
