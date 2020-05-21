// class Wall{
// 	constructor(x1,y1 , x2,y2){
// 		this.x1 = x1
// 		this.y1 = y1
// 		this.x2 = x2
// 		this.y2 = y2
// 	}
// 	draw(canvasContext){
// 		canvasContext.beginPath();
// 		canvasContext.moveTo(this.x1, this.y1)
// 		canvasContext.lineTo(this.x2, this.y2)
// 		canvasContext.strokeStyle = 'white'
// 		canvasContext.stroke()
// 	}
// }

class LightSource{

	draw(canvasContext,x,y){

		canvasContext.clearRect(0,0,innerWidth,innerHeight)
		
		for(let i = 0;i<360;i+=1){
			

			this.centerX = x
			this.centerY = y

			var rayLength = Math.sqrt(Math.pow(innerWidth,2)+Math.pow(innerHeight,2))

			canvasContext.beginPath()
			canvasContext.moveTo(this.centerX,this.centerY)
			var angleRadian = (Math.PI * i)/180
			canvasContext.lineTo(this.centerX + rayLength*Math.cos(angleRadian),this.centerY+ rayLength*Math.sin(angleRadian))
			canvasContext.strokeStyle = 'rgba(255, 0, 0, 0.5)'
			canvasContext.stroke()
		}

	}
}

myCanvas = document.getElementsByTagName('canvas')[0]
myBody = document.getElementsByTagName('body')[0]
myCanvas.style.backgroundColor = 'black'
myCanvas.width = innerWidth
myCanvas.height = innerHeight
canvasContext = myCanvas.getContext('2d')


// var walls = []
// for (let i = 0;i<5;i++){
// 	var x1 = Math.random() * innerWidth
// 	var y1 = Math.random() * innerHeight
// 	var x2 = Math.random() * innerWidth
// 	var y2 = Math.random() * innerHeight
// 	walls.push(new Wall(x1,y1,x2,y2))
// 	walls[i].draw(canvasContext)
// }



ls = new LightSource()

document.onmousemove = function(e){

    cursorX = e.pageX;
    cursorY = e.pageY;
	
	ls.draw(canvasContext,cursorX,cursorY)
}