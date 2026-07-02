import mysql from 'mysql2/promise';

export default class DatabseUtility
{
    /*
        This method works for both selct queriers and non select queries
        For select query it returns an array of objects for ex ---> [
                                                                        { id: 1, name: 'John' },
                                                                        { id: 2, name: 'David' }
                                                                    ]
        For non select query in returns an object for ex ---> {
                                                                    fieldCount: 0,
                                                                    affectedRows: 1,
                                                                    insertId: 5,
                                                                    warningCount: 0
                                                              }
    */
    static async queryDB(query) 
    {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'testdb'
        });

    const [rows] = await connection.execute(query);
    await connection.end();

    return rows;
    }
}