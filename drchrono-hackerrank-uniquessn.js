process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var input_array = "";
var input_count = 0
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    input_array = input.split("\n");
    removeSSNDups();
});

function readLine() {
    return input_array[input_count++];
}

function removeSSNDups() {
    var ssnDict = new Map();
    
    var numOfRecords = parseInt(readLine());
    
    for(var i=0; i<numOfRecords; i++) {
        var record = readLine();
        
        var split_record = record.split(":");
        var ssn = split_record[1];
        var name = split_record[0];
        
        if(ssnDict.get(ssn) !== undefined) {
            ssnDict.get(ssn).push(name);
        } else {
            ssnDict.set(ssn, [name]);
        }
    }
    
    for(var rec of ssnDict) {
        var ssn = rec[0];
        var namesinrec = rec[1];
        
        var names_length = namesinrec.map(function(name) {return name.length;});
        var longest_name = namesinrec[names_length.indexOf(Math.max.apply(null, names_length))];
        if(/,/.test(longest_name)) {
            var names = longest_name.split(',');
            longest_name = names[1] + " " + names[0];
        }
        console.log(longest_name+":"+ssn);
    }
}