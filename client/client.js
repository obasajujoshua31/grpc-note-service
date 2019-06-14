const grpc = require('grpc')
const caller = require('grpc-caller')


const client = caller('localhost:50051', './user.proto', 'UsersService', grpc.credentials.createInsecure())


client.authenticate({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDA1NGQyYTRhMGM2YzM5NGNjYjExYTkiLCJpYXQiOjE1NjA2MzA0MzN9.ON0kc98j2yl3acVc2tf1jybat1j_ioZsf0ty8idYGFk'}).then(user => {
    console.log('----', user)
}).catch(error => {
    console.log('Erorr in grpc', error)
})
