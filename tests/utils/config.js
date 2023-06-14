import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';

export function env() {
    dotenv.config({ path: path.dirname(fileURLToPath(import.meta.url)) + `/../../.env.${process.env.NODE_ENV}` });

    // Defining an object named 'env', contained env variables
    return {
        host: process.env.MAIN
    }
}

