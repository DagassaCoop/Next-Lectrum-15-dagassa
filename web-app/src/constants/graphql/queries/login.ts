
import { gql } from '@apollo/client';
export const LOGIN = gql`
    query LOGIN($credentials: Credentials!) {
        login(credentials: $credentials) {
            data
        }
    }
`;
export interface Credentials {
    email: string;
    password: string;
}
export interface LoginResponse {
    login: {
        data: string; // The token returned by the login query
    };
}