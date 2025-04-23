import { randomUUID } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';



export class SaveImage {

    static async saveImage( file: File ) {

        // Almacenar imagen en una carpeta local y retorna la URL de la imagen 
        const uploadDir = path.resolve('./public/uploads');

        // Crear el directorio si no existe
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadDir, fileName);

        // Guardar el archivo en el sistema de archivos
        await fs.promises.writeFile(filePath, Buffer.from(await file.arrayBuffer()));

        console.log(fileName)
        // Retornar la URL de la imagen
        return fileName.toString();
}
}