import { CreateSubjectDto } from "@/@core/dto/subject/createSubjectDto";
import { jsonToFormData } from "@/@core/utils/json-to-formdata";
import api from "@/configs/api";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useIsMutating, useMutation } from "react-query";

const createSubject = (createSubjectDto: CreateSubjectDto) => {
    const formData = jsonToFormData(createSubjectDto);
    return api.post("subjects", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

const mutationKey = "create/subject";

export const useIsCreatingSubject = () => useIsMutating({ mutationKey }) > 0;

export const useCreateSubject = () => {
    const { t } = useTranslation();
    return useMutation(createSubject, {
        mutationKey,
        onError: () => {
            toast.error(t("errorCreateSubject"))
        }
    });
}