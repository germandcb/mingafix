import { db, User } from 'astro:db';
import { v4 as UUID} from 'uuid'
import bcrypt from 'bcryptjs'

// https://astro.build/db/seed

export default async function seed() {

	const camiloPerez = {
		id: UUID(),
		googleId: '1234567890',
		name: 'Camilo Perez',
		email: 'camiloprez@gmail.com',
		password: bcrypt.hashSync('123456'),
		
	}

	await db.insert(User).values(camiloPerez);

	console.log('Example seed data inserted into the User table.');
	// TODO
}
