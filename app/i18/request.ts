import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async (): Promise<any> => {
    // Obtener el locale de las cookies
    const locale = cookies().get("locale")?.value.split("-")[0] || 'es';

   
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});

