import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	// await db.insert(User).values([
	// 	{ id: 1, googleId: '123', name: 'John Doe' },
	// 	{ id: 2, googleId: '456', name: 'Jane Smith' },
	// 	{ id: 3, googleId: '789', name: 'Alice Johnson' }
	// ]);

	console.log('Example seed data inserted into the User table.');
	// TODO
}
