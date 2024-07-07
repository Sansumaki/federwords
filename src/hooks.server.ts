import { fetchSession } from '$lib/utils/sessionHandler';
import type { Handle } from '@sveltejs/kit';
import { themes } from '$lib/utils/themes';

import mongoose from "mongoose";
import {MongoMemoryServer} from "mongodb-memory-server";


mongoose.set('strictQuery', false);

const mongod = new MongoMemoryServer();
await mongod.start();
const uri = mongod.getUri();

await mongoose.connect(uri);

export const handle = (async ({ event, resolve }) => {
	const sessionID = event.cookies.get('session_id');;
	const theme = event.cookies.get('theme');

	event.locals.session = null;

	if (sessionID) {
		const session = fetchSession(sessionID);
		if (session)
			event.locals.session = { id: sessionID };
	}

	if (theme && themes.includes(theme)) return await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('data-theme=""', `data-theme="${theme}"`)
	})

	return await resolve(event);
}) satisfies Handle;
