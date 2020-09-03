// const cities = [
//   {
//       "cityCode": 1,
//       "cityName": "Ambon"
//   },
//   {
//       "cityCode": 2,
//       "cityName": "Bali"
//   },
//   {
//       "cityCode": 3,
//       "cityName": "Banda Aceh"
//   }
// ]

function transform (data) {
    // your code goes here ...
    let tmp = {}
    for (let i = 0; i < data.length; i++) {
      let o = data[i].cityCode
      let n = data[i].cityName

      tmp[o] = n
  }
console.log(tmp);
  }
  
  
  // Do not change codes below
  const cities = [
          {
              "cityCode": 1,
              "cityName": "Ambon"
          },
          {
              "cityCode": 2,
              "cityName": "Bali"
          },
          {
              "cityCode": 3,
              "cityName": "Banda Aceh"
          }
  ]
  transform(cities)
//  console.log(cities[1].cityName)
  
  /*
  should return:
    {
      1: "Ambon",
      2: "Bali",
      3: "Banda Aceh"
    }
  */
  