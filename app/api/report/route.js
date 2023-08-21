import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request) => {
  try {
    const data = await request.json();
    let hora = data.fecha + " 08:59:59.84-05";
    const result = await prisma.$queryRaw`
      SELECT
          r.id,
          fk_trabajador,
          to_char(fechahora, 'HH24:MI') as hora,
          concat(p.apellido_paterno, ' ', p.apellido_materno, ' ', p.nombres) as personal,
          t.grado,
          CASE
            WHEN t.grado = 'D' THEN
              CASE
                WHEN EXTRACT(EPOCH FROM (to_char(fechahora, 'HH24:MI')::time - '07:55'::time)) / 60 < 0 THEN 0
                ELSE EXTRACT(EPOCH FROM (to_char(fechahora, 'HH24:MI')::time - '07:55'::time)) / 60
              END
            ELSE
              CASE
                WHEN EXTRACT(EPOCH FROM (to_char(fechahora, 'HH24:MI')::time - '07:50'::time)) / 60 < 0 THEN 0
                ELSE EXTRACT(EPOCH FROM (to_char(fechahora, 'HH24:MI')::time - '07:50'::time)) / 60
              END
          END AS minutos_tardanza,
          ROUND(CAST(CASE
            WHEN t.grado = 'D' THEN
                0.30 * CASE
                    WHEN EXTRACT(EPOCH FROM (to_char(fechahora, 'HH24:MI')::time - '07:55'::time)) / 60 < 0 THEN 0
                    ELSE EXTRACT(EPOCH FROM (to_char(fechahora, 'HH24:MI')::time - '07:55'::time)) / 60
                END
            ELSE
                0
          END AS numeric), 2) AS descuento_profesores
      FROM
          personal.registro_marcado_trabajador r
      INNER JOIN
          personal.trabajador t ON r.fk_trabajador = t.id
      INNER JOIN
          persona p ON t.fk_persona = p.id
      WHERE
          fechahora::date = ${data.fecha}::date and fechahora<${hora}::timestamp and t.grado=${data.tipo}
      ORDER BY
          t.grado ASC,
          concat(p.apellido_paterno, ' ', p.apellido_materno, ' ', p.nombres) ASC`;

    return new Response(
      JSON.stringify({
        data: result,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error en la creación:", error);
    return new Response(
      JSON.stringify({ error: "Error en la obtención de datos" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
