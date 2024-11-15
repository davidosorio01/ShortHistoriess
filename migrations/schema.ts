import { sqliteTable, AnySQLiteColumn, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const historias = sqliteTable("Historias", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	titulo: text("titulo").notNull(),
	idAutor: integer("id_autor"),
	fechaCreacion: text("fecha_creacion"),
});

export const opiniones = sqliteTable("Opiniones", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	likes: integer("likes").notNull(),
	"reseseña": text("reseseña "),
	libroLeido: text("libro_leido ").notNull(),
	autor: text("autor ").notNull(),
});

export const usuarios = sqliteTable("usuarios", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	usuario: text("usuario").notNull(),
	correo: text("correo").notNull(),
	password: text("password").notNull(),
	token: text("token"),
});