import { addNewItem, 
         getChest,
         getItemWithId,
         updateItem,
         deleteItem
} from "../controllers/InventoryChestController"

const routes = (app) => {
    app.route("/chest")
        .get(getChest)
    app.route("/item")
        .post(addNewItem)
    app.route("/item/:itemId")
        .get(getItemWithId)
        .put(updateItem)
        .delete(deleteItem)
} 

export default routes