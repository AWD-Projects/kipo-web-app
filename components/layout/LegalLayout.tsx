import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="pt-32 pb-24">
                <div className="container mx-auto container-padding max-w-4xl">
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="space-y-4 border-b border-zinc-800 pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                {title}
                            </h1>
                            <p className="text-sm text-zinc-500">
                                Última actualización: {lastUpdated}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="prose prose-invert prose-zinc max-w-none">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
