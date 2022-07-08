import {Sharp} from 'sharp';

export interface Command {
    exec(): Sharp
}

interface SharpCommand extends Command {

    add(command: Command): void

}

export class Commands implements SharpCommand {
    array: Command[] = [];

    add(command: Command): void {
        this.array.push(command)
    }

    exec(): Sharp {
        let s
        for (let command of this.array) {
            s = command.exec();
        }
        return s;
    }

}
