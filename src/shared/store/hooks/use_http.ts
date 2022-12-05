export const useHttp = () => {
    const request = async (
        url: RequestInfo | URL,
        method = 'GET',
        body = null,
        headers = { 'Content-Type': 'application/json' },
    ) => {
        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (e) {
            throw e;
        }
    };

    return { request };
};

export const useHttpPostPut = () => {
    const request = async (
        url: RequestInfo | URL,
        method = 'POST',
        body: string,
        headers = { 'Content-Type': 'application/json' },
    ) => {
        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (e) {
            throw e;
        }
    };

    return { request };
};
