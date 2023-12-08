# c4c
index.html \\
app.js



#it's a pretty simple application, just type something in the message input box and hit post message, should #pop up
#I tried to use node.js but ran into huge issues so hosted using Github Pages. Here's the link: #https://riasingh125.github.io/c4c/
#I'm not sure if it will run, so if it doesn't, you can also run it locally (I used intelliJ and just clicked 
#on the little chrome button that pops up)
#For actual applications with more functionality, I'd typically use react, but since this was pretty chill I st
#I stuck with HTML, go back to the roots
#included an index.css file but there was no css file option in IntelliJ- included it to show that good 
#practice is to split up style and functionality
#Also, included a server/client example that works when run locally, tried to split it up into files but ran #into loop issues


## Anonymous Message Board
# High-Level Overview
- This project is an Anonymous Message Board web application. Users can input messages (up to 128 characters) in a text area, select a text color using a color picker, and post messages. The posted messages are displayed on a message - - board with timestamps. The application has a visually appealing design with a background image of people talking.

# Components and Interactions
HTML (index.html):

Defines the structure of the web page.
Contains a message board div to display posted messages.
Includes a text area for entering messages, a button to post messages, and a color picker for selecting text color.
Utilizes external styles from the provided CSS file.
# CSS (index.css):

Defines the visual styling of the web page, including background color, fonts, and layout.
Styles the message input area, post button, and color picker for a cohesive and visually pleasing design.
# JavaScript (app.js):

Defines a postMessage function to handle the posting of messages.
Retrieves the user's input, validates it, and creates a new message div.
Retrieves the selected text color from the color picker and applies it to the new message.
Inserts the new message at the top of the message board, displaying the timestamp, and clears the input field.
Displays an alert if the message is invalid.
# Image (peopletalking.png):

Provides a visual element to the web page, enhancing the user experience.
# Fulfillment of Requirements
User Interface: The application offers a simple and user-friendly interface for posting messages with an aesthetically pleasing design.

Functionality: The JavaScript function (postMessage) handles message posting, input validation, and dynamic message creation.

Styling: The CSS file provides a visually appealing layout and design, making the application more engaging.


# How to Start the Application
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd <repository-directory>

Open index.html in a Web Browser:

Simply open the index.html file in a web browser to launch the application.
# Interact with the Application:

Type a message in the text area.
Choose a text color using the color picker.
Click the "Post Message" button to post the message.
View the posted messages on the message board.
Explore and Customize:

Feel free to explore the code, modify the styles, or extend the functionality as needed.
Enjoy the Anonymous Message Board Experience!

Have fun!
