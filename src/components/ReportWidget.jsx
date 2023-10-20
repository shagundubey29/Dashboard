

const ReportWidget = ({type}) => {
    let values;
    switch(type){
        case "query hits":
            values = {
                title: "query hits",
                count: "41.1k"
            };
            break;
        case "products clicks":
            values = {
                title: "products clicks",
                count: "62.1k"
            };
            break;
        case "add to cart":
            values = {
                title: "add to cart",
                count: "31.7k"
            };
            break;
        case "units sold":
            values = {
                title: "units sold",
                count: "6.7k"
            };
            break;
        case "sale through":
            values = {
                title: "sale through",
                count: "6.7k"
            };
            break;    
        default:
            break;
    }
    return (
        <div className="flex  flex-col justify-start gap-x-4 items-start border-2  h-30 w-[300px]  rounded-md shadow-md bg-white">
            <div className="p-2 border-b-2 border-slate-200 w-full pl-3">
                <p className="text-slate-500 font-medium capitalize text-sm tracking-wider">{values.title}</p>
            </div>
            <div className="px-2 py-4">
                <span className="text-base tracking-wider font-semibold text-sky-500">{values.count}</span>
            </div>
        </div>
    )
}

export default ReportWidget