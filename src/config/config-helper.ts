import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

export function loadConfig() {
    dotenv.config();
    const exampleProps = getEnvExampleProps();
    for (let prop of exampleProps) {
        if (!process.env[prop]) {
            throw new Error(`${prop} env property cannot be empty`);
        }
    }
}

function getEnvExampleProps() {
    const content = fs.readFileSync(path.resolve(__dirname, '../../.env.example'), {encoding: 'utf8'});
    return content.split('\n').filter((prop) => !prop.startsWith("#")).map((prop) => prop.split('=')[0]);
}


export const USER_NAME = process.env.USER_NAME as string;