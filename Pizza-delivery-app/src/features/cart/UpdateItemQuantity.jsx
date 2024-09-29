import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, inicreaseItemQuantity } from "./cartSlice";
import PropTypes from "prop-types";

function UpdateItemQuantity({pizzaId, currentQuantity}){

    const dispatch = useDispatch();
    return(
        <div className="flex gap-2 items-center md:gap-3">
            <Button type='round' onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button type='round' onClick={() => dispatch(inicreaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity;

UpdateItemQuantity.propTypes = {
pizzaId: PropTypes.number.isRequired,
currentQuantity: PropTypes.number.isRequired,
}