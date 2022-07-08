/**
 * 文件下载器
 */
interface Downloader {
    download(path: string)
}

/**
 * S3
 */
class S3Downloader implements Downloader {
    download(path: string) {
    }
}

/**
 * Facebook
 */
class FacebookDownloader implements Downloader {
    download(path: string) {
    }
}

export class DownloaderFactory {

    static create(type: string): Downloader {
        if (type == "upload") {
            return new S3Downloader()
        } else if (type == "fb") {
            return new FacebookDownloader()
        }
    }

}