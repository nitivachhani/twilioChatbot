# Twilio Chatbot
It contains twilio chatbot using Twilio functions.

There are two functions: sendSms.js and receiveSms.js.

https://mauve-caiman-6661.twil.io/sendSms will invoke sendSms.js which will send sms to group of users/customer. If user replies back, then receiveSms.js will be invoked. This function uses open source Eliza Bot: https://www.masswerk.at/elizabot/ to have chat with the group of customers asynchronously.

## Reference:

* https://www.masswerk.at/elizabot/
* https://www.twilio.com/docs/sms
