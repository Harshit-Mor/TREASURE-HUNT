class Security {

    constructor(){

        // Add code to create the input and button elements
        this.input = createInput("Code1");
        this.input = createInput("Code1");
        this.input = createInput("Code1");

        this.button1 = createButton('Check');
        this.button2 = createButton('Check');
        this.button3 = createButton('Check');


    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(()=> {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(()=> {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(()=> {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
        


    }
}