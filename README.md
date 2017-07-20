# post-to-slack
A simple npm module for posting to Slack Incoming Webhooks (https://byu-oit.slack.com/apps/A0F7XDUAZ-incoming-webhooks)

## Usage
#### Posting simple text
```
const slack = require('post-to-slack')
const url = '<your slack webhook>';

slack("Testing", url, function(err) {
     if(err) {
         console.log("Send failed: ", err)
     } else {
         console.log("Success")
     }
})
```
#### Posting attachments

```
const slack = require('post-to-slack')
const url = '<your slack webhook>';
const formatter = require('format-json')

var json = {
   "My":{
      "JSON":"object"
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

```

See slack documentation for more information on sending attachments at https://api.slack.com/incoming-webhooks
