'use server'

import { clientSchema } from "./zod";


export const submitForm = async (formData) => {
    
    const clientData = clientSchema.safeParse(formData);

    if(!clientData.success) {
        return { errors: clientData.error.issues }
    } 
    
    const response = await fetch(process.env.URL + '/api/contact', {
        method: 'POST',
        body: JSON.stringify(clientData.data),
    });
    
    if (response.ok) {
        
        console.log('OK')

    } else {
    
        console.error('Error submitting form');

    }
    
    

}