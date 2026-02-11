import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
    title: "Política de Cookies | Kipo",
    description:
        "Política de cookies y tecnologías de rastreo de Kipo.",
};

export default function CookiesPage() {
    return (
        <LegalLayout
            title="Política de Cookies y Tecnologías de Rastreo"
            lastUpdated="10 de febrero de 2026"
        >
            <div className="prose-legal">
                <p>
                    Esta Política de Cookies explica cómo Kipo utiliza
                    tecnologías de rastreo y almacenamiento de datos en la
                    aplicación móvil y el sitio web.
                </p>

                <h2>1. ¿Qué son las Cookies y Tecnologías de Rastreo?</h2>
                <p>
                    Las cookies son pequeños archivos de texto que se almacenan en
                    tu dispositivo cuando visitas un sitio web. En aplicaciones
                    móviles, utilizamos tecnologías similares como almacenamiento
                    local para guardar preferencias y datos de sesión.
                </p>

                <h2>2. Tecnologías que Utilizamos</h2>

                <h3>2.1 En la Aplicación Móvil (iOS/Android)</h3>

                <h4>AsyncStorage</h4>
                <ul>
                    <li>
                        <strong>Qué es:</strong> Sistema de almacenamiento local no
                        cifrado
                    </li>
                    <li>
                        <strong>Qué almacena:</strong> Preferencias de configuración
                        de la app (idioma, notificaciones, tema)
                    </li>
                    <li>
                        <strong>Finalidad:</strong> Recordar tus preferencias entre
                        sesiones
                    </li>
                    <li>
                        <strong>Duración:</strong> Hasta que desinstalas la app o
                        borras los datos de la app
                    </li>
                    <li>
                        <strong>Necesaria:</strong> Sí, para el funcionamiento básico
                    </li>
                </ul>

                <h4>SecureStore (iOS Keychain / Android Keystore)</h4>
                <ul>
                    <li>
                        <strong>Qué es:</strong> Sistema de almacenamiento cifrado
                        del sistema operativo
                    </li>
                    <li>
                        <strong>Qué almacena:</strong> Token de autenticación (JWT),
                        credenciales de sesión
                    </li>
                    <li>
                        <strong>Finalidad:</strong> Mantener tu sesión activa de
                        forma segura
                    </li>
                    <li>
                        <strong>Duración:</strong> Hasta que cierres sesión o
                        elimines tu cuenta
                    </li>
                    <li>
                        <strong>Necesaria:</strong> Sí, para autenticación
                    </li>
                </ul>

                <h4>Expo Push Token</h4>
                <ul>
                    <li>
                        <strong>Qué es:</strong> Identificador único de tu
                        dispositivo para notificaciones
                    </li>
                    <li>
                        <strong>Qué almacena:</strong> Token del servicio de
                        notificaciones push de Expo
                    </li>
                    <li>
                        <strong>Finalidad:</strong> Enviarte recordatorios y
                        notificaciones
                    </li>
                    <li>
                        <strong>Duración:</strong> Hasta que desactives las
                        notificaciones o desinstalas la app
                    </li>
                    <li>
                        <strong>Necesaria:</strong> No, puedes desactivar
                        notificaciones en la configuración
                    </li>
                </ul>

                <h3>2.2 En el Sitio Web (kipo.app)</h3>

                <h4>Cookies Esenciales</h4>
                <p>
                    El sitio web de Kipo utiliza cookies mínimas necesarias para
                    su funcionamiento:
                </p>
                <ul>
                    <li>
                        <strong>Cookies de sesión:</strong> Para mantener tu sesión
                        activa mientras navegas (si aplica)
                    </li>
                    <li>
                        <strong>Cookies de preferencias:</strong> Para recordar tus
                        preferencias de visualización
                    </li>
                </ul>

                <h4>Cookies Analíticas (si aplica)</h4>
                <p>
                    Podemos utilizar servicios de análisis web (como Google
                    Analytics o Vercel Analytics) para entender cómo los usuarios
                    interactúan con nuestro sitio web:
                </p>
                <ul>
                    <li>
                        <strong>Finalidad:</strong> Mejorar la experiencia del sitio
                        web
                    </li>
                    <li>
                        <strong>Datos recopilados:</strong> Páginas visitadas,
                        tiempo de navegación, ubicación geográfica aproximada
                        (ciudad/país), tipo de dispositivo
                    </li>
                    <li>
                        <strong>Terceros:</strong> Google LLC / Vercel Inc.
                    </li>
                    <li>
                        <strong>Necesaria:</strong> No, puedes rechazarlas
                    </li>
                </ul>

                <h2>3. Finalidades del Uso de Cookies</h2>
                <p>Utilizamos cookies y tecnologías de rastreo para:</p>
                <ul>
                    <li>
                        <strong>Autenticación:</strong> Verificar tu identidad y
                        mantener tu sesión activa
                    </li>
                    <li>
                        <strong>Seguridad:</strong> Proteger tu cuenta contra accesos
                        no autorizados
                    </li>
                    <li>
                        <strong>Funcionalidad:</strong> Recordar tus preferencias y
                        configuraciones
                    </li>
                    <li>
                        <strong>Notificaciones:</strong> Enviarte recordatorios sobre
                        tus tarjetas de crédito y metas de ahorro
                    </li>
                    <li>
                        <strong>Análisis:</strong> Entender cómo usas la app para
                        mejorarla (datos agregados y anónimos)
                    </li>
                </ul>

                <h2>4. Cookies de Terceros</h2>
                <p>Kipo utiliza servicios de terceros que pueden establecer sus propias cookies:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Tercero</th>
                            <th>Finalidad</th>
                            <th>Política de Privacidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Supabase</td>
                            <td>Autenticación y base de datos</td>
                            <td>
                                <a
                                    href="https://supabase.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    supabase.com/privacy
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Expo</td>
                            <td>Notificaciones push</td>
                            <td>
                                <a
                                    href="https://expo.dev/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    expo.dev/privacy
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Vercel (hosting web)</td>
                            <td>Análisis web básico</td>
                            <td>
                                <a
                                    href="https://vercel.com/legal/privacy-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    vercel.com/legal/privacy-policy
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2>5. Cómo Gestionar las Cookies</h2>

                <h3>5.1 En la Aplicación Móvil</h3>
                <p>
                    <strong>Desactivar notificaciones push:</strong>
                </p>
                <ul>
                    <li>
                        iOS: Ajustes {">"} Kipo {">"} Notificaciones {">"} Desactivar
                    </li>
                    <li>
                        Android: Ajustes {">"} Aplicaciones {">"} Kipo {">"} Notificaciones {">"} Desactivar
                    </li>
                </ul>

                <p>
                    <strong>Borrar datos almacenados localmente:</strong>
                </p>
                <ul>
                    <li>
                        iOS: Ajustes {">"} General {">"} Almacenamiento de iPhone {">"} Kipo {">"} Eliminar app
                    </li>
                    <li>
                        Android: Ajustes {">"} Aplicaciones {">"} Kipo {">"} Almacenamiento {">"} Borrar datos
                    </li>
                </ul>

                <h3>5.2 En el Sitio Web</h3>
                <p>
                    Puedes controlar las cookies del sitio web mediante la
                    configuración de tu navegador:
                </p>
                <ul>
                    <li>
                        <strong>Chrome:</strong> Configuración {">"} Privacidad y
                        seguridad {">"} Cookies
                    </li>
                    <li>
                        <strong>Safari:</strong> Preferencias {">"} Privacidad {">"} Administrar datos de sitios web
                    </li>
                    <li>
                        <strong>Firefox:</strong> Opciones {">"} Privacidad y
                        seguridad {">"} Cookies
                    </li>
                </ul>

                <p>
                    <strong>Nota:</strong> Deshabilitar cookies esenciales puede
                    afectar el funcionamiento del sitio web.
                </p>

                <h2>6. Cookies No Utilizadas</h2>
                <p>Kipo <strong>NO</strong> utiliza:</p>
                <ul>
                    <li>
                        <strong>Cookies publicitarias:</strong> No mostramos
                        publicidad de terceros
                    </li>
                    <li>
                        <strong>Cookies de redes sociales:</strong> No integramos
                        botones de compartir de redes sociales que rastreen tu
                        actividad
                    </li>
                    <li>
                        <strong>Cookies de perfilado:</strong> No creamos perfiles
                        de usuario para marketing
                    </li>
                </ul>

                <h2>7. Duración de las Cookies</h2>

                <h3>7.1 Cookies de Sesión</h3>
                <p>
                    Se eliminan automáticamente cuando cierras la app o el
                    navegador.
                </p>

                <h3>7.2 Cookies Persistentes</h3>
                <p>
                    Permanecen en tu dispositivo durante un período específico:
                </p>
                <ul>
                    <li>
                        <strong>Token de autenticación:</strong> 30 días (renovable
                        automáticamente)
                    </li>
                    <li>
                        <strong>Preferencias:</strong> Hasta que borres los datos de
                        la app
                    </li>
                    <li>
                        <strong>Token de push:</strong> Hasta que desactives
                        notificaciones
                    </li>
                </ul>

                <h2>8. Transferencias Internacionales</h2>
                <p>
                    Algunos de los servicios de terceros que utilizamos están
                    ubicados fuera de México (principalmente en Estados Unidos).
                    Al aceptar esta política, consientes la transferencia
                    internacional de datos necesaria para el funcionamiento de
                    estos servicios.
                </p>

                <h2>9. Actualizaciones de esta Política</h2>
                <p>
                    Podemos actualizar esta Política de Cookies ocasionalmente. Te
                    notificaremos de cambios significativos mediante un aviso en
                    la app o el sitio web.
                </p>
                <p>
                    <strong>Última actualización:</strong> 10 de febrero de 2026
                </p>

                <h2>10. Más Información</h2>
                <p>
                    Para más información sobre cómo tratamos tus datos personales,
                    consulta nuestro{" "}
                    <a href="/privacidad">Aviso de Privacidad</a>.
                </p>

                <h2>11. Contacto</h2>
                <p>
                    Si tienes preguntas sobre el uso de cookies y tecnologías de
                    rastreo, contáctanos:
                </p>
                <ul>
                    <li>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:privacidad@kipo.app">
                            privacidad@kipo.app
                        </a>
                    </li>
                    <li>
                        <strong>Sitio web:</strong>{" "}
                        <a href="https://kipo.app">https://kipo.app</a>
                    </li>
                </ul>

                <hr className="my-12 border-zinc-800" />

                <p className="text-sm text-zinc-500">
                    Al continuar usando Kipo, aceptas el uso de cookies y
                    tecnologías de rastreo conforme a esta política.
                </p>
            </div>
        </LegalLayout>
    );
}
