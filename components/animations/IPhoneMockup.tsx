"use client";

import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface IPhoneMockupProps {
    children?: ReactNode;
    className?: string;
    animate?: boolean;
    screenshot?:
        | "dashboard"
        | "transactions"
        | "budgets"
        | "goals"
        | "coach"
        | "cards";
    imageSrc?: string;
}

export function IPhoneMockup({
    children,
    className = "",
    animate = true,
    screenshot,
    imageSrc,
}: IPhoneMockupProps) {
    const MotionDiv = animate ? motion.div : "div";
    const animationProps = animate
        ? {
              animate: { y: [0, -20, 0] },
              transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: easeInOut,
              },
          }
        : {};

    // Screenshot content based on type
    const getScreenshotContent = () => {
        switch (screenshot) {
            case "dashboard":
                return (
                    <div className="p-6 space-y-4">
                        {/* Balance Card */}
                        <div className="glass rounded-2xl p-6 space-y-3">
                            <div className="h-3 bg-zinc-700 rounded w-24" />
                            <div className="h-8 bg-zinc-700 rounded w-40" />
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div className="h-3 bg-zinc-700 rounded" />
                                <div className="h-3 bg-zinc-700 rounded" />
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-2">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="glass rounded-xl p-3 space-y-2"
                                >
                                    <div className="h-2 bg-zinc-700 rounded w-full" />
                                    <div className="h-4 bg-zinc-700 rounded w-12" />
                                </div>
                            ))}
                        </div>

                        {/* Recent Transactions */}
                        <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="glass rounded-xl p-3 flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-full bg-zinc-700" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-3 bg-zinc-700 rounded w-24" />
                                        <div className="h-2 bg-zinc-700 rounded w-16" />
                                    </div>
                                    <div className="h-4 bg-zinc-700 rounded w-12" />
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "transactions":
                return (
                    <div className="p-6 space-y-4">
                        <div className="h-8 bg-zinc-800 rounded-lg w-40" />
                        <div className="space-y-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="glass rounded-xl p-4 flex items-center gap-3"
                                >
                                    <div className="w-12 h-12 rounded-full bg-zinc-700" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-3 bg-zinc-700 rounded w-32" />
                                        <div className="h-2 bg-zinc-700 rounded w-20" />
                                    </div>
                                    <div className="h-4 bg-zinc-700 rounded w-16" />
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "budgets":
                return (
                    <div className="p-6 space-y-4">
                        <div className="h-8 bg-zinc-800 rounded-lg w-36" />
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="glass rounded-xl p-4 space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="h-3 bg-zinc-700 rounded w-24" />
                                        <div className="h-3 bg-zinc-700 rounded w-16" />
                                    </div>
                                    <div className="h-2 bg-zinc-800 rounded-full w-full">
                                        <div
                                            className="h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                                            style={{ width: `${60 + i * 10}%` }}
                                        />
                                    </div>
                                    <div className="h-2 bg-zinc-700 rounded w-20" />
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "goals":
                return (
                    <div className="p-6 space-y-4">
                        <div className="h-8 bg-zinc-800 rounded-lg w-44" />
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="glass rounded-2xl p-5 space-y-3"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-2">
                                            <div className="h-4 bg-zinc-700 rounded w-32" />
                                            <div className="h-2 bg-zinc-700 rounded w-24" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-zinc-700" />
                                    </div>
                                    <div className="h-2 bg-zinc-800 rounded-full w-full">
                                        <div
                                            className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                            style={{ width: `${40 + i * 20}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="h-2 bg-zinc-700 rounded w-16" />
                                        <div className="h-2 bg-zinc-700 rounded w-16" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "coach":
                return (
                    <div className="p-6 space-y-4">
                        <div className="h-8 bg-zinc-800 rounded-lg w-32" />
                        <div className="space-y-3">
                            {/* User message */}
                            <div className="flex justify-end">
                                <div className="glass rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                                    <div className="h-2 bg-zinc-700 rounded w-32 mb-2" />
                                    <div className="h-2 bg-zinc-700 rounded w-24" />
                                </div>
                            </div>

                            {/* AI response */}
                            <div className="flex justify-start">
                                <div className="glass rounded-2xl rounded-tl-sm p-3 max-w-[80%] space-y-2">
                                    <div className="h-2 bg-zinc-700 rounded w-full" />
                                    <div className="h-2 bg-zinc-700 rounded w-full" />
                                    <div className="h-2 bg-zinc-700 rounded w-28" />
                                </div>
                            </div>

                            {/* User message */}
                            <div className="flex justify-end">
                                <div className="glass rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                                    <div className="h-2 bg-zinc-700 rounded w-28" />
                                </div>
                            </div>

                            {/* AI response */}
                            <div className="flex justify-start">
                                <div className="glass rounded-2xl rounded-tl-sm p-3 max-w-[80%] space-y-2">
                                    <div className="h-2 bg-zinc-700 rounded w-full" />
                                    <div className="h-2 bg-zinc-700 rounded w-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "cards":
                return (
                    <div className="p-6 space-y-4">
                        <div className="h-8 bg-zinc-800 rounded-lg w-48" />
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="glass rounded-2xl p-5 space-y-4 bg-gradient-to-br from-zinc-800 to-zinc-900"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <div className="h-3 bg-zinc-700 rounded w-24" />
                                            <div className="h-2 bg-zinc-700 rounded w-32" />
                                        </div>
                                        <div className="w-10 h-10 rounded-lg bg-zinc-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-zinc-700 rounded w-20" />
                                        <div className="h-4 bg-zinc-700 rounded w-28" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return children;
        }
    };

    return (
        <MotionDiv
            className={`iphone-mockup mx-auto ${className}`}
            {...animationProps}
        >
            {/* Notch */}
            <div className="iphone-notch" />

            {/* Screen Content */}
            <div className="iphone-screen">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt="App Screenshot"
                        fill
                        className="object-cover"
                        priority
                    />
                ) : screenshot ? (
                    getScreenshotContent()
                ) : (
                    children
                )}
            </div>
        </MotionDiv>
    );
}
