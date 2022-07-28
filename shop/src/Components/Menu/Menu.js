import Card from "../../UI/Card/Card"
import Button from "../Button/Button"
import Text from "../Text/Text"
import { selectedCount, selectedPrice, accountMoney } from "../Storage/Storage"
import classes from "../../UI/Global.module.css"
import { useRecoilState, useResetRecoilState } from "recoil"

const Menu = () => {
    const [updatedCount, setUpdatedCount] = useRecoilState(selectedCount);
    const [updatedPrice, setUpdatedPrice] = useRecoilState(selectedPrice);
    const [updatedAccountMoney, setUpdatedAccountMoney] = useRecoilState(accountMoney);

    const reset = () => {
        setUpdatedCount(0)
        setUpdatedPrice(0)
    };

    const orderProducts = () => {
        if(updatedPrice <= updatedAccountMoney) {
            setUpdatedAccountMoney(updatedAccountMoney - updatedPrice)
            reset();
        }
    }

    return(
        <Card className={classes["menu"]}>
            <Card className={classes["menu-item"]}>
                <Text>acc money: {updatedAccountMoney}</Text>
                <Button className={classes["add"]} onClick={reset}>clear Basket</Button>
            </Card>
            <Card className={classes["menu-item"]}>
                <Text>count: {updatedCount}</Text>
                <Text>price: {updatedPrice}</Text>
                <Button className={classes["add"]}  onClick={orderProducts}>order</Button>
            </Card>
        </Card>
    )
}

export default Menu