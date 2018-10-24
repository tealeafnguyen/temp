var data = require("../data/data.js")


module.exports = function (app) {

    var openTable = [true, false, false, false, false, false, false, false, false, false]

    app.get('/table', (req, res) => {
        res.json(data)
    })

    app.post("/tableR", function (req, res) {
        res.json(data)
    });

    app.post("/purge", function (req, res) {
        console.log('purge '+req.body)
        remove(req.body.num)
        res.json(false)
    });

    app.post("/table", function (req, res) {
        var temp = req.body
        temp.table = findOpen();
        console.log(data)
        if (data.length <= 10) {
            data.push(temp);
        }

        res.json(data)
    });

    function remove(num){
        console.log(num)
        for(var i = 0; i < data.length; i++){
            if(num == data[i].table){
                freeTable(data[i].table)
                data.splice(i, 1);
            }
        }
    }

    function freeTable(num){
        openTable[num] = false;
    }

    function findOpen(){

        for(var i = 0; i < openTable.length; i++){
            if(openTable[i] == false){
                openTable[i] = true;
                return i;
            }
        }

    }
};
