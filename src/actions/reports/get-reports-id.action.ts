import { defineAction } from "astro:actions";
import { db, Report, eq } from "astro:db";
import { z } from "astro:schema";


export const getReportsById = defineAction({
    accept: 'json', 
    input: z.string(), 
    
    handler: async ( reportId ) => { 

        const [report] = await db.select().from(Report).where(eq(Report.reportId, reportId));

        if (!report) {
            throw new Error('Report not found');
        }

        return { report: report }
    }
})