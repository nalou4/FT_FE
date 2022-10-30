const baseUrl = 'http://fitnesstrac-kr.herokuapp.com/api/';

export const callApi = async ({ method, path, token, body }) => {

    const options = {
        method: method ? method : "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };

    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    const result = await fetch(baseUrl + path, options);
    const data = await result.json();

    if (data.error) {
        throw data.error;
    }
    return data;
}