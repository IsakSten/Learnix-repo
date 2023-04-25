const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Insert to database
client.db('students').collection('students')
    .updateOne({ name: 'Amyporter' },
        {
            $set:
                { email: 'Amyporter12@example.com' }
        })
    .then((res) => {
        console.log(res)
        client.close()
    })
    .catch((err) => console.log(err))

