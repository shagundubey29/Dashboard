import visit from "../assets/img/visits.png";
import cart from "../assets/img/cart.png";
import bag from "../assets/img/bag.png";
import search from "../assets/img/search.png";
import click from "../assets/img/click.png";

const Widget = ({type}) => {
    let data;
    switch(type){
        case "search visit":
            data = {
                title: "search visits",
                count: "27,059",
                icon: <img src={visit} alt="clicking icon" className="border-2 p-1 rounded-lg bg-slate-100 h-[35px] w-[35px]"/>,
            };
            break;
        case "search queries":
            data = {
                title: "search queries",
                count: "40,940",
                icon: <img src={search} alt="search icon" className="border-2 p-1 rounded-lg bg-slate-100 h-[35px] w-[35px]"/>,
            };
            break;
        case "product views":
            data = {
                title: "product views",
                count: "61,901",
                icon: <img src={click} alt="clicking icon" className="border-2 p-1 rounded-lg bg-slate-100 h-[35px] w-[35px]"/>,
            };
            break;
        case "add to cart":
            data = {
                title: "add to cart",
                count: "31,016",
                icon: <img src={cart} alt="cart icon" className="border-2 p-1 rounded-lg bg-slate-100 h-[35px] w-[35px]"/>,
            };
            break;
        case "units sold":
            data = {
                title: "units sold",
                count: "4,973",
                icon: <img src={bag} alt="shopping bag icon" className="border-2 p-1 rounded-lg bg-slate-100 h-[35px] w-[35px]"/>,
            };
        break;    
        default:
            break;
    }
    return (
            <div className="flex justify-start gap-x-4 items-center border-2  h-30 w-[300px] p-3 rounded-md shadow-md bg-white">
                <div>
                    {data.icon}
                </div>
                <div>
                    <span className="font-bold">{data.count}</span>
                    <p className="text-sm capitalize">{data.title}</p>
                </div>
            </div>
    )
}

export default Widget;