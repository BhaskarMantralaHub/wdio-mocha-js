import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

export function loadConfig() {
    console.log('Reading Properties file');
    dotenv.config();
    const exampleProps = getEnvExampleProps();
    let props = new Map();
    for (let prop of exampleProps) {
        if (!process.env[prop]) {
            throw new Error(`${prop} env property cannot be empty`);
        } else props.set(prop, process.env[prop]);
    }
    console.debug(Object.fromEntries(props));
}

function getEnvExampleProps() {
    const content = fs.readFileSync(path.resolve(__dirname, '../../.env.example'), {encoding: 'utf8'});
    return content.split('\n').filter((prop) => !prop.startsWith("#")).map((prop) => prop.split('=')[0]);
}


export const USER_NAME = process.env.USER_NAME as string;