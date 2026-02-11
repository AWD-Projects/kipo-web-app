import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
    title: "Aviso de Privacidad | Kipo",
    description:
        "Aviso de privacidad integral de Kipo conforme a la LFPDPPP 2025.",
};

export default function PrivacidadPage() {
    return (
        <LegalLayout
            title="Aviso de Privacidad Integral"
            lastUpdated="10 de febrero de 2026"
        >
            <div className="prose-legal">
                <p>
                    De conformidad con la{" "}
                    <strong>
                        Ley Federal de Protección de Datos Personales en Posesión
                        de los Particulares (LFPDPPP)
                    </strong>{" "}
                    y su Reglamento, ponemos a tu disposición el presente Aviso de
                    Privacidad Integral.
                </p>

                <h2>1. Identidad y Domicilio del Responsable</h2>
                <p>
                    <strong>Responsable del tratamiento de datos personales:</strong>
                    <br />
                    [Razón Social a Definir]
                    <br />
                    <strong>Domicilio:</strong> [Domicilio Fiscal Completo a Definir]
                    <br />
                    <strong>RFC:</strong> [RFC a Definir]
                    <br />
                    <strong>Contacto para privacidad:</strong>{" "}
                    <a href="mailto:privacidad@kipo.app">privacidad@kipo.app</a>
                </p>

                <h2>2. Datos Personales que Tratamos</h2>
                <p>
                    Para proporcionarte los servicios de Kipo, recabamos y
                    tratamos las siguientes categorías de datos personales:
                </p>

                <h3>2.1 Datos de Identificación y Contacto</h3>
                <ul>
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Tipo de dispositivo (modelo, sistema operativo)</li>
                    <li>Token de notificaciones push</li>
                </ul>

                <h3>2.2 Datos Financieros y Patrimoniales</h3>
                <blockquote>
                    <strong>Importante:</strong> Estos datos requieren tu{" "}
                    <strong>consentimiento expreso</strong> para ser tratados.
                </blockquote>
                <ul>
                    <li>Ingreso mensual</li>
                    <li>
                        Gastos (monto, categoría, descripción, fecha, método de
                        pago)
                    </li>
                    <li>Ingresos adicionales (monto, fuente, fecha)</li>
                    <li>
                        Presupuestos y sobres virtuales (nombre, límite, período)
                    </li>
                    <li>Metas de ahorro (nombre, monto objetivo, plazo, progreso)</li>
                    <li>
                        Información de tarjetas de crédito:{" "}
                        <strong>
                            SOLO nombre de la tarjeta, límite de crédito, fecha de
                            corte y fecha de pago
                        </strong>
                        . NO almacenamos números de tarjeta completos, CVV ni
                        contraseñas
                    </li>
                    <li>
                        Historial de transacciones financieras registradas en la
                        app
                    </li>
                </ul>

                <h3>2.3 Datos de Uso del Servicio</h3>
                <ul>
                    <li>Mensajes enviados al Coach IA</li>
                    <li>Preferencias de configuración</li>
                    <li>Fecha y hora de acceso a la app</li>
                    <li>Funcionalidades utilizadas</li>
                </ul>

                <h2>3. Finalidades del Tratamiento</h2>
                <p>
                    Tus datos personales serán tratados para las siguientes
                    finalidades:
                </p>

                <h3>3.1 Finalidades Necesarias (Primarias)</h3>
                <p>
                    <strong>
                        Estas finalidades son indispensables para proveerte el
                        servicio.
                    </strong>{" "}
                    Si no otorgas tu consentimiento para estas finalidades, no
                    podremos proveerte nuestros servicios.
                </p>
                <ul>
                    <li>
                        Autenticar tu identidad y gestionar tu cuenta en Kipo
                    </li>
                    <li>
                        Proveer el servicio de rastreo y categorización de gastos e
                        ingresos
                    </li>
                    <li>Crear y gestionar presupuestos mediante sobres virtuales</li>
                    <li>Establecer y monitorear metas de ahorro</li>
                    <li>
                        Registrar y enviar recordatorios de fechas de corte y pago
                        de tarjetas de crédito
                    </li>
                    <li>
                        Generar insights financieros personalizados basados en tus
                        patrones de gasto
                    </li>
                    <li>
                        Proveer respuestas del Coach IA mediante inteligencia
                        artificial
                    </li>
                    <li>Enviar notificaciones push de recordatorios y alertas</li>
                    <li>Sincronizar tus datos entre dispositivos</li>
                    <li>
                        Garantizar la seguridad de tu cuenta y prevenir fraudes
                    </li>
                </ul>

                <h3>3.2 Finalidades Voluntarias (Secundarias)</h3>
                <p>
                    <strong>
                        Estas finalidades no son necesarias para el servicio
                        básico.
                    </strong>{" "}
                    Puedes negarte a que tus datos sean tratados para estas
                    finalidades sin que afecte tu acceso al servicio.
                </p>
                <ul>
                    <li>
                        Enviarte comunicaciones de marketing, promociones y
                        novedades sobre Kipo
                    </li>
                    <li>
                        Realizar análisis estadísticos agregados y anónimos para
                        mejorar el servicio
                    </li>
                    <li>
                        Generar reportes de tendencias y estudios de mercado (datos
                        anonimizados)
                    </li>
                    <li>
                        Ofrecerte productos o servicios premium personalizados
                    </li>
                </ul>

                <p>
                    <strong>
                        Si no deseas que tus datos sean tratados para finalidades
                        secundarias, puedes manifestarlo enviando un correo a{" "}
                        <a href="mailto:privacidad@kipo.app">
                            privacidad@kipo.app
                        </a>
                        .
                    </strong>
                </p>

                <h2>4. Transferencias de Datos a Terceros</h2>
                <p>
                    Para proveerte el servicio, transferimos algunos de tus datos
                    personales a los siguientes terceros:
                </p>

                <h3>4.1 Supabase (Infraestructura de Backend)</h3>
                <ul>
                    <li>
                        <strong>Datos transferidos:</strong> Todos los datos de tu
                        cuenta (nombre, email, datos financieros, transacciones,
                        presupuestos, metas)
                    </li>
                    <li>
                        <strong>Finalidad:</strong> Almacenamiento y procesamiento
                        seguro de datos
                    </li>
                    <li>
                        <strong>Ubicación:</strong> Servidores de Amazon Web
                        Services (AWS), probablemente en Estados Unidos
                    </li>
                    <li>
                        <strong>Tipo de transferencia:</strong> Internacional
                    </li>
                </ul>

                <h3>4.2 OpenAI (Coach IA)</h3>
                <ul>
                    <li>
                        <strong>Datos transferidos:</strong> Tus últimas 10
                        transacciones, presupuestos, metas de ahorro, ingreso
                        mensual, nombre y mensajes del chat
                    </li>
                    <li>
                        <strong>Finalidad:</strong> Generar respuestas
                        personalizadas del Coach IA mediante procesamiento de
                        lenguaje natural
                    </li>
                    <li>
                        <strong>Ubicación:</strong> Estados Unidos
                    </li>
                    <li>
                        <strong>Tipo de transferencia:</strong> Internacional
                    </li>
                </ul>
                <blockquote>
                    <strong>Importante:</strong> Solo se envían datos a OpenAI
                    cuando usas el Coach IA. Puedes optar por no usar esta
                    funcionalidad sin perder acceso al resto del servicio.
                </blockquote>

                <h3>4.3 Expo Push Notification Service</h3>
                <ul>
                    <li>
                        <strong>Datos transferidos:</strong> Token de dispositivo y
                        contenido de notificaciones
                    </li>
                    <li>
                        <strong>Finalidad:</strong> Envío de notificaciones push
                    </li>
                    <li>
                        <strong>Ubicación:</strong> Estados Unidos
                    </li>
                    <li>
                        <strong>Tipo de transferencia:</strong> Internacional
                    </li>
                </ul>

                <p>
                    <strong>
                        Al aceptar este Aviso de Privacidad, otorgas tu
                        consentimiento expreso para estas transferencias
                        internacionales de datos.
                    </strong>{" "}
                    Hemos establecido contratos con estos proveedores para
                    garantizar que protejan tus datos con el mismo nivel de
                    seguridad que nosotros.
                </p>

                <h2>5. Tratamiento Automatizado de Datos</h2>
                <blockquote>
                    Kipo utiliza <strong>tratamiento automatizado</strong> de tus
                    datos mediante algoritmos e inteligencia artificial para:
                    <ul>
                        <li>Generar insights sobre tus patrones de gasto</li>
                        <li>Identificar oportunidades de ahorro</li>
                        <li>
                            Proveer recomendaciones personalizadas del Coach IA
                        </li>
                    </ul>
                </blockquote>
                <p>
                    Conforme a la LFPDPPP, tienes derecho a oponerte al
                    tratamiento automatizado de tus datos. Si deseas ejercer este
                    derecho, contáctanos a{" "}
                    <a href="mailto:privacidad@kipo.app">privacidad@kipo.app</a>.
                </p>

                <h2>6. Tus Derechos ARCO</h2>
                <p>
                    Como titular de datos personales, tienes derecho a ejercer los
                    derechos de <strong>Acceso, Rectificación, Cancelación y Oposición</strong> (ARCO):
                </p>

                <h3>6.1 Acceso</h3>
                <p>
                    Puedes solicitar conocer qué datos personales tenemos sobre ti
                    y las condiciones del tratamiento.
                </p>

                <h3>6.2 Rectificación</h3>
                <p>
                    Puedes solicitar la corrección de tus datos si son inexactos,
                    incompletos o están desactualizados.
                </p>

                <h3>6.3 Cancelación</h3>
                <p>
                    Puedes solicitar la eliminación de tus datos cuando ya no sean
                    necesarios para las finalidades del tratamiento o cuando
                    revokes tu consentimiento.
                </p>

                <h3>6.4 Oposición</h3>
                <p>
                    Puedes oponerte al tratamiento de tus datos por causa
                    legítima, o cuando sean objeto de tratamiento automatizado que
                    produzca efectos adversos.
                </p>

                <h3>6.5 Cómo Ejercer tus Derechos ARCO</h3>
                <p>
                    Para ejercer cualquiera de estos derechos, envía un correo a{" "}
                    <a href="mailto:privacidad@kipo.app">privacidad@kipo.app</a>{" "}
                    con:
                </p>
                <ul>
                    <li>Tu nombre completo</li>
                    <li>Correo electrónico registrado en Kipo</li>
                    <li>Descripción clara del derecho que deseas ejercer</li>
                    <li>
                        Copia de identificación oficial (para validar tu identidad)
                    </li>
                </ul>
                <p>
                    <strong>Plazo de respuesta:</strong> 20 días hábiles a partir
                    de la recepción de tu solicitud, ampliable por 10 días más en
                    casos justificados.
                </p>

                <h2>7. Revocación del Consentimiento</h2>
                <p>
                    Puedes revocar tu consentimiento para el tratamiento de tus
                    datos personales en cualquier momento, enviando un correo a{" "}
                    <a href="mailto:privacidad@kipo.app">privacidad@kipo.app</a>.
                </p>
                <p>
                    <strong>Nota:</strong> La revocación del consentimiento para
                    finalidades necesarias resultará en la imposibilidad de
                    seguir proporcionándote el servicio. En ese caso, tu cuenta
                    será desactivada y tus datos serán eliminados conforme a
                    nuestra política de retención.
                </p>

                <h2>8. Eliminación de Cuenta y Datos</h2>
                <p>
                    Puedes eliminar tu cuenta en cualquier momento desde la
                    configuración de la app o contactándonos a{" "}
                    <a href="mailto:privacidad@kipo.app">privacidad@kipo.app</a>.
                </p>
                <p>
                    Al eliminar tu cuenta:
                </p>
                <ul>
                    <li>
                        Tus datos personales serán eliminados de forma permanente
                        dentro de los <strong>30 días</strong> siguientes
                    </li>
                    <li>
                        Solo conservaremos aquellos datos que debamos retener por
                        obligaciones legales, fiscales o contables (máximo 5 años)
                    </li>
                    <li>
                        Los datos anonimizados y agregados podrán conservarse para
                        análisis estadísticos sin que sea posible identificarte
                    </li>
                </ul>

                <h2>9. Medidas de Seguridad</h2>
                <p>
                    Implementamos medidas de seguridad administrativas, técnicas y
                    físicas para proteger tus datos personales contra daño,
                    pérdida, alteración, destrucción o acceso no autorizado:
                </p>
                <ul>
                    <li>
                        <strong>Cifrado en tránsito:</strong> Todas las
                        comunicaciones usan protocolo HTTPS/TLS
                    </li>
                    <li>
                        <strong>Cifrado en reposo:</strong> Tus datos están
                        cifrados en los servidores (AES-256)
                    </li>
                    <li>
                        <strong>Almacenamiento seguro:</strong> Las contraseñas
                        están hasheadas y los tokens de sesión se almacenan en
                        áreas seguras del dispositivo
                    </li>
                    <li>
                        <strong>Control de acceso:</strong> Solo tú puedes acceder
                        a tus datos mediante Row-Level Security
                    </li>
                    <li>
                        <strong>Auditoría:</strong> Registramos accesos y
                        modificaciones a datos sensibles
                    </li>
                    <li>
                        <strong>Respaldos:</strong> Realizamos respaldos
                        periódicos para prevenir pérdida de información
                    </li>
                </ul>

                <h2>10. Notificación de Vulneraciones de Seguridad</h2>
                <p>
                    En caso de que ocurra una vulneración de seguridad que afecte
                    significativamente tus derechos patrimoniales o morales, te
                    notificaremos de forma <strong>inmediata</strong> mediante
                    correo electrónico, indicando:
                </p>
                <ul>
                    <li>La naturaleza del incidente</li>
                    <li>Los datos personales comprometidos</li>
                    <li>Recomendaciones para que te protejas</li>
                    <li>Las acciones correctivas implementadas</li>
                </ul>

                <h2>11. Uso de Tecnologías de Rastreo</h2>
                <p>
                    Kipo no utiliza cookies en la aplicación móvil. Sin embargo,
                    utilizamos las siguientes tecnologías:
                </p>
                <ul>
                    <li>
                        <strong>AsyncStorage:</strong> Para almacenar preferencias
                        de configuración localmente en tu dispositivo
                    </li>
                    <li>
                        <strong>SecureStore:</strong> Para almacenar tokens de
                        sesión de forma cifrada
                    </li>
                    <li>
                        <strong>Expo Analytics (si aplica):</strong> Para recopilar
                        estadísticas anónimas de uso de la app
                    </li>
                </ul>
                <p>
                    Para más información, consulta nuestra{" "}
                    <a href="/cookies">Política de Cookies</a>.
                </p>

                <h2>12. Cambios al Aviso de Privacidad</h2>
                <p>
                    Podemos actualizar este Aviso de Privacidad ocasionalmente
                    para reflejar cambios en nuestras prácticas de tratamiento de
                    datos o actualizaciones legales.
                </p>
                <p>
                    <strong>Te notificaremos de cambios significativos:</strong>
                </p>
                <ul>
                    <li>Mediante un aviso en la app al iniciar sesión</li>
                    <li>Por correo electrónico a tu dirección registrada</li>
                    <li>
                        Publicando la versión actualizada en{" "}
                        <a href="https://kipo.app/privacidad">
                            https://kipo.app/privacidad
                        </a>
                    </li>
                </ul>
                <p>
                    El uso continuado de Kipo después de la notificación
                    constituye tu aceptación del Aviso actualizado.
                </p>

                <h2>13. Datos de Menores de Edad</h2>
                <p>
                    Kipo está dirigido a personas mayores de 18 años. No recabamos
                    intencionalmente datos de menores de edad. Si detectamos que
                    un menor ha proporcionado datos personales, eliminaremos su
                    cuenta y sus datos de inmediato.
                </p>

                <h2>14. Legislación Aplicable</h2>
                <p>
                    Este Aviso de Privacidad se rige por la{" "}
                    <strong>
                        Ley Federal de Protección de Datos Personales en Posesión
                        de los Particulares (LFPDPPP)
                    </strong>{" "}
                    publicada en 2025 y su Reglamento, así como los Lineamientos
                    del Aviso de Privacidad.
                </p>

                <h2>15. Autoridad Competente</h2>
                <p>
                    Si consideras que tus derechos han sido vulnerados, puedes
                    presentar una queja ante la{" "}
                    <strong>
                        Secretaría Anticorrupción y Buen Gobierno
                    </strong>, autoridad competente en materia de protección de
                    datos personales en México.
                </p>

                <h2>16. Contacto</h2>
                <p>
                    Para cualquier duda, aclaración o solicitud relacionada con
                    este Aviso de Privacidad o el tratamiento de tus datos
                    personales, contáctanos:
                </p>
                <ul>
                    <li>
                        <strong>Email de privacidad:</strong>{" "}
                        <a href="mailto:privacidad@kipo.app">
                            privacidad@kipo.app
                        </a>
                    </li>
                    <li>
                        <strong>Email de soporte:</strong>{" "}
                        <a href="mailto:soporte@kipo.app">soporte@kipo.app</a>
                    </li>
                    <li>
                        <strong>Sitio web:</strong>{" "}
                        <a href="https://kipo.app">https://kipo.app</a>
                    </li>
                </ul>

                <hr className="my-12 border-zinc-800" />

                <p className="text-sm text-zinc-500">
                    <strong>Consentimiento:</strong> Al aceptar este Aviso de
                    Privacidad y usar Kipo, otorgas tu consentimiento expreso para
                    el tratamiento de tus datos personales (incluyendo datos
                    financieros y patrimoniales) conforme a las finalidades
                    descritas, así como para las transferencias internacionales
                    mencionadas.
                </p>
            </div>
        </LegalLayout>
    );
}
