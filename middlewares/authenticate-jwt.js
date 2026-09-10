

export async function authenticateToken(request, response, next, auth) {
	const jwt = request.headers.authorization;
	if (!jwt) {
		response.status(401).json({message: "Usuário não autorizado"});
		return;
	}
	console.log(jwt);

	let decodedIdToken = "";
	try {
		decodedIdToken = await auth.verifyIdToken(jwt, true);
	} catch (e) {
		console.log(e);
		response.status(401).json({message: "Usuário não autorizado"});
		return;
	}
	
	request.user = {
		uid: decodedIdToken.sub
	}

	next();
}
