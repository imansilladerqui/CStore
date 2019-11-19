const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid Format',
    '500': 'Internal Error'
}

exports.success = ((req, res, message, status) => {
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        status = 200;
    }
    if(!message) {
        statusMessages = statusMessages[status];
    }

    res.status(statusCode).send({
        error: '',
        body: statusMessage
    });
})

exports.error = ((req, res, message, status, details) => {
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        status = 500;
    }
    if(!message) {
        statusMessages = statusMessages[status];
    }
    console.error('[response error] ' + details);
    res.status(statusCode).send({
        error: statusMessage,
        body: ''
    });
})