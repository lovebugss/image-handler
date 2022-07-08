import * as sharp from "sharp";
import {Commands, ResizeCommand} from "./command"
import {ImageOptions} from "./lib";

export class ImageHandler {
    path: string
    image: sharp.Sharp
    options: ImageOptions

    constructor(path: string, options) {
        this.path = path
        this.image = sharp(this.path)
        this.options = options
    }


    async handler(): Promise<sharp.Sharp> {
        const commands = new Commands()
        commands.add(new ResizeCommand(this.image, 300, 200))
        return commands.exec()

    }

    /**
     * TODO
     * @param commands
     * @param options
     */
    applyCommand(commands: Commands, options) {

    }
}