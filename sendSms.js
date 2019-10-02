// Outbound SMS function invoked by http: https://mauve-caiman-6661.twil.io/sendSms

exports.handler = function(context, event, callback) {
    let client = context.getTwilioClient();
    
    // Create and send SMS
    
    let phoneNumbers = ["+16507145328","+16692413934"];
    
    var promiseArray = [];
    
    for (var i in phoneNumbers) {
        promiseArray.push(
            client.messages.create({
                body: 'Hello I am an emotional support ELiza Bot. If you need any support, let me know. ',
                from: '+16572751461',
                to: phoneNumbers[i]
            })
        );
    }
    //.then(message => callback(null, message.sid));
    Promise.all(promiseArray).then(messages => callback(null, "Message Sent")).catch(err => callback(err));
};
