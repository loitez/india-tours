import { User } from "../types";

export const getCurrentUser = (token: string): Promise<User> =>
	fetch("/api/auth/user", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((_) => _.user);
