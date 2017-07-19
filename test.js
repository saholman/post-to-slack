const slack = require('./index.js')
const url = '<your slack webhook>';
var formatter = require('format-json')

// slack("Testing", url, function(err) {
//     if(err) {
//         console.log("Send failed: ", err)
//     } else {
//         console.log("Success")
//     }
// })

var json = {
   "CourseSectionService":{
      "request":{
         "method":"GET",
         "resource":"\/json\/20175\/04816\/005\/001",
         "attributes":null,
         "status":200,
         "statusMessage":"Service request is OK and a response has been generated."
      }
   }
}

var formattedJson = formatter.plain(json)

slack({
    text: 'A failed event has been removed from the queue',
    attachments: [{
        fallback: JSON.stringify(json),
        text: formattedJson
    }]
}, url, function(err) {
    if(err) {
        console.log("Send failed: ", err)
    } else {
        console.log("Success")
    }
})
