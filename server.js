const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('./dist/vue-ssr-server-bundle.json');
const nodemailer = require('nodemailer');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');
const template = fs.readFileSync('./src/index.template.html', 'utf-8');
const PORT = 3000;
const server = express();
const renderer = createBundleRenderer(bundle, {
	template: template,
	clientManifest: clientManifest,
	runInNewContext: false
});
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.post('/send', (req, res) => {
  const output = `
    <h1>You have a new request from ${req.body.Name}</h1>
    <h3>Contact Details:</h3>
    <ul>  
      <li>Name: ${req.body.Name}</li>
      <li>Email: ${req.body.Email}</li>
      <li>Make: ${req.body.Make}</li>
      <li>Model: ${req.body.Model}</li>
      <li>Vin number: ${req.body.VinNum}</li>
      <li>Production Date: ${req.body.ProductionDate}</li>
      <li>Parts: ${req.body.Parts}</li>
      <li>Phone: ${req.body.PhoneNumber}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.Message}</p>
  `;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'christopherdjikhoff@gmail.com', // generated ethereal user
        pass: 'asderd123'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: `${req.body.Email}`, // sender address
      to: 'christopherdjikhoff@gmail.com', // list of receivers
      subject: `Part Request from ${req.body.Name}`, // Subject line
      text: `${req.body.Name} wants to get the following part(s):`, // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          res.sendStatus(500)
      }
      res.sendStatus(200)
  });
  // create reusable transporter object using the default SMTP transport
    });
server.use(compression());
server.use('/dist', express.static(path.resolve(__dirname, './dist')));
server.use('/public', express.static(path.resolve(__dirname, './public')));
server.use('/manifest.json', express.static(path.resolve(__dirname, './manifest.json')));
server.use('/service-worker.js', express.static(path.resolve(__dirname, './dist/service-worker.js')));
server.get('*', (req, res) => {
	
	res.setHeader("Content-Type", "text/html");

	const context = {
		url: req.url,
		title: "Caribbean Autoparts"
	};
	
	renderer.renderToString(context, (err, html) => {
		if(err){
			if(err.code === 404){
				res.status(400).send('Not found');
			}else{
				console.log(err);
				res.status(500).send('Internal server error');
			}
		}else{
			res.send(html);
		}
	});

});

const port = PORT || 3000;

server.listen(process.env.PORT || port)
