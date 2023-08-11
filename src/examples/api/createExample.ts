import { useMutation } from "react-query";
import api from "@/configs/api";
import { ExampleDto } from "../dto/exampleDto";

const createExample = (crateExample: ExampleDto) => api.post("/example");

export const useCreateExample = () => {
    return useMutation(createExample);
}