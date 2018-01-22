module.exports = (messageContainers) => messageContainers.map(({message}) => message).filter(message => message.length < 50);
