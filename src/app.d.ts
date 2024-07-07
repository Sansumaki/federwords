// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			session: {
				id: string;
			} | null;
		}

		interface PrivateEnv {
			MONGO_URI: string;
		}

		interface PublicEnv {
			ENVIRONMENT: 'DEV' | 'PROD';
		}
	}
}

export {};
