import type { Actions } from './$types';
import { db } from '$lib/server/database/connect';
import { usuarios } from '$lib/server/database/data';
import bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';
import { json, fail } from '@sveltejs/kit';

export const actions: Actions = {
  recuperar: async ({ request }) => {
    try {
      const data = Object.fromEntries(await request.formData());
      const correo = String(data.correo);
      const newPassword = String(data.new_password);

      console.log("Datos recibidos:", { correo, newPassword });

      // Verifica si el usuario existe
      const user = await db.select().from(usuarios).where(eq(usuarios.correo, correo));
      if (!user || user.length === 0) {
        console.log("Usuario no encontrado");
        return fail(400, { message: 'Correo no encontrado' });
      }

      // Actualiza la contraseña
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await db.update(usuarios)
        .set({ password: hashedPassword })
        .where(eq(usuarios.correo, correo));

      console.log("Contraseña actualizada correctamente");
      return { success: true, message: 'Contraseña actualizada' };
    } catch (error) {
      console.error("Error en el servidor:", error);
      return fail(500, { message: 'Error al procesar la solicitud' });
    }
  },
};