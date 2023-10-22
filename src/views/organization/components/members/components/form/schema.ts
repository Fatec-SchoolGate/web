import { array, object, string } from "yup";

export const addMembersSchema = object().shape({
    userIds: array().of(string().min(1, "requiredUserIds")).required("requiredUserIds")
});