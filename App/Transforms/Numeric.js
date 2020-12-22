
import numeral from 'numeral'

export function Desimal( number = 0 ){
    const desimal = numeral(number).format("0,0").split(",").join(".")
    return desimal
}

export function Currency( number = 0 ){
    const currency = numeral(number).format("0,0").split(",").join(".")
    return "Rp "+currency
}
