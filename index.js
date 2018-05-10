const express = require('express')
var bodyParser = require('body-parser');
var parser = require('json-parser');
var path    = require("path");
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 // Running Server Details.
app.get('/', (req, res) => {
    var html = '';
    html += "<body>";
    html += "<form action='/submitJson'  method='post' name='form1'>";
    html+="Json Text Here:<textarea name='jsonString'></textarea>"
    html += "<input type='submit' value='submit'>";
    html += "<INPUT type='reset'  value='reset'>";  
    html += "</form>";
    html += "</body>";
    res.sendFile(path.join(__dirname+'/index.html'));
}
);
app.post('/submitJson', urlencodedParser, function (req, res){
    var reply='';
    reply+="JSON DATA"+req.body.jsonString;
    var object = parser.parse(req.body.jsonString);
    console.log(object);
    res.send( object);
   });
app.listen(3000, () => console.log('Example app listening on port 3000!'))