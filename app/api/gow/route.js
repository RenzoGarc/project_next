import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (request) => {
  try {
    // CON MODELOS
    const users = await prisma.tpub_categoria.findMany();
    // CONQUERY
    // const users = await prisma.$queryRaw`SELECT * FROM tpub_categoria`;
    const jsonResponse = JSON.stringify(users);

    return new Response(jsonResponse, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const data = await request.json();
    const nuevaCategoria = await prisma.tpub_categoria.create({
      data: {
        pk_giro: parseInt(data.pk_giro),
        nombre: data.nombre,
        imagen: data.urlImagen,
        n_orden: 0,
      },
    });
    return new Response(
      JSON.stringify({
        message: "Creación exitosa",
        categoria: nuevaCategoria,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error en la creación:", error);
    return new Response(JSON.stringify({ error: "Error en la creación" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
