import { json } from '@sveltejs/kit';
import cookie from 'cookie';
import {UserModel} from "$lib/models/user";
import hashPassword from "$lib/utils/hashPassword";
import {createSession} from "$lib/utils/sessionHandler";
import { PUBLIC_ENVIRONMENT } from '$env/static/public';

interface IBody {
	email: string;
	password: string;
}

export async function POST({ request }) {
	const body: IBody = await request.json();

	const User = await UserModel.findOne({
		email: body.email,
		password: hashPassword(body.password)
	});

	if (!User)
		return json({ error: 'Invalid email or password' }, {
			status: 400
		});

	const newSessionId = createSession(User._id);

	return json({}, {
		headers: {
			'Set-Cookie': cookie.serialize('session_id', newSessionId, {
				httpOnly: true,
				sameSite: 'lax',
				secure: false,
				path: '/',
				domain: PUBLIC_ENVIRONMENT === 'DEV' ? '' : "DOMAIN_HERE",
				maxAge: 60 * 60 * 24 * 7 // one week
			})
		}
	});
}
