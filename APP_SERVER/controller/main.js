let BookArray = [
  {
    name: "Real Dirty",
    type: "Fiction"
  },
  {
     name: "A Brief History of Time. by Stephen Hawking",
    type: "Non-Fiction"
  },
  {
       name: "Pride and Prejudice by Jane Austen",
    type: "Romance"
  }
];

const Booklist = function(req,res){
    res.render('list_display',{Books:BookArray});
};

const About = function(req,res){
    res.render('display');
};


module.exports = {
    Booklist,About
}
