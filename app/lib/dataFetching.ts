import { client } from '@/app/lib/sanity';

export async function getHeroImages() {
    const query = "*[_type == 'heroImages'][0]['images']";
    const data = await client.fetch(query);
    return data;
}