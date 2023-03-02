// -------------------Setting up Express server-------------

// const express=require("express");
// const port=2000;
// const app=express();
// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );



// --------------------------Returning response from the server-----------------

// const express=require("express");
// const port=2000;
// const app=express();
// app.get("/",function(req,res)
//             {
//                 res.send("<pre>Cool This     is           the home page</pre>");
//             }   
//         );

// app.get("/profile",function(req,res){
//     res.send("Cool This     is           the profile page");
// })


// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );



// -----------------------------------Setting up a Template Engine--------------

// const express=require("express");
// const path=require('path');
// const port=2000;
// const app=express();
// app.set('view engine','ejs');      // This line is basically setting a {key:value} pair in the app object where
//                                      //  view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('views',path.join(__dirname,'views'));
// app.get("/",function(req,res)
//             {
//                 return res.render('home');          // don't forget to write the return keyword
//             }   
//         );

// app.get("/profile",function(req,res){
//     res.send("Cool This     is           the profile page");
// })


// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );




// ----------------------------------------------Rendering our first page----------------------------------

// const express=require("express");
// const path=require('path');
// const port=2000;
// const app=express();
// app.set('view engine','ejs');           // This line is basically setting a {key:value} pair in the app object where
//                                         //  view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('views',path.join(__dirname,'views'));

// app.get("/",function(req,res)           // This is the creation of the controller
//             {
//                 return res.render('home',{title:"MyList"});          // don't forget to write the return keyword
//             }   
//         );

// app.get("/profile",function(req,res){   // This is the creation of the controller
//     res.send("Cool This     is           the profile page");
// })


// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );



// -------------------------------Playing with Ejs-----------------
// const express=require("express");
// const path=require('path');
// const port=2000;
// const app=express();
// app.set('view engine','ejs');           // This line is basically setting a {key:value} pair in the app object where
//                                         //  view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('views',path.join(__dirname,'views'));
  


// app.get("/",function(req,res)           // This is the creation of the controller
//             {
//                 return res.render('home',{title:"MyList"});          // don't forget to write the return keyword
//             }   
//         );

// app.get("/practice",function(req,res){   // This is the creation of the controller
//     return res.render("practice",{title:"Just fun"});
// });


// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );



// ----------------------------------- Creating a Contact list-------------------------------

// const express=require("express");
// const path=require('path');
// const port=9000;
// const app=express();
// app.set('view engine','ejs');           // This line is basically setting a {key:value} pair in the app object where
//                                         //  view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('views',path.join(__dirname,'views'));

// var contactList=[
//     {
//         name:"Aman",
//         phone:9839,
//     },
//     {
//         name:"Ayush",
//         phone:700764
//     }
// ];
  


// app.get("/",function(req,res)           // This is the creation of the controller
//             {
//                 return res.render('home',{
//                     title:"MyList",
//                     contact_list:contactList

//                 });          // don't forget to write the return keyword
//             }   
//         );

// app.get("/practice",function(req,res){   // This is the creation of the controller
//     return res.render("practice",{title:"Just fun"});
// });


// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );




// ------------------------- Sending data to the server----------------------------------------

// const express=require("express");
// const path=require('path');
// const port=9000;
// const app=express();
// app.set('view engine','ejs');           // This line is basically setting a {key:value} pair in the app object where
//                                         //  view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('views',path.join(__dirname,'views'));

// var contactList=[
//     {
//         name:"Aman",
//         phone:9839,
//     },
//     {
//         name:"Ayush",
//         phone:700764
//     }
// ];
  


// app.get("/",function(req,res)           // This is the creation of the controller
//             {
//                 return res.render('home',{
//                     title:"MyList",
//                     contact_list:contactList

//                 });          // don't forget to write the return keyword
//             }   
//         );

// app.get("/practice",function(req,res){   // This is the creation of the controller
//     return res.render("practice",{title:"Just fun"});
// });


// app.post('/create-contact',function(req,res){       //This is also the creation of the controller

//     return res.redirect("/practice");
// });

// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );





// -------------------------  Parsing form data-Storing the Contact----------------

// const express=require("express");
// const path=require('path');
// const port=9000;
// const app=express();
// // below line is basically setting a {key:value} pair in the app object where
// // view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('view engine','ejs');           
// app.set('views',path.join(__dirname,'views'));
// // Below code is a middleware
// app.use(express.urlencoded());         

