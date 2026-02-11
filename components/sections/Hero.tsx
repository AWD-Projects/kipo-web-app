"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const scrollToWaitlist = () => {
        document
            .querySelector("#waitlist")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="snap-scroll-section relative flex items-center justify-center bg-black pt-20">
            <div className="container mx-auto container-padding relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto overflow-visible">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        {/* Headline - Huge and bold */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
                        >
                            Tu compañero
                            <br />
                            <span className="text-zinc-500">financiero</span>
                            <br />
                            inteligente
                        </motion.h1>

                        {/* Subheadline - Clean and minimal */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Presupuestos inteligentes, metas de ahorro y coach
                            IA.
                        </motion.p>

                        {/* CTA Buttons - Minimal style */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                onClick={scrollToWaitlist}
                                className="bg-white hover:bg-zinc-100 text-black text-base px-8 h-14 font-medium rounded-full"
                            >
                                Únete a la lista de espera
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - iPhone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            opacity: { delay: 0.4, duration: 1 },
                            scale: { delay: 0.4, duration: 1 },
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="relative hidden lg:flex justify-center items-center py-8"
                    >
                        <div className="relative w-full flex justify-center">
                            {/* Glow effect behind iPhone */}
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-[400px] h-[400px] bg-zinc-800/30 rounded-full blur-3xl"></div>
                            </div>

                            {/* iPhone mockup */}
                            <div className="relative">
                                <Image
                                    src="/frames/home-mockup.png"
                                    alt="Kipo App Preview"
                                    width={1419}
                                    height={2796}
                                    className="w-auto h-[80vh] max-w-full object-contain"
                                    style={{
                                        filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.03))'
                                    }}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
