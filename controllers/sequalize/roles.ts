import express, { Request, Response, Router } from "express";
import { QueryTypes } from '@sequelize/core';
import db from '../../models';
import models from "../../models";

/**
 * To get record details from database using sequalize
 * @param req 
 * @param res 
 */
const getData = async (req: Request, res: Response) => {
    try {
        const result = await models.Role.findAll();
        if (result) {
            res.status(200).json({ message: result });
        }
    }
    catch (error: any) {
        console.log("Error observed while getting Roles");
    }
}

/**
 * To get record details from database using sequalize
 * @param req 
 * @param res 
 */
const createData = async (req: Request, res: Response) => {
    try {
        const result = await models.Role.create({ name: "Admin", description: "Admin Role" });
        if (result) {
            res.status(200).json({ message: result });
        }
    }
    catch (error: any) {
        console.log("Error observed while creating record");
    }
}
/**
 * To update record details from database using sequalize
 * @param req 
 * @param res 
 */
const updateData = async (req: Request, res: Response) => {
    let roleId = req.params.roleId;
    try {
        if (roleId) {
            const result = await models.Role.update(
                { name: "Admin", description: "Admin Role" },
                {
                    where: { ID: `${roleId}` }
                }
            );
            if (result) {
                res.status(200).json({ message: result });
            }
        }
    }
    catch (error: any) {
        console.log("Error observed while updating record");
    }
}

/**
 * To delete record details from database using sequalize
 * @param req 
 * @param res 
 */
const deleteData = async (req: Request, res: Response) => {
    let roleId = req.params.roleId;
    try {
        if (roleId) {
            const result = await models.Role.findone({ where: { ID: `${roleId}` } });
            if (result) {
                result.destroy();
                //res.status(200).json({ message: result });
            }
        }
    }
    catch (error: any) {
        console.log("Error observed while deleting record");
    }
}


export default { getData, updateData, deleteData, createData }