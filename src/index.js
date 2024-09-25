/* import app from "./app"
import { fetchFirstPage, updateTicketsMonday,} from "./controllers/tickets.controller" */

const app = require('./app.js')
const {updateTicketsMonday,getQuery2,fetchNextPage} = require('./controllers/tickets.controller')

const cron = require('node-cron')

// cron.schedule('*/10 * * * *', ()=> {
//     updateTicketsMonday()
// })

updateTicketsMonday()

app.listen(app.get('port'))
console.log('server on port', app.get('port'))




