export type CreateOrganizationDto = {
    name: string;
    address?: string;
    description?: string;
}//Type 'CreateOrganizationDto' is not assignable to type '{ name: string; address: string | undefined; description: string | undefined; }'.