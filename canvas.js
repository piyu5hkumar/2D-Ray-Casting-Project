class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Wall {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }
    draw(canvasContext) {
        canvasContext.beginPath();
        canvasContext.moveTo(this.x1, this.y1)
        canvasContext.lineTo(this.x2, this.y2)
        canvasContext.strokeStyle = 'white'
        canvasContext.stroke()
    }
}

class LightSource {

    draw(canvasContext, walls, x, y) {

        this.center = new Point(x, y)

        canvasContext.clearRect(0, 0, innerWidth, innerHeight)

        for (let i = 0; i < walls.length; i++) {
            walls[i].draw(canvasContext)
        }

        for (let i = 0; i < 360; i += 0.5) {


            var rayLength = Math.sqrt(Math.pow(innerWidth, 2) + Math.pow(innerHeight, 2))
            var angleRadian = (Math.PI * i) / 180

            var rayStart = new Point(this.center.x, this.center.y)
            var rayEnd = new Point(rayStart.x + rayLength * Math.cos(angleRadian), rayStart.y + rayLength * Math.sin(angleRadian))

            canvasContext.beginPath()

            canvasContext.moveTo(rayStart.x, rayStart.y)

            for (var j = 0; j < walls.length; j++) {

                var A1 = new Point(walls[j].x1, walls[j].y1)
                var A2 = new Point(walls[j].x2, walls[j].y2)
                var B1 = new Point(this.center.x, this.center.y)
                var B2 = new Point(rayEnd.x, rayEnd.y)

                var intersectionPoint = intersection(A1, A2, B1, B2)

                if (intersectionPoint) {
                    if (distance(rayStart, intersectionPoint) < distance(rayStart, rayEnd)) {
                        rayEnd.x = intersectionPoint.x
                        rayEnd.y = intersectionPoint.y
                    }
                }
            }
            canvasContext.lineTo(rayEnd.x, rayEnd.y)
            canvasContext.strokeStyle = 'rgba(255, 255, 255, 0.3)'
            canvasContext.stroke()
        }

    }
}

function distance(p1, p2) {
    dist = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2))
    return dist
}


function intersection(A1, A2, B1, B2) {
    var den = (A1.x - A2.x) * (B1.y - B2.y) - (A1.y - A2.y) * (B1.x - B2.x)
    if (den == 0) {
        return false
    }

    var t = ((A1.x - B1.x) * (B1.y - B2.y) - (A1.y - B1.y) * (B1.x - B2.x)) / den
    var u = -((A1.x - A2.x) * (A1.y - B1.y) - (A1.y - A2.y) * (A1.x - B1.x)) / den

    if (0 <= t && t <= 1 && 0 <= u && u <= 1) {
        var intersectionX = A1.x + t * (A2.x - A1.x)
        var intersectionY = A1.y + t * (A2.y - A1.y)
        var pt = new Point(intersectionX, intersectionY)
        return pt
    } else {
        return false
    }

}



myCanvas = document.getElementsByTagName('canvas')[0]
myBody = document.getElementsByTagName('body')[0]
myBody.style.margin = '0px'


myCanvas.style.backgroundColor = 'black'
myCanvas.width = innerWidth
myCanvas.height = innerHeight
canvasContext = myCanvas.getContext('2d')


var walls = []
for (let i = 0; i < 6; i++) {
    var x1 = Math.random() * innerWidth
    var y1 = Math.random() * innerHeight
    var x2 = Math.random() * innerWidth
    var y2 = Math.random() * innerHeight
    walls.push(new Wall(x1, y1, x2, y2))
    // walls[i].draw(canvasContext)
}



ls = new LightSource()

document.onmousemove = function(e) {

    cursorX = e.pageX;
    cursorY = e.pageY;

    ls.draw(canvasContext, walls, cursorX, cursorY)
}