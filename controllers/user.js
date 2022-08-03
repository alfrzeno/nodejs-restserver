const { request,response } = require('express');

const usuariosGet = (req=request, res=response ) => {

    const { q="No defined", nombre, apikey} = req.query;

    res.json({
        msg: 'get API - Conreoller',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res=response ) => {

    const { id } = req.params;
    res.json({
        msg: 'put API - Conreoller',
        id
    });
}

const usuariosPost = (req, res=response ) => {

    res.json({
        msg: 'post API - Conreoller',
        body: req.body
    });
}

const usuariosDelete = (req, res=response ) => {

    res.json({
        msg: 'delete API - Conreoller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}