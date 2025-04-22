from flask import Flask, request
from twilio.rest import Client
import requests
import base64

app = Flask(__name__)

# Your Twilio credentials
ACCOUNT_SID = 'ACa14626feb470e8fa8b43862d40423128'
AUTH_TOKEN = '5764538e50cea9c3236d4594e5720ce1'
TWILIO_WHATSAPP_NUMBER = 'whatsapp:+14155238886'  # Twilio WhatsApp number
client = Client(ACCOUNT_SID, AUTH_TOKEN)

@app.route("/", methods=["GET"])
def home():
    return "Hello World! Bot is running"

@app.route("/whatsapp", methods=['POST'])
def whatsapp_reply():
    incoming_msg = request.values.get('Body', '').strip().lower()
    from_number = request.values.get('From', '')

    print(f"📩 Received message from {from_number}: {incoming_msg}")

    # If the user sends a greeting message
    if incoming_msg in ['היי', 'שלום', 'hi', 'hello']:
        send_button_message(from_number)
    # If the user selects the "book_appointment" option
    elif incoming_msg == 'book_appointment':
        send_whatsapp_text(from_number, "Great! ✍️ What service would you like to book an appointment for?")
    # If the user selects the "cancel_appointment" option
    elif incoming_msg == 'cancel_appointment':
        send_whatsapp_text(from_number, "The appointment has been successfully canceled.")
    # If the input is not recognized
    else:
        send_whatsapp_text(from_number, "🤔 I didn't understand. Send 'hi' to start over.")

    return "OK", 200

# Function to send a message with interactive buttons
def send_button_message(to):
    message = client.messages.create(
        from_=TWILIO_WHATSAPP_NUMBER,
        to=to,
        body="Hello! What would you like to do today?",
        interactive={
            'type': 'button',
            'action': {
                'buttons': [
                    {
                        'type': 'reply',
                        'reply': {
                            'id': 'book_appointment',
                            'title': 'Book an appointment'
                        }
                    },
                    {
                        'type': 'reply',
                        'reply': {
                            'id': 'cancel_appointment',
                            'title': 'Cancel an appointment'
                        }
                    }
                ]
            }
        }
    )
    print(f"Message sent with SID: {message.sid}")

# Function to send a simple WhatsApp text message
def send_whatsapp_text(to, text):
    url = f"https://api.twilio.com/2010-04-01/Accounts/{ACCOUNT_SID}/Messages.json"
    headers = {
        "Authorization": "Basic " + base64.b64encode(f"{ACCOUNT_SID}:{AUTH_TOKEN}".encode()).decode()
    }

    payload = {
        "To": to,
        "From": TWILIO_WHATSAPP_NUMBER,
        "Body": text
    }

    # Sending the text message
    response = requests.post(url, headers=headers, data=payload)
    print("Response from Twilio:", response.status_code, response.text)

if __name__ == '__main__':
    app.run(port=8080)
