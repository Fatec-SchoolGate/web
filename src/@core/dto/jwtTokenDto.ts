import { UserDto } from "./userDto";

export interface JwtTokenDecodedDto {
    email: string;
    exp: number;
    iat: number;
    sub: string;
    user: UserDto;
}