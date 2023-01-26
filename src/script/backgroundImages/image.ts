export class Image {
    constructor(imageUrl: string, description: string, id?:string) {
        this.imageUrl = imageUrl
        this.description = description
        this.id = id
    }

    id: string | undefined
    imageUrl: string
    description: string
}

export interface ImageInterface extends Image {}