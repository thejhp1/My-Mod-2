
const sayHelloTo = require(`./send-messages/say-hello-to`)
const giveMessageToMrsPotato = require(`./send-messages/give-message-to-mrs-potato`)
const allMessages = require(`./messages/index`)

msg1 = allMessages.message1
msg2 = allMessages.message2
msg3 = allMessages.message3

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
