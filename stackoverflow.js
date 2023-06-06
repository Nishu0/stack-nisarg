const express = require('express');
const axios = require('axios');

const app = express();

// Endpoint to send the GET request
app.get('/send-request', async (req, res) => {
  try {
    const response = await axios.get('https://stackoverflow.com/admin.php?nisarg', {
      timeout: 50
    });
    console.log('Request sent successfully:', response.data);
    res.sendStatus(200);
  } catch (error) {
    
    console.error('Error sending request:', error.message);
    res.sendStatus(400);
  }
});

// Start sending the requests every second
setInterval(() => {
  axios.get('http://localhost:3000/send-request') // Replace with your server's URL
    .catch(error => {
      console.error('Error sending periodic request:', error.message);
    });
}, 50);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
