import { atom } from "recoil";

const selectedPrice = atom({
    key: `selectedPriceOfProducts`,
    default: 0
})

const selectedCount = atom({
    key: `countOfSelectedProducts`,
    default: 0
})

const accountMoney = atom({
    key: `userAccountsMoney`,
    default: 5_000
})

export {selectedPrice, selectedCount, accountMoney}