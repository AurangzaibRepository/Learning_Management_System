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