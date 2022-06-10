type Start = {
    x: number,
    y: number
}
type End = {
    x2: number,
    y2: number
}
type Line = Start & End
class Point {
    private _x_coordinate: number
    private _y_coordinate: number

    constructor(x_coordinate: number, y_coordinate: number) {
        this._x_coordinate = x_coordinate;
        this._y_coordinate = y_coordinate;
    }

    get x_coordinate(): number {
        return this._x_coordinate;
    }

    get y_coordinate(): number {
        return this._y_coordinate;
    }

    public getPosition(): [number, number] {
        return [this._x_coordinate, this._y_coordinate]
    }
}
class Edge {
    private _source: Point
    private _destination: Point

    constructor(source: Point, destination: Point) {
        this._source = source;
        this._destination = destination;
    }

    get source(): Point {
        return this._source;
    }

    get destination(): Point {
        return this._destination;
    }

    getTrajectory() {
        
    }

}

const populateEmptyGraph = () => {
    let graph: number[][] = [[]]
    for(let row = 0; row < 1000; row++) {
        for(let column = 0; column < 1000; column++) {
            graph[row].push(0)
        }
    }
    return graph
}

function create2DArray(numRows: number, numColumns: number) {
    let array = new Array(numRows)
    for (let i = 0; i < numColumns; i++) {
        array[i] = new Array(numColumns)
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            array[i][j] = 0
        }
    }
    return array
}

const g = create2DArray(1000, 1000)
console.log(g)
