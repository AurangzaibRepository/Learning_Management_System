exports.response = (res, status, message, data) => {
  const response = {
    status: status,
  };

  if (message) {
    response.message = message;
  }

  if (data) {
    response.data = data;
  }

  return res.send(response);
};

exports.validate = (data) => {
  const response = {
    valid: true,
    messages: [],
  };

  for (const key in data) {
    if (!data[key]) {
      response.messages.push(`${key} is required`);
      response.valid = false;
    }
  }

  return response;
};
