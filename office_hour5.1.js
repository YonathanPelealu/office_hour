/*
ambil value dari tiap data 
bandingkan nilai, ambil max dan min
return nilai max dan min
*/




function report(arr) {
    var score = []
    let result = {}

    for (var i=0; i<arr.length;i++){
        score.push(arr[i].score)
    }
    let max = Math.max(...score)
    let min = Math.min(...score)

    for (j = 0 ; j<arr.length;j++){
        if (arr[j].score == max){
            result["max"] = arr[j];
        }
        else if (arr[j].score == min){
            result["min"] = (arr[j]);
        }
    }
    result['average'] = (max + min) / 2
    console.log(result);
  }
  
  const data = [
    {
      name: 'John',
      score: 90
    },
    {
      name: 'Jessica',
      score: 96
    },
    {
      name: 'Aaron',
      score: 75
    },
    {
      name: 'Lady',
      score: 80
    }
  ]
  
  report(data)
  /*
   should return:
   {
    max: {
      name: 'Jessica',
      score: 96
    },
    min:{
      name: 'Aaron',
      score: 75
    },
    average: 85.25
  }
  */