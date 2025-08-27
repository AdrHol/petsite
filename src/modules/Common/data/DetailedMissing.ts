export interface DetailedMissing {
    id: string,
    title: string,
    subtitle: string,
    descirption: string,
    location?: {
        lon: number,
        lat: number,
        city: string
    }
    contact?: {
        email?: string,
        phone?: number,
    },
    img?: string,
    animalType?: string, 
    reportType?: string,
}