// var contactList=[
//     {
//         name:"Aman",
//         phone:9839,
//     },
//     {
//         name:"Ayush",
//         phone:700764
//     }
// ];
  


// app.get("/",function(req,res)           // This is the creation of the controller
//             {
//                 return res.render('home',{
//                     title:"MyList",
//                     contact_list:contactList

//                 });          // don't forget to write the return keyword
//             }   
//         );

// app.get("/practice",function(req,res){   // This is the creation of the controller
//     return res.render("practice",{title:"Just fun"});
// });


// app.post('/create-contact',function(req,res){       //This is also the creation of the controller
//     console.log(req.body);
//     console.log(req.body.name);
//     console.log(req.body.phone);
//     // console.log(req.body.ph);
//     // contactList.push(
//     //     {
//     //         name:req.body.name,
//     //         phone:req.body.phone
//     //     }
//     // )
//     contactList.push(req.body);


//     return res.redirect("back");
// });

// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );




// -------------------------------Middlewares------------------------
//    const express=require("express");
//    const path=require('path');
//    const port=9000;
//    const app=express();
//    // below line is basically setting a {key:value} pair in the app object where
//    // view engine corresponds to the key and ejs corresponds to the value.---- OK :)
//    app.set('view engine','ejs');           
//    app.set('views',path.join(__dirname,'views'));
//    // Below code is a middleware
//    app.use(express.urlencoded());         
  

   
//    var contactList=[
//        {
//            name:"Aman",
//            phone:9839,
//        },
//        {
//            name:"Ayush",
//            phone:700764
//        }
//    ];
     
   
   
//    app.get("/",function(req,res)           // This is the creation of the controller
//                {
//                    return res.render('home',{
//                        title:"MyList",
//                        contact_list:contactList
   
//                    });          // don't forget to write the return keyword
//                }   
//            );
   
//    app.get("/practice",function(req,res){   // This is the creation of the controller
//        return res.render("practice",{title:"Just fun"});
//    });
   
   
//    app.post('/create-contact',function(req,res){       //This is also the creation of the controller
//        console.log(req.body);
//        console.log(req.body.name);
//        console.log(req.body.phone);
//        // console.log(req.body.ph);
//        // contactList.push(
//        //     {
//        //         name:req.body.name,
//        //         phone:req.body.phone
//        //     }
//        // )
//        contactList.push(req.body);
   
   
//        return res.redirect("back");
//    });
   
//    app.listen(port,function(err)
//        {
//            if(err)
//            {
//                console.log("Error in running the server",err);
//            }
//            console.log("Yes! the Express server is running on port:",port);
//        }
//    );


// --------------------------------Let's make some middlewares-----------------------------------
// const express=require("express");
// const path=require('path');
// const port=9000;
// const app=express();
// // below line is basically setting a {key:value} pair in the app object where
// // view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('view engine','ejs');           
// app.set('views',path.join(__dirname,'views'));
// // Below code is a middleware
// app.use(express.urlencoded()); 

// // middleware 1
// app.use(function(req,res,next){
//     // Just a statement to see that middleware is running
//     console.log("middleware 1 called");
//     // To move on the control 
//     next();
// })

// // middleware 2
// app.use(function(req,res,next){
//     console.log("middleware 2 called");
//     next();
// })


// var contactList=[
//     {
//         name:"Aman",
//         phone:9839,
//     },
//     {
//         name:"Ayush",
//         phone:700764
//     }
// ];
  


// app.get("/",function(req,res)           // This is the creation of the controller
//             {
//                 return res.render('home',{
//                     title:"MyList",
//                     contact_list:contactList

//                 });          // don't forget to write the return keyword
//             }   
//         );

// app.get("/practice",function(req,res){   // This is the creation of the controller
//     return res.render("practice",{title:"Just fun"});
// });


// app.post('/create-contact',function(req,res){       //This is also the creation of the controller
//     console.log(req.body);
//     console.log(req.body.name);
//     console.log(req.body.phone);
//     // console.log(req.body.ph);
//     // contactList.push(
//     //     {
//     //         name:req.body.name,
//     //         phone:req.body.phone
//     //     }
//     // )
//     contactList.push(req.body);


//     return res.redirect("back");
// });

// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );



