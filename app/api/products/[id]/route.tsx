import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 2) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({
    id: 1,
    name: "Damn",
    price: 10,
  });
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  if (id > 1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({ id, name: body.name, price: body.price });
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 1)
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  return NextResponse.json({ message: "Delete product successfully!" });
}