export default function kelvinToFahrenheit(kelvin){
    let f = 0;
    f = (kelvin) - 273.15 ;
    f *= (9/5);
    f += 32;

    return f.toFixed(2);
    
}