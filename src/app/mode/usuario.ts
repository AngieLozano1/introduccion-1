export interface usuario
{
    name:string,
    lastname:string,
    age: number,
    address:string,
    height:number,
    company: company
    
}
let usuario = {
    name:"Elon",
    lastname:"Musk",
    age:48,
    address:"Boston Street",
    height:182
}
export interface company
{
    name:string
    value:number
    location:Location
}
let company ={
    name:"Tesla",
    value:1000000000,
}
export interface location
{
    lat: string
    lon: string
}
let location ={
    lat: "55.87611",
    lon:"-2365899"
}