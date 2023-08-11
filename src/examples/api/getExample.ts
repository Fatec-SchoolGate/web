import { useQuery } from "react-query";
import api from "@/configs/api";
import { isAxiosError } from "axios";

interface ExampleResponse {
    responseExample: string;
}

interface ExampleErrorResponse {
    error: string;
}

const getExample = () => api.get<ExampleResponse>("/example");

export const useExample = () => {
    return useQuery(["example"], getExample, {
        onSuccess: ({ data }) => {
            console.log(data.responseExample);
        },
        onError: (error) => {
            if (isAxiosError<ExampleErrorResponse>(error)) {
                console.log(error.response?.data.error);
            }
        }
    });
}