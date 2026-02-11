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
        <section className="relative min-h-screen flex items-center justify-center animated-gradient-bg pt-20">
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
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Tu compañero
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                                className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
                            >
                                financiero
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                            >
                                inteligente
                            </motion.span>
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

                        {/* CTA Buttons - Enhanced with animations */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group"
                            >
                                {/* Animated glow behind button */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-white to-zinc-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                                <Button
                                    size="lg"
                                    onClick={scrollToWaitlist}
                                    className="relative bg-white hover:bg-zinc-100 text-black text-base px-8 h-14 font-medium rounded-full shadow-xl"
                                >
                                    Únete a la lista de espera
                                    <motion.div
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </motion.div>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - iPhone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotateY: 0,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            opacity: { delay: 0.6, duration: 1.2 },
                            scale: { delay: 0.6, duration: 1.2, type: "spring", stiffness: 100 },
                            rotateY: { delay: 0.6, duration: 1.2 },
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="relative hidden lg:flex justify-center items-center py-8"
                        style={{ perspective: "2000px" }}
                    >
                        <div className="relative w-full flex justify-center">
                            {/* Animated multi-layer glow effects */}
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                {/* Primary pulsing glow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.4, 0.6, 0.4]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute w-[600px] h-[600px] bg-gradient-to-r from-white/10 to-zinc-500/20 rounded-full blur-3xl"
                                />

                                {/* Secondary rotating glow */}
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        scale: [1.2, 1, 1.2]
                                    }}
                                    transition={{
                                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-zinc-400/10 via-transparent to-white/10 rounded-full blur-2xl"
                                />
                            </div>

                            {/* iPhone mockup with enhanced 3D effect */}
                            <motion.div
                                className="relative"
                                whileHover={{
                                    scale: 1.03,
                                    rotateY: 5,
                                    transition: { duration: 0.3 }
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >

                                <Image
                                    src="/frames/home-mockup.png"
                                    alt="Kipo App Preview"
                                    width={1419}
                                    height={2796}
                                    className="w-auto h-[80vh] max-w-full object-contain relative z-10"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
