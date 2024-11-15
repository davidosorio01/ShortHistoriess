-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Usuarios` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`nombre_usuario` text NOT NULL,
	`correo_electronico` text NOT NULL,
	`contraseña` text NOT NULL,
	`fecha_nacimiento` text,
	`sexo` text
);
--> statement-breakpoint
CREATE TABLE `Historias` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`titulo` text NOT NULL,
	`id_autor` integer,
	`fecha_creacion` text
);
--> statement-breakpoint
CREATE TABLE `Genero` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`nombre` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Opiniones` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`likes` integer NOT NULL,
	`reseseña ` text,
	`libro_leido ` text NOT NULL,
	`autor ` text NOT NULL
);

*/