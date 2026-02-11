import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
    title: "Términos y Condiciones | Kipo",
    description:
        "Términos y condiciones de uso de Kipo, tu compañero financiero inteligente.",
};

export default function TerminosPage() {
    return (
        <LegalLayout
            title="Términos y Condiciones"
            lastUpdated="10 de febrero de 2026"
        >
            <div className="prose-legal">
                <p>
                    Bienvenido a Kipo. Al acceder y utilizar nuestra aplicación
                    móvil, aceptas estos Términos y Condiciones en su totalidad.
                    Por favor, léelos cuidadosamente antes de usar nuestros
                    servicios.
                </p>

                <h2>1. Información General</h2>
                <h3>1.1 Responsable del Servicio</h3>
                <p>
                    <strong>Nombre:</strong> [Razón Social a Definir]
                    <br />
                    <strong>Domicilio:</strong> [Domicilio Fiscal a Definir]
                    <br />
                    <strong>RFC:</strong> [RFC a Definir]
                    <br />
                    <strong>Contacto:</strong>{" "}
                    <a href="mailto:soporte@kipo.app">soporte@kipo.app</a>
                </p>

                <h2>2. Descripción del Servicio</h2>
                <p>
                    Kipo es una <strong>herramienta de gestión financiera personal</strong> que
                    permite a los usuarios:
                </p>
                <ul>
                    <li>Rastrear gastos e ingresos de forma manual</li>
                    <li>
                        Crear y gestionar presupuestos mediante el método de
                        sobres virtuales
                    </li>
                    <li>Establecer y monitorear metas de ahorro</li>
                    <li>
                        Registrar y recibir recordatorios de tarjetas de crédito
                        (fecha de corte y pago)
                    </li>
                    <li>
                        Recibir orientación financiera general mediante un Coach
                        impulsado por inteligencia artificial
                    </li>
                    <li>
                        Obtener insights automáticos sobre patrones de gasto y
                        oportunidades de ahorro
                    </li>
                </ul>

                <h2>3. Disclaimers Importantes</h2>

                <h3>3.1 Kipo NO es una Institución Financiera</h3>
                <blockquote>
                    <strong>Importante:</strong> Kipo no es una institución
                    financiera regulada. No estamos regulados ni supervisados por
                    la Comisión Nacional Bancaria y de Valores (CNBV), el Banco
                    de México (Banxico) ni la Comisión Nacional para la Protección
                    y Defensa de los Usuarios de Servicios Financieros (CONDUSEF).
                </blockquote>

                <p>
                    Kipo <strong>NO</strong>:
                </p>
                <ul>
                    <li>Maneja, transfiere ni procesa dinero del usuario</li>
                    <li>Ofrece créditos, préstamos ni financiamiento</li>
                    <li>Capta recursos del público</li>
                    <li>Realiza operaciones bancarias o financieras</li>
                    <li>
                        Accede a tus cuentas bancarias ni almacena números de
                        tarjeta completos
                    </li>
                </ul>

                <h3>3.2 El Coach IA NO es Asesoría Financiera Profesional</h3>
                <blockquote>
                    Las recomendaciones del Coach IA son de{" "}
                    <strong>carácter general y educativo</strong>. No constituyen
                    asesoría financiera, fiscal ni legal personalizada. Consulta
                    siempre a un profesional certificado antes de tomar decisiones
                    financieras importantes.
                </blockquote>

                <h3>3.3 No Garantizamos Resultados Financieros</h3>
                <p>
                    El uso de Kipo no garantiza que alcanzarás tus metas de ahorro
                    ni que obtendrás resultados financieros específicos. Tu éxito
                    financiero depende de múltiples factores fuera del control de
                    Kipo.
                </p>

                <h3>3.4 Responsabilidad del Usuario sobre sus Datos</h3>
                <p>
                    La información que ingresas en Kipo (ingresos, gastos,
                    presupuestos, metas) es tu responsabilidad. Kipo no verifica
                    la exactitud de los datos ingresados manualmente.
                </p>

                <h3>3.5 No Almacenamos Información Bancaria Sensible</h3>
                <p>
                    Kipo solo registra información general de tus tarjetas de
                    crédito (nombre, límite, fecha de corte y fecha de pago). NO
                    almacenamos números de tarjeta completos, CVV ni contraseñas
                    bancarias.
                </p>

                <h2>4. Uso Aceptable</h2>

                <h3>4.1 Requisitos de Edad</h3>
                <p>
                    Debes tener al menos 18 años de edad para usar Kipo. Al
                    aceptar estos Términos, declaras que cumples con este
                    requisito.
                </p>

                <h3>4.2 Conductas Prohibidas</h3>
                <p>Está estrictamente prohibido usar Kipo para:</p>
                <ul>
                    <li>
                        Actividades ilegales, lavado de dinero, fraude o evasión
                        fiscal
                    </li>
                    <li>
                        Registrar información falsa o engañosa de forma
                        intencional
                    </li>
                    <li>
                        Intentar acceder a cuentas de otros usuarios o a nuestros
                        sistemas sin autorización
                    </li>
                    <li>
                        Realizar ingeniería inversa, descompilar o modificar la
                        aplicación
                    </li>
                    <li>Compartir tus credenciales de acceso con terceros</li>
                    <li>Crear múltiples cuentas por usuario</li>
                </ul>

                <h2>5. Registro y Seguridad de la Cuenta</h2>

                <h3>5.1 Creación de Cuenta</h3>
                <p>
                    Para usar Kipo, debes crear una cuenta proporcionando un
                    correo electrónico válido y una contraseña segura. Eres
                    responsable de mantener la confidencialidad de tus
                    credenciales.
                </p>

                <h3>5.2 Una Cuenta por Usuario</h3>
                <p>
                    Solo puedes tener una cuenta activa. Si detectamos cuentas
                    duplicadas, podemos suspenderlas sin previo aviso.
                </p>

                <h2>6. Propiedad Intelectual</h2>

                <h3>6.1 Derechos de Kipo</h3>
                <p>
                    Todos los derechos de propiedad intelectual sobre Kipo
                    (marca, logo, diseño, código, contenido) son propiedad
                    exclusiva del responsable del servicio. Estos Términos no te
                    otorgan ninguna licencia sobre dichos derechos más allá del
                    uso personal y no comercial de la aplicación.
                </p>

                <h3>6.2 Derechos del Usuario</h3>
                <p>
                    Tú retienes la propiedad de todos los datos personales y
                    financieros que ingresas en Kipo. Al usar el servicio, nos
                    otorgas una licencia limitada para procesar y almacenar tus
                    datos con el único fin de proveerte el servicio.
                </p>

                <h2>7. Privacidad y Protección de Datos</h2>
                <p>
                    El tratamiento de tus datos personales se rige por nuestro{" "}
                    <a href="/privacidad">Aviso de Privacidad</a>, el cual forma
                    parte integral de estos Términos. Te recomendamos leerlo
                    detenidamente.
                </p>

                <h2>8. Limitación de Responsabilidad</h2>

                <h3>8.1 Uso Bajo tu Propio Riesgo</h3>
                <p>
                    Usas Kipo bajo tu propia responsabilidad. No nos hacemos
                    responsables por:
                </p>
                <ul>
                    <li>
                        Pérdidas financieras derivadas de decisiones tomadas
                        basándote en la información de Kipo o las recomendaciones
                        del Coach IA
                    </li>
                    <li>
                        Errores en cálculos derivados de datos ingresados
                        incorrectamente
                    </li>
                    <li>
                        Interrupciones del servicio, fallas técnicas o pérdida de
                        datos
                    </li>
                    <li>
                        Daños indirectos, incidentales, especiales o
                        consecuenciales
                    </li>
                </ul>

                <h3>8.2 Disponibilidad del Servicio</h3>
                <p>
                    Hacemos nuestro mejor esfuerzo por mantener Kipo disponible
                    24/7, pero no garantizamos disponibilidad ininterrumpida. El
                    servicio puede suspenderse temporalmente por mantenimiento,
                    actualizaciones o causas fuera de nuestro control.
                </p>

                <h3>8.3 Precisión de la Información</h3>
                <p>
                    Si bien nos esforzamos por proveer cálculos exactos, no
                    garantizamos que la información generada por Kipo (totales,
                    insights, proyecciones) sea 100% precisa en todo momento.
                </p>

                <h2>9. Modificaciones al Servicio</h2>
                <p>
                    Nos reservamos el derecho de modificar, suspender o
                    discontinuar cualquier aspecto de Kipo en cualquier momento,
                    con o sin previo aviso. Esto incluye la adición o eliminación
                    de funcionalidades.
                </p>

                <h2>10. Terminación de la Cuenta</h2>

                <h3>10.1 Terminación por el Usuario</h3>
                <p>
                    Puedes eliminar tu cuenta en cualquier momento desde la
                    configuración de la app o contactándonos a{" "}
                    <a href="mailto:soporte@kipo.app">soporte@kipo.app</a>. Al
                    eliminar tu cuenta:
                </p>
                <ul>
                    <li>
                        Perderás acceso inmediato a todos tus datos almacenados en
                        Kipo
                    </li>
                    <li>
                        Tus datos personales serán eliminados de forma permanente
                        dentro de los 30 días siguientes, salvo aquellos que
                        debamos conservar por obligaciones legales
                    </li>
                </ul>

                <h3>10.2 Terminación por Kipo</h3>
                <p>
                    Podemos suspender o terminar tu cuenta si violas estos
                    Términos, sin previo aviso y sin responsabilidad de nuestra
                    parte.
                </p>

                <h2>11. Indemnización</h2>
                <p>
                    Aceptas indemnizar y mantener indemne a Kipo, sus propietarios,
                    empleados y afiliados de cualquier reclamación, pérdida, daño,
                    responsabilidad y gasto (incluyendo honorarios legales)
                    derivados de tu uso indebido del servicio o violación de estos
                    Términos.
                </p>

                <h2>12. Ley Aplicable y Jurisdicción</h2>
                <p>
                    Estos Términos se rigen por las leyes de los{" "}
                    <strong>Estados Unidos Mexicanos</strong>. Cualquier disputa
                    derivada de estos Términos será sometida a la jurisdicción
                    exclusiva de los tribunales competentes de la{" "}
                    <strong>Ciudad de México</strong>.
                </p>

                <h2>13. Divisibilidad</h2>
                <p>
                    Si alguna disposición de estos Términos es declarada inválida
                    o inaplicable, las disposiciones restantes seguirán en pleno
                    vigor y efecto.
                </p>

                <h2>14. Modificaciones a estos Términos</h2>
                <p>
                    Podemos actualizar estos Términos ocasionalmente. Te
                    notificaremos de cambios significativos mediante un aviso en
                    la app o por correo electrónico. El uso continuado de Kipo
                    después de la notificación constituye tu aceptación de los
                    nuevos Términos.
                </p>

                <h2>15. Contacto</h2>
                <p>
                    Para preguntas, comentarios o solicitudes relacionadas con
                    estos Términos, contáctanos:
                </p>
                <ul>
                    <li>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:soporte@kipo.app">soporte@kipo.app</a>
                    </li>
                    <li>
                        <strong>Sitio web:</strong>{" "}
                        <a href="https://kipo.app">https://kipo.app</a>
                    </li>
                </ul>

                <hr className="my-12 border-zinc-800" />

                <p className="text-sm text-zinc-500">
                    Al usar Kipo, confirmas que has leído, entendido y aceptado
                    estos Términos y Condiciones en su totalidad.
                </p>
            </div>
        </LegalLayout>
    );
}
