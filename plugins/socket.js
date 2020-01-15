import _ from 'lodash'

module.exports = (server) => {
    const io = require('socket.io')(server);
    var users = [];
    // listen for user connection
    io.on('connection', (socket) => {
        socket.user_id = (Math.random() * 100000000000000);
        users.push(socket); // save the socket to use it later
        // send message on user connection
        socket.emit('welcome', JSON.stringify({message: 'Welcome ^_^!'}));
        // listen for user diconnect
        socket.on('disconnect', () => {
            users = _.reject(users, (u) => {
                return u.socket.user_id == socket.user_id;
            });
        });
    });

    io.users = users;

    return io;
}