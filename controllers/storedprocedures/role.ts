import express, { Request, Response, Router } from "express";
import { QueryTypes } from '@sequelize/core';
import db from '../../models';

/**
* Code is to get Roles from Database using stored procedure
* @param req 
* @param res 
*/
const getRoles = async (req: Request, res: Response) => {
    try {
        const result = await db.sequelize.query("exec spGetRoles", { type: QueryTypes.SELECT })
        if (result) {
            res.status(200).json({ message: result });
        }
    }
    catch (error: any) {
        console.log("Error observed while getting Roles");
    }
}

/**
* Code is to accept two parameters
* @param req 
* @param res 
*/
const updateRole = async (req: Request, res: Response) => {
    try {
        const result = await db.sequelize.query('exec spUpdateRoles :Name, :Description',
            { replacement: { Name: "Super Admin", Description: "Super Test" } },
            { type: QueryTypes.UPDATE })
        if (result) {
            res.status(200).json({ message: result });
        }
    }
    catch (error: any) {
        console.log("Error observed while updating Roles");
    }
}


export default { getRoles, updateRole }