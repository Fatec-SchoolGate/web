import { jsonToFormData } from "@/@core/utils/json-to-formdata";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useIsMutating, useMutation } from "react-query";
import { UpdateSubjectDto } from "../dto/updateSubjectDto";
import api from "@/configs/api";

const updateSubject = (updateSubjectDto: UpdateSubjectDto) => {
    const formData = jsonToFormData(updateSubjectDto);
    return api.put("subjects", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

const mutationKey = "update/subject";

export const useIsUpdatingSubject = () => useIsMutating({ mutationKey }) > 0;

export const useUpdateSubject = () => {
    const { t } = useTranslation();
    return useMutation(updateSubject, {
        mutationKey,
        onError: () => {
            toast.error(t("errorUpdateSubject"))
        }
    });
}