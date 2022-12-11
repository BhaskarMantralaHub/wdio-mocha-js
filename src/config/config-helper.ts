import * as dotenv from "dotenv";

const REQUIRED_PROPS = ['USER_NAME', 'PASSWORD'];

export function loadConfig() {
    dotenv.config();
    for (let prop of REQUIRED_PROPS) {
        if (!process.env[prop]) {
            throw new Error(`${prop} env property cannot be empty`);
        }
    }
}



export const USER_NAME = process.env.USER_NAME as string