import express, { Request, Response, Router } from "express";
import { QueryTypes } from '@sequelize/core';
import db from '../../models';
/**
 * Code is to get Roles from Database using sequlize DB object 
 * and using sql query as well as using stored procedures.
 * @param req 
 * @param res 
 */

const getRoles = async (req: Request, res: Response) => {
    try {
        let sqlQueryText: string = "select * From Role";
        let result = await syncRoles(sqlQueryText);
        if (result) {
            res.status(200).json({ message: result });
            res.status(200).json({ message: "Roles get successfully pulled" });
        }
        else {
            res.status(304).json({ message: "Not processed" });
        }
        res.end();
    }
    catch (error: any) {
        console.log("Error observed while getting Roles");
    }
}

/**To get role record internal method gets called */
const syncRoles = async (sqlQueryText: string): Promise<String> => {
    try {
        const roleRecords = await db.sequelize.query(sqlQueryText, { type: QueryTypes.SELECT })
        if (roleRecords && roleRecords.length > 0) {
            return JSON.stringify(roleRecords);
        }
        return JSON.stringify(roleRecords);
    }
    catch (error: any) {
        console.log("Error Observed while pulling out roles");
        return "false";
    }
}


/**To get single record from DB based on id */
const getRoleOnRoleID = async (req: Request, res: Response) => {
    try {
        let roleId = req.params.roleId;
        if (roleId) {
            let sqlQueryText: string = `select * From Role where ID = ${roleId}`;
            //let sqlQueryText: string = `select * From Role`;
            //let sqlQueryText: string = "select * From Role";
            const roleRecord = await db.sequelize.query(sqlQueryText, { type: QueryTypes.SELECT })
            if (roleRecord) {
                res.status(200).json({ message: roleRecord });
                //return JSON.stringify(roleRecord);
            }
        }
    } catch (error: any) {
        console.log("Getting error while fetching specific record");
    }
}




/**To create new role record in  DB  */
const createRole = async (req: Request, res: Response) => {
    try {
        let role = req.params.role;
        let Description = req.params.description;
        if (role && Description) {
            let sqlQueryText: string = `Insert into Role (Name, Description) values (${role}, ${Description})`;
            const roleRecord = await db.sequelize.query(sqlQueryText, { type: QueryTypes.INSERT })
            if (roleRecord) {
                res.status(200).json({ message: roleRecord });
                //return JSON.stringify(roleRecord);
            }
        }
    } catch (error: any) {
        console.log("Getting error while creating new role");
    }
}

/**To create new role record in  DB  */
const updateRole = async (req: Request, res: Response) => {
    try {
        let roleId = req.params.roleId;
        let role = req.params.role;
        let Description = req.params.description;
        if (roleId && role && Description) {
            let sqlQueryText: string = `Update Role det Name = ${role}, Description= ${Description} where ID = ${roleId}`;
            const roleRecord = await db.sequelize.query(sqlQueryText, { type: QueryTypes.INSERT })
            if (roleRecord) {
                res.status(200).json({ message: roleRecord });
                //return JSON.stringify(roleRecord);
            }
        }
    } catch (error: any) {
        console.log("Getting error while creating new role");
    }
}
export default { getRoles, getRoleOnRoleID, createRole, updateRole }