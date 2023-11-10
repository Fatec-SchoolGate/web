import { UserDto } from "@/@core/dto/userDto";
import { useNonMembers } from "@/views/organization/api/get-non-members";
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
	const { name, label = "Members", placeholder = "Members" } = props;

	const { control } = useFormContext();

	const { t } = useTranslation();

    const router = useRouter();
    const { organizationId } = router.query;

	const { data: response, isLoading } = useNonMembers(organizationId! as string);

	const nonMembers = response?.data.nonMembers ?? [];

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange }, fieldState: { error } }) => (
				<Autocomplete
					multiple
					disableCloseOnSelect
					limitTags={1}
					disablePortal
					options={nonMembers}
					loading={isLoading}
					loadingText={t("loadingMembers")}
					noOptionsText={t("noUsersFound")}
					onChange={(_, members) => {
						onChange(members.map((member) => member.id));
					}}
					getOptionLabel={(option) => option.name}
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
