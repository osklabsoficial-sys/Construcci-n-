import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Correo electrónico inválido"),
  phone: z
    .string()
    .min(7, "El teléfono debe tener al menos 7 dígitos")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "El teléfono contiene caracteres inválidos"),
  projectType: z.string().min(1, "Selecciona el tipo de proyecto").max(50),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message ?? "Datos del formulario inválidos";
      return NextResponse.json(
        { ok: false, error: firstError },
        { status: 400 }
      );
    }

    await db.contact.create({ data: parsed.data });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[/api/contact] Error al guardar la solicitud:", error);
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
