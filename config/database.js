// in production or local host set up for mongodb
if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://adil:54321@ds147118.mlab.com:47118/ideajot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
