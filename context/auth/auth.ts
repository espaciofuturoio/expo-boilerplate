import type { LoginProvider } from "@/libs/types";

export const connect = async (providerName: LoginProvider) => {
	return { email: "test@test.com" };
};

export const disconnect = async () => Promise.resolve();

export const isSessionActive = async () => {
	return { email: "test@test.com" };
};
