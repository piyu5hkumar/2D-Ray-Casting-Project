class Wall{
	constructor(x1,y1 , x2,y2){
		this.x1 = x1
		this.y1 = y1
		this.x2 = x2
		this.y2 = y2
	}
	draw(canvasContext){
		canvasContext.beginPath();
		canvasContext.moveTo(this.x1, this.y1)
		canvasContext.lineTo(this.x2, this.y2)
		canvasContext.strokeStyle = 'white'
		canvasContext.stroke()
		console.log('hilloooo fraand')
	}
}


myCanvas = document.getElementsByTagName('canvas')[0]
myBody = document.getElementsByTagName('body')[0]
console.log(myCanvas)
myCanvas.style.backgroundColor = 'black'
myCanvas.width = innerWidth
myCanvas.height = innerHeight
canvasContext = myCanvas.getContext('2d')


var walls = []
for (let i = 0;i<5;i++){
	var x1 = Math.random() * innerWidth
	var y1 = Math.random() * innerHeight
	var x2 = Math.random() * innerWidth
	var y2 = Math.random() * innerHeight
	walls.push(new Wall(x1,y1,x2,y2))
	walls[i].draw(canvasContext)
}