// --------------------------------Accessing static files---------------------------
// const express=require("express");
// const path=require('path');
// const port=9000;
// const app=express();
// // below line is basically setting a {key:value} pair in the app object where
// // view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('view engine','ejs');           
// app.set('views',path.join(__dirname,'views'));
// // Below code is a middleware
// app.use(express.urlencoded()); 
// app.use(express.static("./assets"));




// var contactList=[
//     {
//         name:"Aman",
//         phone:9839,
//     },
//     {
//         name:"Ayush",
//         phone:700764
//     }
// ];
  


// app.get("/",function(req,res)           // This is the creation of the controller
//             {
//                 console.log("get controller");
//                 return res.render('home',{
//                     title:"MyList",
//                     contact_list:contactList

//                 });          // don't forget to write the return keyword
//             }   
//         );

// app.get("/practice",function(req,res){   // This is the creation of the controller
//     return res.render("practice",{title:"Just fun"});
// });


// app.post('/create-contact',function(req,res){ 
    
//     contactList.push(req.body);


//     return res.redirect("back");
// });

// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );




// -------------------------------Deleting a contact using a delete button-----------------
// const express=require("express");
// const path=require('path');
// const port=9000;
// const app=express();
// // below line is basically setting a {key:value} pair in the app object where
// // view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('view engine','ejs');           
// app.set('views',path.join(__dirname,'views'));
// // Below code is a middleware
// app.use(express.urlencoded()); 
// app.use(express.static("./assets"));




// var contactList=[
//     {
//         name:"Aman",
//         phone:9839,
//     },
//     {
//         name:"Ayush",
//         phone:700764
//     }
// ];
  


// app.get("/",function(req,res)           // This is the creation of the controller
//             {
//                 // console.log("get controller");
//                 return res.render('home',{
//                     title:"MyList",
//                     contact_list:contactList

//                 });          // don't forget to write the return keyword
//             }   
//         );

// app.get("/practice",function(req,res){   // This is the creation of the controller
//     return res.render("practice",{title:"Just fun"});
// });
// // --------------creating a controller for the delete functionality using string params
// // app.get("/delete-contact/:phone",function(req,res){
// // // This is the variable to store the value that is to be 
// // // deleted when the delete button is clicked
// // // The value -> paramm.phone is being read by express and hence we are able to use it
// //     console.log(req.params);
// //     let phone=req.params.phone;
// // })

 
// // -----------------creating a controller for the delete functionality using query params
// app.get("/delete-contact/",function(req,res){
//     // This is the variable to store the value that is to be 
//     // deleted when the delete button is clicked
//     // The value -> query.phone is being read by express and hence we are able to use it
//         console.log(req.query);
//         let phone=req.query.phone;

//         let contactIndex=contactList.findIndex(contact=>contact.phone==phone);

//         if(contactIndex!=-1){
//             contactList.splice(contactIndex,1);
//         }
//         return res.redirect('back');

//     })
    

// app.post('/create-contact',function(req,res){ 
    
//     contactList.push(req.body);


//     return res.redirect("back");
// });

// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );





// // -------------------------------Connecting to MongoDB using mongoose-----------------
// const express=require("express");
// const path=require('path');
// const port=9000;


// const db=require("./config/mongoose")

// const Contact=require("./models/contact");



// const app=express();
// // below line is basically setting a {key:value} pair in the app object where
// // view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('view engine','ejs');           
// app.set('views',path.join(__dirname,'views'));
// // Below code is a middleware
// app.use(express.urlencoded()); 
// app.use(express.static("./assets"));




// var contactList=[
//     {
//         name:"Aman",
//         phone:9839,
//     },
//     {
//         name:"Ayush",
//         phone:700764
//     }
// ];
  


// app.get("/",function(req,res)           
//             {
                
//                 return res.render('home',{
//                     title:"MyList",
//                     contact_list:contactList

//                 });        
//             }   
//         );

// app.get("/practice",function(req,res){  
//     return res.render("practice",{title:"Just fun"});
// });

// app.get("/delete-contact/",function(req,res){
//         console.log(req.query);
//         let phone=req.query.phone;

//         let contactIndex=contactList.findIndex(contact=>contact.phone==phone);

//         if(contactIndex!=-1){
//             contactList.splice(contactIndex,1);
//         }
//         return res.redirect('back');

//     })
    

// app.post('/create-contact',function(req,res){ 
    
