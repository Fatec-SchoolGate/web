import { useMembersFromOrganization } from "@/views/organization/api/getMembersFromOrganization";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Control, Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props {
	name: Path<FieldValues>;
	label?: string;
	placeholder?: string;
}

const MembersSelect = (props: Props) => {
	const { name, label, placeholder } = props;

	const { control } = useFormContext();

	const { t } = useTranslation();

    const router = useRouter();
    const { organizationId } = router.query;

	const { data: response, isLoading } = useMembersFromOrganization(organizationId! as string);
	const members = response?.data.users ?? [];

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange }, fieldState: { error } }) => (
				<Autocomplete
					multiple
					disablePortal
					options={members}
					loading={isLoading}
					loadingText={t("loadingMembers")}
					onChange={(_, tags) => {
						onChange(tags.map((tag) => tag));
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							helperText={error ? t(error.message ?? "") : null}
							error={!!error}
							label={t(`${label}`) ?? ""}
							placeholder={t(`${placeholder}`) ?? ""}
						/>
					)}
				/>
			)}
		/>
	);
};

export default MembersSelect;
