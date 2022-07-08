import {ResizeOptions, Sharp} from "sharp";
import {Command} from "./command"

export class ResizeCommand implements Command {
    shp: Sharp;
    width: number;
    height: number;
    options: ResizeOptions

    constructor(shp: Sharp, width?: number | null, height?: number | null, options?: ResizeOptions) {
        this.shp = shp
        this.width = width
        this.height = height
        this.options = options
    }

    exec() {
        return this.shp.resize(this.width, this.height, this.options)
    }
}