import {
    EmptyImageURLError,
    ImageURLExistsError,
    InvalidImageURLError,
} from "./error"

export class Image {
    constructor(imageUrl: string, description: string) {
        this.imageUrl = imageUrl
        this.description = description
        this.id = ""
    }

    id: string
    imageUrl: string
    description: string
}

export class ImageCollection {
    constructor() {
        this.images = []
    }

    private images: Image[]

    private generateID(length: number): string {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let id = ""

        while (true) {
            for (let i = 0; i < length; i++) {
                id += chars[Math.floor(Math.random() * chars.length)]
            }

            if (this.images.every((image) => image.id !== id)) break
        }

        return id
    }

    get allImages(): Image[] {
        return this.images
    }

    public validateUrl(imageUrl: string): void {
        // Check for empty string
        if (!imageUrl) throw new EmptyImageURLError()

        // Check if url begins with http protocol
        try {
            const newUrl = new URL(imageUrl)
            if (newUrl.protocol !== "http:" && newUrl.protocol !== "https:") {
                throw new InvalidImageURLError()
            }
        } catch (err) {
            throw new InvalidImageURLError()
        }

        // Check if url already exists in image collection
        const existingImage = this.images.find(image => image.imageUrl === imageUrl)
        if (existingImage) {
            throw new ImageURLExistsError(existingImage)
        }
    }

    createImage(imageUrl: string, description: string): Image {
        try {
            this.validateUrl(imageUrl)

            const image = new Image(imageUrl, description)
            image.id = this.generateID(8)
            this.images.push(image)

            return image
        } catch (error) {
            throw error
        }
    }
}
