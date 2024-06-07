'use server'


export const sendContactForm = async (data) => {
    const response = await fetch(`${process.env.URL}/api`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    });

    if (!response.ok) {
        console.log(`${process.env.URL}/api`)
        throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
}

export const createMessage = async (formData) => {
    const messageData = {};

    formData.forEach((value, key) => {
        messageData[key] = value;
    });

    console.log(messageData);

    return sendContactForm(messageData);
}



