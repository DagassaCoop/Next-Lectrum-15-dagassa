import {headers} from 'next/headers';

export const getBaseURL = async () => {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const currentUrl = `${protocol}://${host}`;
    return currentUrl
}