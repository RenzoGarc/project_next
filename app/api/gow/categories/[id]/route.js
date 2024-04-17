import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    // const data = await prisma.tpub_categoria.findUnique({
    //   where: {
    //     id_cat: parseInt(params.id),
    //   },
    // });

    const data =
      await prisma.$queryRaw`SELECT * FROM tpub_categoria WHERE id_cat = 1`;
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

export async function DELETE(request, { params }) {
  try {
    await pool.query("DELETE FROM tpub_categoria WHERE id = ?", [params.id]);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function PUT(request, { params }) {
  const data = await request.json();

  try {
    await pool.query("UPDATE tpub_categoria SET ? WHERE id = ?", [
      data,
      params.id,
    ]);
    return NextResponse.json({
      ...data,
      id: params.id,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
