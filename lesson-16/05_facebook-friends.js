/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: "Matthew Brahms",
    friends: 2,
    messages: ["hello", "i am fine!", "hello world"],
    
    postMessage: function(message) {
        facebookProfile.messages.push("message");
    },
    
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
    },
    
    addFriend: function() {
        return facebookProfile.friends += 1;
    },
    
    removeFriend: function() {
        return (facebookProfile.friends -= 1);
    },
};