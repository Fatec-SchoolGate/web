export interface RegisterDto {
    profileImage: File | null;
    name: string;
    email: string;
    password: string;
}