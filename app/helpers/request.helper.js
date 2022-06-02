exports.response = (res, status, message, data) => {

    let response = {
        status: status
    };

    if (message) {
        response.message = message;
    }

    if (data) {
        response.data = data;
    }

    return res.send(response);
}

exports.validate = (data) => {
    
    let response = {
        valid: true,
        messages: []
    };

    for (let key in data) {
        if (!data[key]) {
            response.messages.push(`${key} is required`);
            response.valid = false;
        }
    }

    return response;
}