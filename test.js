const 
    client = new (require('./index'))()

client.lookup('https://www.google.com').then(console.log)
.catch(a => console.error(a))