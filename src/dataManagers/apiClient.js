

const ApiClient = ({ primaryEndpoint }) => {
    let API_URL = import.meta.env.VITE_API_URL + 'api'; // Base API URL
    if (primaryEndpoint) {
        API_URL += `/${primaryEndpoint}`;  // /api/lists
    }

    let create = async (data) => {
        console.log("ApiClient create called with data:", data);
        try {
            fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => {
                if (!res.ok) {
                throw new Error(`Http error! status: ${res.status}`)
                }
            })
            .then(() => reset())
                .catch(err => {
                    console.error(`Error: ${err}`)
            })
        }
        catch (error) {
            console.error("Error in create:", error);
        }
    }

    let update = async (id, data) => {
        fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (!res.ok) {
            throw new Error(`Http error! status: ${res.status}`)
            }
        })
        .then(() => reset())
        .catch(err => {
            console.error(`Error: ${err}`)
            reset()
        })
    }
    
    return {
        create: create,
        update: update,
    };

}

export default ApiClient;
