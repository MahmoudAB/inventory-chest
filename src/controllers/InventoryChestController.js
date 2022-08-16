import mongoose from "mongoose";
import { ItemSchema } from "../models/InventoryChestModel";

const Item = mongoose.model('chest', ItemSchema)

export const addNewItem = (req,res) => {
    let newItem = new Item(req.body)

    newItem.save((err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact);

    })
}

export const getChest = (req, res) => {
    Item.find({}, (err, item) => {
        if(err){
            res.send(err)
        }
        res.json(item)

    })
}

export const getItemWithId = (req, res) => {
    Item.findById(req.params.itemId, (err, item) => {
        if(err){
            res.send(err)
        }
        res.json(item)

    })
}

export const updateItem = (req, res) => {
    Item.findOneAndUpdate({_id: req.params.itemId}, req.body,{new: true, useFindAndModify: false }, 
        (err, item) => {
            if(err){
                res.send(err)
            }
            res.json(item)

    })
}

export const deleteItem = (req, res) => {
    Item.remove({_id: req.params.itemId}, (err, item) => {
        if(err){
            res.send(err)
        }
        res.json({message: 'successfully deleted item'})

    })
}

