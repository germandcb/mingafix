import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { SaveImage } from "../../utils/save-image";
import { firebase } from "@/firebase/config";
import { db, Report } from "astro:db";

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTE_IMAGES_TYPES = [
    'image/jpeg',
    'image/png', 
    'image/jpg', 
    'image/webp'
];

interface infoUser { 
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
}

export const createReport = defineAction({
    accept: 'form',
    input: z.object({
        title: z.string(),
        description: z.string(),
        image: z.instanceof(File)
            .refine( file => file.size <= MAX_FILE_SIZE, 'Max image size is 5MB')
            .refine( file => {
                if ( file.size === 0 ) return true;
                return ACCEPTE_IMAGES_TYPES.includes(file.type);
            }, 'Image type not supported'),
        location: z.string(),
    }),
    handler: async ( { title, description, image, location }, { request, locals } ) => {

        
        const urlImage =  await SaveImage.saveImage(image);

        // Save report to the database
        const reportId = crypto.randomUUID();

        const report = { 
            reportId,
            UserId: locals.user?.uid || '',
            title,
            image: urlImage,
            description,
            location,
            state: 'pending'
        }
        // Save report to the database
        try {
            await db.insert(Report).values(report);
        } catch (error) {
            console.error('Error saving report to the database:', error);
        }

        return {ok: true}
    }
})