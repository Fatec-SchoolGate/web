import api from "@/configs/api"
import { useMutation } from "react-query";
import { AddMembersDto } from "../components/members/components/dto/add-members-dto";

const addMembers = (addMembersDto: AddMembersDto) => {
    return api.post("/organization-users/add-members", addMembersDto);
}

export const useAddMembers = () => {
    return useMutation(addMembers);
}