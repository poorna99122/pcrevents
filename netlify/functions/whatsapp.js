const twilio = require("twilio");

exports.handler = async function (event, context) {

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = twilio(accountSid, authToken);

  const data = JSON.parse(event.body);

const message = `
New Form Submission:

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Event Type: ${data.eventType}
Event Date: ${data.eventDate}
Message: ${data.message}
`;

  try {
    await client.messages.create({
      body: message,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+918185021930"
    });

    return {
      statusCode: 200,
      body: "WhatsApp sent"
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    };
  }
};