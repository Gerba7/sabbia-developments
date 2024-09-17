import { z } from "zod";


export const clientSchema = z.object({
    name: z.string().min(1, 'El nombre es un campo requerido'),
    email: z.string().min(1, 'El email es un campo requerido').email('Dirección de email inválida'),
    phone: z.coerce.number().min(1, 'El teléfono es un campo requerido'),
    message: z.string().min(1, 'El mensaje es un campo requerido'),
});
