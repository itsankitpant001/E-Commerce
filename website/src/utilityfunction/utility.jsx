import { useSelector } from "react-redux";

export function total(price,quantity)
{
    let result=price*quantity;
    return result.toFixed(2);
}
export function discountedprice(price,discountPercentage)
{
    let result=(price*(100-discountPercentage))/100
    return result.toFixed(2);
}
export function totalcartprice(cartarray)
{
    let price=10;
    for(let e of cartarray)
    {
        
        price+=parseFloat(total(discountedprice(e.product.price,e.product.discountPercentage),e.quantity))
    }
    return price.toFixed(0)
}
export function subtotalcartprice(cartarray)
{
    let price=0;
    for(let e of cartarray)
    {
        
        price+=parseFloat(total(discountedprice(e.product.price,e.product.discountPercentage),e.quantity))
    }
    return price.toFixed(2)
}

