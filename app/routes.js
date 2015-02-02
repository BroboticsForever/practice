module.exports = function(app) {
    //
    //Server Routes
    //
    
    
    
    //
    //Front End Routes
    //

    //Route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('./public/index.html');
    });
}
