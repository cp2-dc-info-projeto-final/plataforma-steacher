module.exports = (app)=>{

    app.get('/home/controller', (req, resp) =>{
        console.log('Controller deve ser carregado!');
        resp.send();
    })

}

