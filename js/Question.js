class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
     


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
     this.Question = createElement('h3')
     this.options  = createElement('h4')
     this.input2 = createElement("Enter Your Answer");

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.


    this.Question.html( " 3. A girl fell off a 20-foot ladder. She wasn’t hurt. How?");
    this.Question.position(250, 0);
 
      this.input1.html("Answer She fell off the bottom step.");
      this.input1.position(150, 230);

      this.button.html(" Click here to")
      this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     this.mousePressed.html( "Thank You, Your Answer Has Been Submitted")
   
    })


  }
}
