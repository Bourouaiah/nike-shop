import { BsTrash } from "react-icons/bs";
import { RemoveItem, IncreaseValue, DecreaseValue } from "../../store/CartSlice";

function ItemOnCard({ item, dispatch }) {
    return (
        <div className="flex gap-4 items-center">
            <div className={`bg-gradient-to-b ${item.color} ${item.shadow} px-[10px] py-[5px] rounded-md relative`}>
                <span className="absolute blur-theme-effect bg-white/80 top-1 right-1 text-xs rounded-md p-[1px]">${item.price}</span>
                <img className="w-[150px]" src={item.img} alt="product-img" />
            </div>
            <div className="flex flex-col gap-3 grow">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-slate-900 font-semibold">{item.title}</h1>
                        <h2 className="text-slate-900 text-sm">{item.text}</h2>
                    </div>
                    <div>
                        <p>${item.price * item.Quantity}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 h-5">
                        <p onClick={() => dispatch(DecreaseValue(item))} className="bg-theme-cart text-white px-2 rounded-md flex justify-center items-center active:scale-90 cursor-pointer">-</p>
                        <p className="bg-theme-cart text-white px-3 rounded-md flex justify-center items-center">{item.Quantity}</p>
                        <p onClick={() => dispatch(IncreaseValue(item))} className="bg-theme-cart text-white px-2 rounded-md flex justify-center items-center active:scale-90 cursor-pointer">+</p>
                    </div>
                    <div className="flex justify-center items-center cursor-pointer active:scale-90 px-[3px] w-6 py-[4px] rounded-md bg-theme-cart">
                        <BsTrash onClick={() => dispatch(RemoveItem(item))} className=" text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemOnCard;