import getConnection from "../database/database";

const getLanguages = async(req, res) => {
    //res.json("Traigan vino, juega La AKD")
    const connection = await getConnection()
    const result = await connection.query("SELECT id, name, programmers FROM languages");
    console.log(result);
    res.json(result);
};

export const methods = {
    getLanguages
};