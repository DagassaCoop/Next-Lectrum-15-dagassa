"use server";
import { LOGOUT } from "../constants/graphql/queries/logout";
import { revalidatePath } from "next/cache";
import { getClient } from "../lib/client";
export const logout = async (token: string) => {
    const graphqlClient = getClient();
    await graphqlClient.query({
        query: LOGOUT,
        context: {
            headers: {
                authorization: token ? `Bearer ${token}` : "",
            },
        },
    });
    revalidatePath("/");
};