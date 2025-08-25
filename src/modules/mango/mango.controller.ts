import { Request, Response } from "express";
import Mango from "./mango.schema";
import { get } from "mongoose";

const createMango = async (req: Request, res: Response) => {

    const data = await Mango.create(req.body);

    try {
        res.send({
            success: true,
            message: "Mango created successfully",
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to create mango",
            error
        })
    }
}




const getMango = async (req: Request, res: Response) => {


    try {
        const data = await Mango.find();
        res.send({
            success: true,
            message: "Mango getting successfully",
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to create mango",
            error
        })
    }
}


const getMangoById = async (req: Request, res: Response) => {

    const id = req.params.id;
    try {
        const data = await Mango.findById(id);
        res.send({
            success: true,
            message: "Mango getting successfully",
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to create mango",
            error
        })
    }

}


const updateMango = async (req: Request, res: Response) => {


    try {

        const id = req.params.id;
        // const payload = req.body;

        const data = await Mango.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        res.send({
            success: true,
            message: "Mango update successfully",
            data
        })


    } catch (error) {
        res.send({
            success: false,
            message: "Failed to update mango",
            error
        })
    }

}


const deleteMango = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const data = await Mango.findByIdAndDelete(id);
        res.send({
            success: true,
            message: "Mango delete successfully",
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to delete mango",
            error
        })
    }

}





export const mangoController = { createMango, getMango, getMangoById, updateMango, deleteMango }