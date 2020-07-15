class polygon{
    constructor(x, y, width, height) {
        this.visibility = 255
        var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':1.0
             
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
     score(){
         if(this.visibility < 0 && this.visibility > -800){
             score = score +1;
         }
     }
     
      display(){
       if(this.body.speed < 3){
          var pos = this.body.position;
          var angle = this.body.angle;
          rotate(angle);
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER);
          rect(0,0,this.width,this.height);
          pop();
          console.log(this.visibility);
       }
  
       else{ 
         World.remove(world,this.body);
         push();   
         this.visibility = this.visibility - 5;  
          pop();     
          }
    
    }

  }
  
  
