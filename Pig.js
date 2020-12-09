class Pig {

constructor(x,y) {

this.body = Bodies.rectangle(x, y, 50, 50)
World.add(world, this.body)

}

display() {

push()

translate(this.body.position.x, this.body.position.y)

rotate(this.body.angle)

rect(0, 0, 50, 50)

pop()

}





}