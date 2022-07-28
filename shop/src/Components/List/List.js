import Button from "../Button/Button";
import {selectedCount, selectedPrice} from '../Storage/Storage';
import { useRecoilState } from "recoil";
import classes from  '../../UI/Global.module.css'
import Wrapper from "../../UI/Wrapper/Wrapper";
import Listitem from "../Listitem/Listitem"
import Text from "../Text/Text"



const List = () => {
   const [updatedCount,setUpdatedCount] = useRecoilState(selectedCount);
   const [updatedPrice,setUpdatedPrice] = useRecoilState(selectedPrice);

   const addToBasket = (price) => {
      setUpdatedCount(updatedCount + 1)
      setUpdatedPrice(updatedPrice + price)
   }

   const removeFromBasket = (price) => {
    if(updatedCount > 0 && updatedPrice - price >= 0) {
        setUpdatedCount(updatedCount - 1);
        setUpdatedPrice(updatedPrice - price)
    }
   }

   const products = [
    {name: 'mouse', price: 30},
    {name: 'mouse pad', price: 20},
    {name: "keyboard", price: 80},
    {name: "screen 16.2mm", price: 70},
    {name: "screen 17.8mm", price: 100},
    {name: 'processor', price: 200},
    {name: 'ssd 256', price: 40},
    {name: 'hdd 1TB', price: 35}
]

   return (
       <Wrapper>
          <ul className={classes['list']}>
          {products.map(el => {
              return (
                 <Listitem className={classes['list-item']} key={el.name}>
                    <Text> product name:  {el.name} </Text>
                    <br />
                    <Text> product price: {el.price}  </Text>
                    <br />
                    <Button className={classes['add']} onClick={() => addToBasket(el.price)}> add to basket </Button>
                    <br />
                    <Button className={classes['add']} onClick={() => removeFromBasket(el.price)}> remove from basket </Button>
                 </Listitem>
              ) 
          })}
         
          </ul>
          
       </Wrapper>
   )
}

export default List