//     // contactList.push(req.body);
//     Contact.create({
//         name:req.body.name,
//         phone:req.body.phone
//     },function(err,newContact){
//         if(err)
//         {
//             console.log("Error in creating a contact");
//             return;
//         }
//         console.log("#######",newContact);
//         return res.redirect("back");
//     });

    
// });

// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );





// // -------------------------------Fetching the data fron the DataBase-----------------
// const express=require("express");
// const path=require('path');
// const port=9000;


// const db=require("./config/mongoose")

// const Contact=require("./models/contact");



// const app=express();
// // below line is basically setting a {key:value} pair in the app object where
// // view engine corresponds to the key and ejs corresponds to the value.---- OK :)
// app.set('view engine','ejs');           
// app.set('views',path.join(__dirname,'views'));
// // Below code is a middleware
// app.use(express.urlencoded()); 
// app.use(express.static("./assets"));




// var contactList=[
//     {
//         name:"Aman",
//         phone:9839,
//     },
//     {
//         name:"Ayush",
//         phone:700764
//     }
// ];
  


// app.get("/",function(req,res)           
//             {
                
//                 Contact.find({},function(err,contacts){
//                     if(err){
//                         console.log("Error in fetching contact from the dataBase");
//                         return;
//                     }
//                     return res.render('home',{
//                         title:"MyList",
//                         contact_list:contacts
    
//                     }); 

//                 });



                      
//             }   
//         );

// app.get("/practice",function(req,res){  
//     return res.render("practice",{title:"Just fun"});
// });

// app.get("/delete-contact/",function(req,res){
//         // console.log(req.query);

//         let phone=req.query.phone;

//         let contactIndex=contactList.findIndex(contact=>contact.phone==phone);

//         if(contactIndex!=-1){
//             contactList.splice(contactIndex,1);
//         }
//         return res.redirect('back');

//     })
    

// app.post('/create-contact',function(req,res){ 
    
//     // contactList.push(req.body);
//     Contact.create({
//         name:req.body.name,
//         phone:req.body.phone
//     },function(err,newContact){
//         if(err)
//         {
//             console.log("Error in creating a contact");
//             return;
//         }
//         console.log("#######",newContact);
//         return res.redirect("back");
//     });

    
// });

// app.listen(port,function(err)
//     {
//         if(err)
//         {
//             console.log("Error in running the server",err);
//         }
//         console.log("Yes! the Express server is running on port:",port);
//     }
// );






// -------------------------------Deleting the data from the DataBase-----------------
const express=require("express");
const path=require('path');
const port=9000;


const db=require("./config/mongoose")

const Contact=require("./models/contact");



const app=express();
// below line is basically setting a {key:value} pair in the app object where
// view engine corresponds to the key and ejs corresponds to the value.---- OK :)
app.set('view engine','ejs');           
app.set('views',path.join(__dirname,'views'));
// Below code is a middleware
app.use(express.urlencoded()); 
app.use(express.static("./assets"));




var contactList=[
    {
        name:"Aman",
        phone:9839,
    },
    {
        name:"Ayush",
        phone:700764
    }
];
  


app.get("/",function(req,res)           
            {
                
                Contact.find({},function(err,contacts){
                    if(err){
                        console.log("Error in fetching contact from the dataBase");
                        return;
                    }
                    return res.render('home',{
                        title:"MyList",
                        contact_list:contacts
    
                    }); 

                });



                      
            }   
        );

app.get("/practice",function(req,res){  
    return res.render("practice",{title:"Just fun"});
});

app.get("/delete-contact/",function(req,res){
        // console.log(req.query);

        // get the id from the query in the url

        let id=req.query.id;

        // Find the contact in the database using the id and delete it 
         
        Contact.findByIdAndDelete(id,function(err){
            if(err)
            {
                console.log("Error in deleting an object from the Database");
                return;
            }
            return res.redirect('back');
            // return res.status(200).json({
            //     msg:"contact deleted"
            // })
        }); 

    });


app.post('/create-contact',function(req,res){ 
    
    // contactList.push(req.body);
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err)
        {
            console.log("Error in creating a contact");
            return;
        }
        console.log("#######",newContact);
        return res.redirect("back");
    });

    
});

app.listen(port,function(err)
    {
        if(err)
        {
            console.log("Error in running the server",err);
        }
        console.log("Yes! the Express server is running on port:",port);
    }
);