async function get (request, response) {
    response.send('GET');
}

async function post (request, response){
    response.send('POST');
}

async function put (request, response){
    response.send('PUT');
}

async function delet (request, response){
    response.send('DELETE');
}

module.exports = {get, post, put, delet}