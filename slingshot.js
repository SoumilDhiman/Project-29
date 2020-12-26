class Slingshot {

    constructor(bodyA,pointB) {

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
         this.pointB = pointB
         this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }

    flyOff () {

        this.chain.bodyA = null
    }
    
    attach(body) {

        this.chain.bodyA = body
    }

 display(){
 
     if(this.chain.bodyA) {

 var A = this.chain.bodyA.position
 var B = this.pointB
    push()
    stroke("brown")
    strokeWeight(2)
    line(B.x,B.y,A.x,A.y) 
    pop()
     }
 }

}








