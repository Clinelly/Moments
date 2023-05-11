import { rest } from "msw"

const baseURL = "https://drf-api-clinelly.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (res, req, ctx) => {
        return res(ctx.json())
    })
]