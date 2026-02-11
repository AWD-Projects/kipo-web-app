"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800 py-12 bg-black">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4">
                            <Image
                                src="/kipo_logo.svg"
                                alt="Kipo"
                                width={150}
                                height={150}
                                className="h-12 w-auto"
                            />
                        </div>
                        <p className="text-zinc-400 max-w-md mb-6">
                            Tu compañero financiero inteligente. La forma simple
                            de seguir tus gastos, crear presupuestos y alcanzar
                            tus metas financieras.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            Producto
                        </h4>
                        <ul className="space-y-2 text-zinc-400">
                            <li>
                                <a
                                    href="#caracteristicas"
                                    className="hover:text-white transition-colors"
                                >
                                    Características
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#beneficios"
                                    className="hover:text-white transition-colors"
                                >
                                    Beneficios
                                </a>
                            </li>
                            <li>
                                <span className="text-zinc-600">
                                    Precios (próximamente)
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Comunidad */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-zinc-400 mb-6">
                            <li>
                                <Link
                                    href="/terminos"
                                    className="hover:text-white transition-colors"
                                >
                                    Términos y Condiciones
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacidad"
                                    className="hover:text-white transition-colors"
                                >
                                    Aviso de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookies"
                                    className="hover:text-white transition-colors"
                                >
                                    Política de Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-800 flex items-center justify-center gap-4">
                    <p className="text-sm text-zinc-500">
                        © {currentYear} Kipo. Todos los derechos reservados.
                    </p>
                    <p className="text-sm text-zinc-400">
                        Powered by{" "}
                        <a
                            href="https://www.amoxtli.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white hover:text-zinc-300 transition-colors"
                        >
                            Amoxtli
                            <span className="text-xs ml-0.5">®</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
