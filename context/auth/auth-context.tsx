import type { Profile } from "@/libs/types";
import type { LoginProvider } from "@/libs/types";
import { router } from "expo-router";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import useEffectOnce from "react-use/lib/useEffectOnce";
import { connect, disconnect, isSessionActive } from "./auth";

interface AuthContextType {
	profile: Profile | null;
	login: (provider?: LoginProvider) => Promise<void>;
	logout: () => void;
	error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [profile, setProfile] = useState<Profile | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffectOnce(() => {
		const initSession = async () => {
			const prevProfile = await isSessionActive();
			if (prevProfile) {
				setProfile(prevProfile);
				setError(null);
			} else {
				router.replace("/");
			}
		};
		initSession().catch(console.error);
	});

	const login = async (provider?: LoginProvider) => {
		try {
			if (!provider) throw new Error("No provider provided");
			const profile = await connect(provider);
			setProfile(profile);
			setError(null);
		} catch (err) {
			const message = (err as Error).message;
			if (message.includes("Nostr key")) {
				setError("nostrKeyError");
			} else if (message.includes("is not defined")) {
				setError("unsupportedWalletError");
			} else {
				setError("genericError");
			}
			console.error("Error connecting wallet", err);
			throw err;
		}
	};

	const logout = () => {
		setProfile(null);
		disconnect();
	};

	const auth: AuthContextType = { profile, login, logout, error };

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
