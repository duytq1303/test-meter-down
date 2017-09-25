var fs = require('fs');
meteorDown.init(function (Meteor) {
  console.log('here')
  Meteor.call('todos.updateText', Math.random(), function (error, result) {

    fs.appendFile('message.txt', result, (err) => {
      if (err) throw err;

    });
    // Meteor.kill();
  });
});

meteorDown.run({
  concurrency: 10,
  url: "http://localhost:3000"
});
