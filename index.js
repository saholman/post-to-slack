
function postToSlack(msg, callback) {
    let slack_data = {
        "text": msg
    }
    request({
        url: 'https://hooks.slack.com/services/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',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        form: {
			'payload': JSON.stringify(slack_data)
		}
    }, function(err, res, body) {
        if(err) {
            callback("postToSlack err: " + err)
        } else {
            console.log("post to slack successful")
            callback()
        }
    })
}
