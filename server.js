//  controle+C permet de stopper le serveur

var express=require('express'); // Get request
var app=express();
var PORT = 3000;
var middleware={
   requiredAuthentification:function(req,res,next){
	console.log('router private hit');
	next();
   },
   logger:function(req,res,next){
    // new Date().toString
	
	console.log('Request :'+new Date().toString()+req.method + '' + req.originalUrl);
	next();
   }
};
	app.use(middleware.logger);
	//app.use(middleware.requiredAuthentification);

/*app.get('/',function(req,res){
   res.send('Express en action!!!');
}); */ // En supp cette partie, le serveur lance automatiquement le code de la ligne 16 (autrement dit le premier app.use qu'il rendre dans le doc)

// A propos
app.get('/about',middleware.requiredAuthentification,function(req,res){ // une function présenter comme ci est une fonction anonyme
   res.send('About en action!');
});
// A propos de nous
/* app.get('/about us',function(req,res)

   res.send('A propos de nous  en action');
}); */
// je spécifie le dossier contenant le doc html à afficher
app.use(express.static(__dirname + '/public'));
//console.log(__dirname); // Permet d'afficher le repertoire courant.

/*app.listen(3000, function(){
 console.log('Server express démarré!');
});*/  // Le port d'écoute et éventuellement une fonction anonyme.

// Autre façon d'utiliser app.listen
app.listen(PORT, function(){
 console.log('Server express démarré sur le port '+ PORT+'!');
});






