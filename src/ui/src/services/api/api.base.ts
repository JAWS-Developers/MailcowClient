import { APIResponse } from "../../types/api.types";

const API = "https://mailcow.jawsdevelopers.ch"

/**
 * 
 * @param auth auth is an object containing token
 * @param path path of the query
 * @param method method of the query
 * @param headers_values some additional header values
 * @param postData json data for post requests (Obj not string)
 * @returns 
 */
export const APIQuery = async (auth: { token: string }, path: string, method: 'POST' | 'GET', headers_values?: { name: string, value: string }[], postData?: "{}" | any): Promise<APIResponse> => {
    try {
        const response = await fetch(`${API}${path}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`,
                ...headers_values?.reduce((acc, { name, value }) => {
                    acc[name] = value;
                    return acc;
                }, {} as Record<string, string>)
            },
            body: JSON.stringify(postData)
        });

        return response.json();
    } catch (err) {
        return { error_code: "0", request_id: "", speed: "0" }
    }
}