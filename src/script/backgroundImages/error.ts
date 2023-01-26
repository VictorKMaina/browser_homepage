import { Image } from "./image"

export class ImageError {
    constructor(message: string) {
        this.message = message
        this.error = "ImageError"
    }

    message: string
    error: string
}

export class EmptyImageURLError extends ImageError {
    constructor(message?: string) {
        super(message || "Please enter a valid URL")
        this.message = message || this.message
        this.error = "Empty Image URL"
    }
}

export class InvalidImageURLError extends ImageError {
    constructor(message?: string) {
        super(message || "Please enter a valid URL")
        this.message = message || this.message
        this.error = "Invalid Image URL"
    }
}

export class ImageURLExistsError extends ImageError {
    constructor(image: Image, message?: string) {
        super(message || "Image URL already exists")
        this.message = message || this.message
        this.error = "Image URL exists"
        this.image = image
    }

    image: Image
}

export class NoLocalStorageImageCollection extends ImageError {
    constructor(message?: string) {
        super(message || "Something went wrong.")
        this.message = message || this.message
        this.error = "No localStorage Image Collection"
    }
}
