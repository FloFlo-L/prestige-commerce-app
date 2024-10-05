import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
    useCdn: process.env.NODE_ENV === 'production'
}); 

const builder = imageBuilder(client);

export const urlFor = (source: any) => {
    return builder.image(source);
}