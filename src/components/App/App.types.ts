export interface ImageProps {
    id: string;
    urls: {
        [key:string]:string;
    };
    alt_description: string;
}