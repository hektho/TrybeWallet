export const requestApi = async () => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await request.json();
    console.log(result);
    return result;
}