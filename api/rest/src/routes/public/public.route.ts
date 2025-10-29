// import { cookieAgeSession, cookieAgeUser, cookieKeySession, cookieKeyUser } from "@repo/config-static";
// import { jwtSignSession, jwtSignUser } from "@repo/jwt";
// import { setCookie } from "hono/cookie";
import { modelUserGetList } from "@repo/db";
import { onResponseOk } from "@repo/types/helpers";
import { loginValidator, validator } from "@repo/validator";
import { Hono } from "hono";

export const publicRoutes = new Hono();

publicRoutes.get("/test", async (ctx) => {
	// const jwt = await jwtSignSession({ id: 88, ip: "22" });
	// const tokenUser = await jwtSignUser({ name: "oooo", id: 852 });

	// setCookie(ctx, cookieKeySession, jwt, { maxAge: cookieAgeSession });
	// setCookie(ctx, cookieKeyUser, tokenUser, { maxAge: cookieAgeUser });

	const validData = validator({ data: {}, schema: loginValidator.base });
	const users = await modelUserGetList({ skip: 0, take: 100 });

	return ctx.json(onResponseOk({ data: { validData, users }, message: ["it is OK"] }));
});
