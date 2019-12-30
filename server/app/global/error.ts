import { error, message} from "../config/colors";

const err = (header: string,...messages: string[]): void => {
    console.log('_________________________________\n');
    console.log(error(`${header}\n`));
    messages.forEach(msg =>{
        console.log(message(msg));
    })
    console.log('_________________________________');
}

export { err };