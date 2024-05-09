const serverless = require("serverless-http");
const express = require("express");
const Insta = require('instamojo-nodejs');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(bodyParser.json())
Insta.isSandboxMode(true);
const API_AUTH ="test_f86f769f4a2e9b1ad4fa431d835"
const API_KEY ="test_f72c1cf60d6ce905eff29fa8ef5"

Insta.setKeys(API_KEY, API_AUTH);
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.post('/payment',(req,res)=>{
  var data = new Insta.PaymentData();
  const {fullName,email,phone,workshopId,amount} = req.body;
  data.purpose = "Workshop Registration";            // REQUIRED
  data.amount = amount;     
  data.currency = 'INR';
  data.name = fullName;
  data.buyer_name = fullName;
  data.email = email;
  data.phone = phone;
  data.send_email  = 'True';
  data.send_sms    = 'True';
  
  data.setRedirectUrl("http://localhost:3000/success");     
  console.log(data)
  Insta.createPayment(data, function (error, response) {
    if (error) {
      // some error
      console.log(error);
      return res.send({
        message: "Hello from payment! some error occured",
      });
    } else {
      // Payment redirection link at response.payment_request.longurl
      console.log(response);
      return res.send({
        message: 'Hello from payment gatway!',
        
        response: JSON.parse(response),
       
        
        

      });
    }
  });
  
})
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
module.exports.handler = serverless(app);
// app.listen(3001, () => console.log("Server is running on http://localhost:3000"))