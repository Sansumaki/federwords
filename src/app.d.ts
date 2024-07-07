// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type {APIUser} from "discord-api-types/v10";

declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			user: APIUser
		}
		declare module '@env' {
			export const DISCORD_OAUTH_CLIENT_ID: string;
			export const DISCORD_OAUTH_CLIENT_SECRET: string;
			export const DISCORD_REDIRECT_URI: string;
			export const PUBLIC_DISCORD_AUTH_URI: string;

			// other ones
		}
	}
}

export {};
