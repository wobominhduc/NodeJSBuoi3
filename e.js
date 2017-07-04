/*
Class Point -> x va y
Class Line -> PointA, PointB
*/
function Point(x, y){
    this.x = x;
    this.y = y;
}
function Line(pointA, pointB){
    this.pointA = pointA;
    this.pointB = pointB;
    this.getLenght = function(){
        const dx = Math.pow(this.pointB.x-this.pointA.x, 2);
        const dy = Math.pow(this.pointB.y-this.pointA.y, 2);
        return kq = Math.sqrt(dx+dy);
    }
}

function Triangle(pointA, pointB, pointC){
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
    this.getCV = function(){  //Tinh chu vi tam giac
        const lineAB = new Line(this.pointA, this.pointB);
        const lineBC = new Line(this.pointB, this.pointC);
        const lineCA = new Line(this.pointC, this.pointA);
        return lineAB.getLenght() + lineBC.getLenght() + lineCA.getLenght();
    }

}
const diemA = new Point(0,0);
const diemB = new Point(0,10);
const diemC = new Point(10,10);
const lineAB = new Line(diemA, diemB);
const tg = new Triangle(diemA, diemB, diemC);
console.log(lineAB.getLenght());
console.log(tg.getCV());