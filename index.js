var request = require('request')

module.exports = function(obj, url, callback) {
    if(typeof obj === "string") {
        let slack_data = {
            "text": obj
        }
        post(slack_data, url, callback)
    } else if(typeof obj === "object") {
        let slack_data = obj
        post(slack_data, url, callback)
    } else {
        throw("Parameter " + obj + " is not a string or an object")
    }
}

function post(slack_data, url, callback) {
    request({
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        form: {
			'payload': JSON.stringify(slack_data)
		}
    }, function(err, res, body) {
        if(err) {
            callback("post-to-slack err: " + err)
        } else {
            console.log("post to slack successful")
            callback()
        }
    })
}
