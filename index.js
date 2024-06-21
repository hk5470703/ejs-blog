import express from "express";
import ejs from "ejs"
import bodyParser from "body-parser";
import _ from "lodash";
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
const posts = [];
const homeContent =     "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit ";
                        
app.get('/', (req, res)=>{
    res.render('home',
         {
            homeContent: homeContent,
            posts: posts,
    });
})

app.get('/posts/:postName' , (req, res)=>{
    
    const postName = _.lowerCase(req.params.postName);
    

    posts.forEach(post=>{
        if (_.lowerCase(post.title) === postName) {
            res.render('post', {postTitle: post.title, postContent: post.message})
        }
    })
    // for(var i = 0; i < posts.length; i++){
    //     if(_.lowerCase(posts[i].title) === postName){
    //       res.render("post.ejs", {postTitle: posts[i].title, postContent: posts[i].message});
    //     }
    //   }
})

app.get('/contact', (req, res)=>{
    res.render('contact');
})

app.get('/about', (req, res)=>{
    res.render('about');
})
app.get('/compose', (req, res)=>{
    res.render("compose");
})
app.get('/post', (req, res)=>{
    res.render('post');
})
app.post('/check', (req, res)=>{
    const post = {
        title: req.body.title,
        message: req.body.message,
    }
posts.push(post);
  
    res.redirect('/');
})




app.listen(3000, ()=>{
    console.log("app is listening on port 3000");
})