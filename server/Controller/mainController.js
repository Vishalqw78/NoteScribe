exports.home = async(req,res)=>{
        const locals = {
            title: "NoteScribe",
            description : "NodeJS Notes APP",
        };

        res.render('index',{
            locals,
            layout: '../views/layouts/frontpage'
        });
}
exports.about = async(req,res)=>{
    const locals = {
        title: "About NoteScribe",
        description : "NodeJS Notes APP",
    };

    res.render('about',locals);
}
exports.features = async(req,res)=>{
    const locals = {
        title: "Feautures : NoteScribe",
        description : "NodeJS Notes APP",
    };

    res.render('features',locals);
}