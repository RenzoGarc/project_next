import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const result = await pool.query("SELECT * FROM product WHERE id = ?", [
      params.id,
    ]);
    const jsonResponse = JSON.stringify(data);
    return new Response(jsonResponse, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
}
