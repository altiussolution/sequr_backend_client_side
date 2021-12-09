const port = 4500; 
var express = require('express')
var cors = require('cors')
var app = express() 
app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});
app.use(cors({
    origin: 'http://usersequr.s3-website.ap-south-1.amazonaws.com'
  }));

  // Set up CORS
app.use(cors({
    origin: true, // "true" will copy the domain of the request back
                  // to the reply. If you need more control than this
                  // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests
}));

var parseString = require('xml2js').parseString;
const request = require('request')



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




//***********************  Arunkumar ******************************************** */

app.get('/machine/allDeviceInfo', (async (req, res) => {
    var body = req.body;
  var url = `http://localhost:44400/machine/alldevinfo.xml?refresh=yes&count=assigned`
  var machineDetails = async (url) => {
    var xml;
    var result;
    await new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
        xml = body
      });
    })

    await parseString(xml, function (err, result) {
      resultData = result

    });

    return resultData

  }
  var details = await machineDetails(url)

  res.send({ details })
}))

app.post('/machine/singleDeviceInfo', (async (req, res) => {
    var body = req.body;
    console.log(body)
  column_id = await parseInt(body.column_id)
  console.log(column_id)
  var url = `http://localhost:44400/machine/singledevinfo.xml?id=${column_id}`
  console.log(url)
  var machineDetails = async (url) => {
    var xml;
    var result;
    await new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
        xml = body
      });
    })

    await parseString(xml, function (err, result) {
      resultData = result

    });

    return resultData

  }
  var details = await machineDetails(url)

  res.send({ details })
}))

app.post('/machine/lockBin', (async (req, res) => {
    var body = req.body;
  column_id = parseInt(body.column_id)
  bin_id = parseInt(body.bin_id)
  compartment_id = parseInt(body.compartment_id)
  var url = `http://localhost:44400/machine/lock.xml?id=${column_id}&drawer=${bin_id}&compartment=${compartment_id}`
  var machineDetails = async (url) => {
    var xml;
    var result;
    await new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
        xml = body
      });
    })

    await parseString(xml, function (err, result) {
      resultData = result

    });

    return resultData

  }
  var details = await machineDetails(url)

  res.send({ details })
}))

app.post('/machine/UnlockBin', (async (req, res) => {
    var body = req.body;
  column_id = parseInt(body.column_id)
  bin_id = parseInt(body.bin_id)
  compartment_id = parseInt(body.compartment_id)
  var url = `http://localhost:44400/machine/unlock.xml?id=${column_id}&drawer=${bin_id}&compartment=${compartment_id}`
  var machineDetails = async (url) => {
    var xml;
    var result;
    await new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
        xml = body
      });
    })

    await parseString(xml, function (err, result) {
      resultData = result

    });

    return resultData

  }
  var details = await machineDetails(url)

  res.send({ details })
}))


app.get('/machine/assignedColumns', (async (req, res) => {
    var url = `http://localhost:44400/machine/alldevinfo.xml?refresh=yes&list=assigned`

  var machineDetails = async (url) => {
    var xml;
    var result;
    await new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
        xml = body
      });
    })

    await parseString(xml, function (err, result) {
      resultData = result

    });

    return resultData

  }
  var details = await machineDetails(url)
  res.send({ details })

}))

app.get('/machine/wasfullopen', (async (req, res) => {
    var body = req.body;
  var url = `http://localhost:44400/machine/alldevinfo.xml?count=wasfullopen`
  var machineDetails = async (url) => {
    var xml;
    var result;
    await new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
        xml = body
      });
    })

    await parseString(xml, function (err, result) {
      resultData = result

    });

    return resultData

  }
  var details = await machineDetails(url)

  res.send({ details })
}))
app.get('/machine/isfullopen', (async (req, res) => {
    var body = req.body;
  var url = `http://localhost:44400/machine/alldevinfo.xml?count=isfullopen`
  var machineDetails = async (url) => {
    var xml;
    var result;
    await new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
        xml = body
      });
    })

    await parseString(xml, function (err, result) {
      resultData = result

    });

    return resultData

  }
  var details = await machineDetails(url)

  res.send({ details })
}))