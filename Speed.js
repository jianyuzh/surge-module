// Speed.js

// Translate Chinese messages to English
function translateMessages(messages) {
    const translations = {
        '你好': 'Hello',
        '世界': 'World',
        // Add more translations as needed
    };

    return messages.map(message => translations[message] || message);
}

// Example usage
const messages = ['你好', '世界', '这是一个测试'];
console.log(translateMessages(messages));
