import { data } from '../3/3-data'

type tree<T> = {
    '#': false
}
type path<t> = {
    '.': true
}

// [var[0][0]], [var[0][1]], [var[0][2]], [var[0][3]],
// [var[1][0]], [var[1][1]], var[1][2] [var[1][3]],
// [var[2][0]], [var[2][1]], [var[2][2]], [var[2][3]],

type hillside<T> = tree<string> & path<string>
const pathFinder = () => {

}
