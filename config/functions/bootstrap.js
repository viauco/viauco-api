'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/configurations/configurations.html#bootstrap
 */

module.exports = () => {
    var io = require('socket.io')(strapi.server);
    var users = [];
    // listen for user connection
    io.on('connection', (socket) => {
        socket.user_id = (Math.random() * 100000000000000);
        users.push(socket); // save the socket to use it later

        // send message on user connection
        socket.emit('hello', JSON.stringify({message: 'Hiiiiii!'}));
        // listen for user diconnect
        socket.on('disconnect', () => {
            users.forEach((user, i) => {
                // delete saved user when they disconnect
                if(user.user_id === socket.user_id) users.splice(i, 1);
            });
        });
    });
    
    strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
};
