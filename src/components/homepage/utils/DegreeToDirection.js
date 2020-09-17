
export default function convertDegreeToDirection(deg){

  let val=parseInt((deg/22.5)+.5)
    let arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    return (arr[(val % 16)]);
}
