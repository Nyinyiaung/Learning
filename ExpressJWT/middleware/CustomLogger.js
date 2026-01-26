function customLogger(req, res , next){
    console.log(new Date(), req.method, req.url);
    next();
}

exports.logger = customLogger;