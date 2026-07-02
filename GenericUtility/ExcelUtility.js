import XLSX from 'xlsx';
export default class ExcelUtility
{
    /*Below function will return you all the excel data in json format
      it will return array of objects
    */
    static getExcelData(filePath, sheetName) 
    {
    const workbook = XLSX.readFile(filePath);

    const sheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(sheet);

    return data; 
    }

    /*
    This function will write data into the expected cell 
    for example cell A3,A4 and value can be anything
    */
    static writeIntoExcel(filePath, sheetName, cell, value) 
    {
        const workbook = XLSX.readFile(filePath);

        const sheet = workbook.Sheets[sheetName];

        sheet[cell] = {
            t: typeof value === 'number' ? 'n' : 's',
            v: value
        };

        XLSX.writeFile(workbook, filePath);
    }

    /*
        This function will add a complete new row just have to send the row data in object
        ex---{
                Name: 'Alice',
                Email: 'alice@test.com',
                Password: 'pass456'
            }
    */
    static appendRowToExcel(filePath, sheetName, rowData) 
    {
    const workbook = XLSX.readFile(filePath);

    const sheet = workbook.Sheets[sheetName];

    const existingData = XLSX.utils.sheet_to_json(sheet);

    existingData.push(rowData);

    const updatedSheet = XLSX.utils.json_to_sheet(existingData);

    workbook.Sheets[sheetName] = updatedSheet;

    XLSX.writeFile(workbook, filePath);
    }

    /*
        This below function getExcelDataHavingNoHeader() will help you get the data from
        excel when no column names or header is present and will return json body having nested array
        For ex--[
                    ['John', 'john@test.com'],
                    ['Alice', 'alice@test.com']
                ]
    */
    static getExcelDataHavingNoHeader(filePath, sheetName) 
    {
    const workbook = XLSX.readFile(filePath);

    const sheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(sheet, {header: 1});

    return data;
    }
}