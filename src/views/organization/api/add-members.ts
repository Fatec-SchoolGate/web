import api from "@/configs/api"
import { useMutation } from "react-query";
import { AddMembersDto } from "../components/owner-container/members/dto/add-members-dto";

const addMembers = (addMembersDto: AddMembersDto) => {
    return api.post("/organization-users/add-members", addMembersDto);
}

export const useAddMembers = () => {
    return useMutation(addMembers);
}