import {ImageHandler} from './handler'
import {DownloaderFactory} from "./download";

/**
 *
 * @param event
 * @param context
 * @returns {Promise<void>}
 */
export async function handler(event, context) {
    // 解析请求

    // 参数解析

    // 文件下载
    let downloader = DownloaderFactory.create("upload")
    let file = downloader.download("")
    // 执行
    let imageHandler = new ImageHandler(file, {});
    let image = await imageHandler.handler();
}