import {getConnection} from "../database/database";

const getLanguages = async(req, res) => {
    try {
        //res.json("Traigan vino, juega La AKD")
        const connection = await getConnection()
        const result = await connection.query("SELECT id, name, programmers FROM languages");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}; 

const getLanguage = async(req, res) => {
    try {
        //res.json("Traigan vino, juega La AKD")
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection()
        const result = await connection.query("SELECT id, name, programmers FROM languages WHERE ID = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}; 

const addLanguage = async (req, res) => {
    try {
        const { name, programmers } = req.body;
        if (name === undefined || programmers === undefined) {
            res.status(400).json({message: "All fields most be fill."});
        }

        const language = {
            name, programmers
        }
        const connection = await getConnection()
        const resultado = await connection.query("INSERT INTO  languages SET ?", language);
        res.json(resultado);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteLanguage = async(req, res) => {
    try {
        //res.json("Traigan vino, juega La AKD")
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection()
        const result = await connection.query("DELETE FROM languages WHERE ID = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateLanguage = async(req, res) => {
    try {
        //res.json("Traigan vino, juega La AKD")
        console.log(req.params);
        const { id } = req.params;
        const { name, programmers } = req.body;
 

        if (id === undefined || name === undefined || programmers === undefined) {
            res.status(400).json({message: "All fields most be fill."});
        }

        const language = {id, name, programmers};
        const connection = await getConnection()
        const result = await connection.query("UPDATE languages SET ? WHERE id = ?", [language, id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}; 


export const methods = {
    getLanguages,
    addLanguage,
    getLanguage,
    deleteLanguage,
    updateLanguage
};