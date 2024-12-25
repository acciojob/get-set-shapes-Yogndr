//complete this code
class Rectangle {
	
	constructor(width,height){
		this._height=height;
		this._width=width;
	}

	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea(){
		return this._width*this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		this._side=side;
		
	}
	getPerimeter(){
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
