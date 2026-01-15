let studentidcard = {
    name : "Panther",
    age : 21,
    fathername : "big panther",
    rollno : "223",
    hobbies : ["coding","gaming"],

    greetingtwo : function(){
        console.log(`hi my name is ${this.name} and i am student at ${this.uni}`)
    },

    introduce : function(){
        console.log(" student intro")
        console.log("name: " + this.name)
        console.log("age: " + this.age)
        console.log("father name: " + this.fathername)
    },

    addhobby : function(newhobby){
        this.hobbies.push(newhobby)
        console.log("hobby " + newhobby + " has been added")
    }
}

// studentidcard.greeting()
studentidcard.greetingtwo()
studentidcard.introduce()
studentidcard.addhobby("football")
studentidcard.introduce()