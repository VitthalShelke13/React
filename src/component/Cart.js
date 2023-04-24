export default function Cart() {
    let value =15000;
    return(
        
        <div>
            total: {2+2}
            {<span>totals:{value}</span> /* always wrapwith parrent component when we use multiple component */}
            </div>
    )
}
// to solve the problem of wrapping of compenet we use fragment

