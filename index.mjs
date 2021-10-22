import app from './server.mjs'

let port = process.env.PORT || 6542
app.listen(port ,() => {
    console.log('pid: ', process.pid)
    console.log('listening on http://localhost:'+ port);
});