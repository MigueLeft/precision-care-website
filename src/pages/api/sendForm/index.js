import nodemailer from "nodemailer";

export async function POST({ request }) {
  try {
    const data = await request.json();
    const templateEmail = `<div style="max-width: 600px; margin: auto; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden; border: 1px solid #ddd;">
      <div style="background-color: #00cccc; padding: 20px; text-align: center;">
        <h1 style="color: white; font-size: 24px; font-weight: bold; margin: 0;">Nueva Solicitud de Consulta</h1>
      </div>      
      <div style="padding: 10px 24px;">
        <!-- Contenedor principal que mantiene el ancho consistente -->
        <div style="width: 100%; max-width: 100%; margin: 16px 0;">
          <!-- Bloque de información -->
          <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; width: 100%; margin-bottom: 16px;">
            <div style="width: 100%;">
              <div style="border-bottom: 1px solid #ddd; padding: 10px; background-color: #f9fafb; font-weight: bold;">Nombre Completo:</div>
              <div style="padding: 10px;">${data.nombre} ${data.apellido}</div>
              
              <div style="border-bottom: 1px solid #ddd; padding: 10px; background-color: #f9fafb; font-weight: bold;">Email:</div>
              <div style="padding: 10px;">${data.email}</div>
              
              <div style="border-bottom: 1px solid #ddd; padding: 10px; background-color: #f9fafb; font-weight: bold;">Teléfono:</div>
              <div style="padding: 10px;">${data.telefono}</div>
              
              <div style="border-bottom: 1px solid #ddd; padding: 10px; background-color: #f9fafb; font-weight: bold;">Fecha Solicitada:</div>
              <div style="padding: 10px;">${data.fecha}</div>
              
              <div style="border-bottom: 1px solid #ddd; padding: 10px; background-color: #f9fafb; font-weight: bold;">Servicios de Interés:</div>
              <div style="padding: 10px;">${data.soluciones.join(", ")}</div>
              
              <div style="border-bottom: 1px solid #ddd; padding: 10px; background-color: #f9fafb; font-weight: bold;">Quiere aplicar al programa de migrantes:</div>
              <div style="padding: 10px;">${data.migrante ? "Sí" : "No"}</div>
            </div>
          </div>

          <!-- Bloque de mensaje -->
          <div style="border: 1px solid #ddd; border-radius: 8px; background-color: #f9fafb; padding: 16px; width: 100%; box-sizing: border-box; margin-bottom: 16px;">
            <p style="font-weight: bold; margin: 0 0 8px 0;">Mensaje del Paciente:</p>
            <p style="margin: 0;">${data.mensaje}</p>
          </div>
        </div>

        <p style="margin: 16px 0;">Por favor, revise la información y confirme la cita con el paciente.</p>
      </div>
      
      <div style="background-color: #f9fafb; padding: 16px; text-align: center; font-size: 14px;">
        <p style="margin: 0;">Este es un correo automático. Por favor, no responda a este mensaje.</p>
      </div>
    </div>`;

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: import.meta.env.SMTP_PORT,
      secure: false,
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      // from: '"Precision Care"',
      from: '"Precision Care" <contacto@precisioncareclinic.org>',
      to: data.email,
      subject: "Nueva Solicitud de Consulta",
      html: templateEmail,
    });

    return new Response(
      JSON.stringify({
        message: "Formulario recibido exitosamente",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error en el endpoint:", error);

    return new Response(
      JSON.stringify({
        message: "Error procesando el formulario",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
