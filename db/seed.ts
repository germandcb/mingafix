import { db, User, Report } from 'astro:db';
import { v4 as UUID } from 'uuid'
import bcrypt from 'bcryptjs'

// https://astro.build/db/seed


export default async function seed() {
	const camiloPerez = {
		id: '1234567890',
		name: 'Camilo Perez',
		email: 'camiloprez@gmail.com',
		image: 'https://example.com/image.jpg',
	};

	const lauraMartinez = {
		id: '2345678901',
		name: 'Laura Martinez',
		email: 'laura.martinez@example.com',
		image: 'https://example.com/image-laura.jpg',
	};

	const andresGomez = {
		id: '3456789012',
		name: 'Andres Gomez',
		email: 'andres.gomez@example.com',
		image: 'https://example.com/image-andres.jpg',
	};

	const dianaLopez = {
		id: '4567890123',
		name: 'Diana Lopez',
		email: 'diana.lopez@example.com',
		image: 'https://example.com/image-diana.jpg',
	};

	await db.insert(User).values([camiloPerez, lauraMartinez, andresGomez, dianaLopez]);

	const reports = [
		// Camilo
		{
			reportId: UUID(),
			UserId: camiloPerez.id,
			title: 'Hueco peligroso en la vía',
			image: 'report-camilo1.jpg',
			description: 'Hay un hueco grande en la calle 45 con 18, ha causado varios accidentes en moto.',
			location: 'Calle 45 #18-20, Bogotá',
			state: 'activo',
		},
		{
			reportId: UUID(),
			UserId: camiloPerez.id,
			title: 'Semáforo dañado',
			image: 'report-camilo2.jpg',
			description: 'El semáforo de la carrera 7 con calle 100 no funciona desde hace 3 días.',
			location: 'Carrera 7 con Calle 100, Bogotá',
			state: 'activo',
		},

		// Laura
		{
			reportId: UUID(),
			UserId: lauraMartinez.id,
			title: 'Contenedor de basura desbordado',
			image: 'report-laura1.jpg',
			description: 'El contenedor de la calle 80 está lleno y la basura se está acumulando alrededor.',
			location: 'Calle 80 #24-15, Bogotá',
			state: 'pendiente',
		},
		{
			reportId: UUID(),
			UserId: lauraMartinez.id,
			title: 'Alumbrado público apagado',
			image: 'report-laura2.jpg',
			description: 'Varias luminarias están apagadas desde hace una semana en el parque principal.',
			location: 'Parque Simón Bolívar, Bogotá',
			state: 'activo',
		},

		// Andrés
		{
			reportId: UUID(),
			UserId: andresGomez.id,
			title: 'Fuga de agua',
			image: 'report-andres1.jpg',
			description: 'Hay una fuga de agua en el andén desde hace dos días, ya se está formando un charco.',
			location: 'Carrera 50 #12-60, Bogotá',
			state: 'resuelto',
		},
		{
			reportId: UUID(),
			UserId: andresGomez.id,
			title: 'Tapa de alcantarilla rota',
			image: 'report-andres2.jpg',
			description: 'La tapa de la alcantarilla está rota y representa un peligro para los peatones.',
			location: 'Calle 64 #9-80, Bogotá',
			state: 'activo',
		},

		// Diana
		{
			reportId: UUID(),
			UserId: dianaLopez.id,
			title: 'Grafitis ofensivos en pared pública',
			image: 'report-diana1.jpg',
			description: 'Hay grafitis con lenguaje ofensivo en la fachada de un centro comunitario.',
			location: 'Calle 23 #4-15, Bogotá',
			state: 'pendiente',
		},
		{
			reportId: UUID(),
			UserId: dianaLopez.id,
			title: 'Parque infantil con juegos rotos',
			image: 'report-diana2.jpg',
			description: 'Los columpios están oxidados y una resbaladera está rota. Riesgo para los niños.',
			location: 'Parque Los Cedros, Bogotá',
			state: 'activo',
		},
	];

	await db.insert(Report).values(reports);

	console.log('Seed data inserted into the User and Report tables.');
}