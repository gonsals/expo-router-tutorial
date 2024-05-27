

export const getData = async (name: string) => {
    try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${name}`);
        const json = await response.json();
        return json.results;
    } catch (error) {
        console.error(error);
    }
};
