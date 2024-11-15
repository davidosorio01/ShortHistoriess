import { redirect } from "@sveltejs/kit"

export const actions = {
    inicioSesion: async ({request}) => {
        const formData = await request.formData();
		const data = Object.fromEntries(formData);
		console.log(data);
        redirect(303,'/Libross')
    }

}

