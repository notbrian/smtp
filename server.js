var SMTPServer = require('smtp-server').SMTPServer;


var server = new SMTPServer({
  onData: function(stream, session, callback){
   console.log(stream) 
   
  },
  onConnect: function(session, callback){
    console.log("connected!")
  }
});

server.listen(25, function() {
  console.log("server started")
});

server.on('error', function(err){
    console.log('Error %s', err.message);
});