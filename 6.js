const testData = [2,1];

const result = testData.every(function(item){

    return item === testData[0];

});

console.log(result);