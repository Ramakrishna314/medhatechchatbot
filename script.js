// script.js
function openChatbox() {
    const chatboxContainer = document.querySelector('.chatbox-container');
    const messengerIcon = document.querySelector('.messenger-icon');

    // Display the chatbox
    chatboxContainer.style.display = 'block';
    chatboxContainer.style.left = 'auto';
    chatboxContainer.style.right = '20px'; // Adjust this value as needed
    chatboxContainer.style.bottom = '20px';
    // Hide the messenger icon
    messengerIcon.style.display = 'none'; 
}
document.addEventListener('DOMContentLoaded', function () {
    
    showWelcomeMessage();
    updateChatboxHeading();
    updateChatboxBackground();
    updateOptionBackground();
  });
  // Update the chatbox-heading section
function updateChatboxHeading() {
  const chatboxHeading = document.querySelector('.chatbox-heading');
  chatboxHeading.style.backgroundColor = CHATBOT_HEADING_BG_COLOR;
}
 // Update the chatbox section
function updateChatboxBackground() {
  const chatbox = document.querySelector('.chatbox');
  chatbox.style.backgroundColor = CHATBOX_BG_COLOR;
}
function updateOptionBackground() {
  const options = document.querySelectorAll('.options-container button');
  options.forEach(option => {
      option.style.backgroundColor = OPTION_BG_COLOR_DEFAULT;

      option.addEventListener('mouseover', function () {
          option.style.backgroundColor = OPTION_BG_COLOR_HOVER;
      });

      option.addEventListener('mouseout', function () {
          option.style.backgroundColor = OPTION_BG_COLOR_DEFAULT;
      });
  });
}



  
  function showWelcomeMessage() {
    
    addBotMessage(BOT_WELCOME_MESSAGE);
    
    showOptions();
  }
  function showOptions() {
    const chatMessages = document.getElementById('chatMessages');
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options-container';
  optionsContainer.classList.add('options-container');

  const options = [
    {text: 'Login', handler: handleLoginClick},
    { text: 'Register', handler: handleRegisterClick },
    { text: 'FAQs', handler: handleFAQsClick },
    { text: 'Contact Us', handler: handleContactUsClick },
    { text: 'About Us', handler: handleAboutUsClick },
    
  ];
  options.forEach(option => {
    const optionElement = createOptionElement(option.text, option.handler);
    optionsContainer.appendChild(optionElement);
});

chatMessages.appendChild(optionsContainer);
  }

  function showOption(optionText, clickHandler) {
    const chatMessages = document.getElementById('chatMessages');
    const optionElement = createOptionElement(optionText, clickHandler);
    chatMessages.appendChild(optionElement);
  }
  function createOptionElement(optionText, clickHandler) {
    const optionElement = document.createElement('div');
    const optionButton = document.createElement('button');
    optionButton.textContent = optionText;
    
    optionButton.addEventListener('click', clickHandler);
    optionButton.addEventListener('mouseover', handleMouseOver);
    optionButton.addEventListener('mouseout', handleMouseOut);
  
    
    optionElement.appendChild(optionButton);
    
  
    return optionElement;
  }

  function handleLoginClick() {
    addUserMessage('Login');
    setTimeout(()=> {
      addBotMessage(BOT_LOGIN_PROMPT);
      showLoginOptions();
    },1000);
    
  }
  function showLoginOptions() {
    const chatMessages = document.getElementById('chatMessages');
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container user-options';
    const studentOption = createOptionElement('Student', handleStudentClick);
    const teacherOption = createOptionElement('Teacher', handleTeacherClick);
    optionsContainer.style.display= 'flex';
    optionsContainer.style.padding = '0';
    optionsContainer.style.margin = '0';
    studentOption.style.color = 'white'; // Set the desired text color
    
    studentOption.addEventListener('mouseover', function () {
       
    });
    studentOption.addEventListener('mouseout', function () {
        
    });
    teacherOption.style.color = 'white'; // Set the desired text color
  

    teacherOption.addEventListener('mouseover', function () {
        
    });
    teacherOption.addEventListener('mouseout', function () {
        
    });
    optionsContainer.appendChild(studentOption);
    optionsContainer.appendChild(teacherOption);
    chatMessages.appendChild(optionsContainer);
  }
  function handleStudentClick() {
    addUserMessage('Student');
    setTimeout(() => {
      
      addBotMessageLink('Here is the login link for students:','Student Login', 'https://ymv51yk1e8.execute-api.ap-south-1.amazonaws.com/login');
    }, 1000);
    // Handle Student-specific logic here
  }
  function addBotMessageLink(message, linkText, link) {
    const chatMessages = document.getElementById('chatMessages');
    const botMessage = createMessageElement('bot', message);

    const linkContainer = document.createElement('div');
    linkContainer.style.backgroundColor = botMessage.style.backgroundColor;

    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.textContent = linkText;
    linkElement.target = '_blank';

    linkContainer.appendChild(linkElement);
    botMessage.appendChild(linkContainer);

    chatMessages.appendChild(botMessage);
}

  function handleTeacherClick() {
    addUserMessage('Teacher');
    setTimeout(() => {
      
      addBotMessageLink('Here is the login link for Teachers:','Teacher Login', 'https://ymv51yk1e8.execute-api.ap-south-1.amazonaws.com/teacher');
    },1000);
      
  }
  function handleRegisterClick() {
    addUserMessage('Register');
    setTimeout(() => {
      
        addBotMessageLink('Here is the registration link for teachers:','Teacher Register', 'https://ymv51yk1e8.execute-api.ap-south-1.amazonaws.com/registration');
    },1000);
  }
  function handleFAQsClick() {
    addUserMessage('FAQs');
    setTimeout(()=> {
      
        addBotMessageLink('Click on the Below Link','FAQ Link', 'https://atlstage.unisolve.org/faq.html');
    }, 1000);
    // Handle FAQs logic here
  }
  function handleContactUsClick() {
    addUserMessage('Contact Us'); 
    setTimeout(() => {
      addBotMessage('Contact Information:\nPhone: 123-456-7890\nEmail: contact@example.com');
  }, 1000);
  }
  function handleAboutUsClick() {
    addUserMessage('AboutUs');
    setTimeout(() => {
      
        addBotMessageLink('Click on this link to see more AboutUs:','AboutUs', 'https://youtu.be/HufI5CnhkfU');
    },1000);
    // Handle About Us logic here
  }
  
  function handleMouseOver() {
    this.style.backgroundColor = 'pink';
    this.style.color = 'white';
  }
  
  function handleMouseOut() {
    this.style.backgroundColor = '';
    this.style.color = '';
  }
  
  function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = createMessageElement('bot', message);
    chatMessages.appendChild(messageElement);
  }
  
  function createMessageElement(role, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${role}`;
    // Create and append the text container
    const textContainer = document.createElement('div');
    textContainer.textContent = message;
    
    
     // Create and append the user or bot image
     const imageElement = document.createElement('img');
     imageElement.width = 20;
     imageElement.height = 20;
     // Create and append the project image for bot messages
     const projectImage = document.createElement('img');
     projectImage.width = 20;
     projectImage.height = 20;
     projectImage.src = 'projectimage.png';
     
    if (role === 'user') {
      imageElement.src= 'userimage.png';
      messageElement.appendChild(textContainer);
      messageElement.appendChild(imageElement);
      messageElement.style.textAlign = 'right';

  } if (role === 'bot') {
    messageElement.appendChild(projectImage);
    messageElement.appendChild(textContainer);
    messageElement.style.textAlign = 'left';
  }

     
    return messageElement;
  }
  
  function getColorBasedOnLength(length) {
    const hue = (length * 10) % 360;
    return `hsl(${hue}, 50%, 80%)`;
}
  
  function sendMessage() {
    const userMessage = document.getElementById('userMessage').value.trim();
    if (userMessage !== '') {
      addUserMessage(userMessage);
      handleUserMessage(userMessage);
      document.getElementById('userMessage').value = '';
    }
  }
  
 
  
  function handleUserMessage(message) {
    const cleanedMessage = message.trim().toLowerCase();
    setTimeout(() => {
      if(cleanedMessage === 'hii'){
        showWelcomeMessage();
  
      
      }
       else if(cleanedMessage === 'login'){
        
        addBotMessage('Are you a?');
        showLoginOptions();

      } 
      else if(cleanedMessage === 'register'){
        showRegisterLink();
      } else if(cleanedMessage === 'contactus'){
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';

        const contactInfoBox = document.createElement('div');
        contactInfoBox.style.padding = '10px';

        const contactInfoText = document.createTextNode('Contact Information:\nPhone: 123-456-7890\nEmail: contact@example.com');

        contactInfoBox.appendChild(contactInfoText);
        botMessage.appendChild(contactInfoBox);

        addBotMessageElement(botMessage);
      } else if(cleanedMessage === 'faqs'){
        const botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';

            const messageText = document.createTextNode('Here is the FAQ Link: ');

            const linkElement = document.createElement('a');
            linkElement.href = 'https://atlstage.unisolve.org/faq.html'; // Replace with the actual FAQ link
            linkElement.textContent = 'FAQ Link';
            linkElement.target = '_blank';

            botMessage.appendChild(messageText);
            botMessage.appendChild(linkElement);

            addBotMessageElement(botMessage);
      } 
      else if(cleanedMessage === 'aboutus'){
        const botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';

            const messageText = document.createTextNode('Here is the About Us Link: ');

            const linkElement = document.createElement('a');
            linkElement.href = 'https://youtu.be/HufI5CnhkfU'; // Replace with the actual About Us link
            linkElement.textContent = 'About Us Link';
            linkElement.target = '_blank';

            botMessage.appendChild(messageText);
            botMessage.appendChild(linkElement);

            addBotMessageElement(botMessage);
      }
      
       else {
        addBotMessage('Sorry i didnt understand your word ,can you please rephrase your word?' )
      }
      
    }, 1000);
  }
  function showRegisterLink() {
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot';

    const messageText = document.createTextNode('Here is the Registration Link of Teacher: ');

    const linkElement = document.createElement('a');
    linkElement.href = 'https://ymv51yk1e8.execute-api.ap-south-1.amazonaws.com/registration'; // Replace with the actual registration link
    linkElement.textContent = 'Teacher Registration';
    linkElement.target = '_blank';

    botMessage.appendChild(messageText);
    botMessage.appendChild(linkElement);

    addBotMessageElement(botMessage);
}

  function closeChatbox() {
    const chatboxContainer = document.querySelector('.chatbox-container');
    const messengerIcon = document.querySelector('.messenger-icon');
  
    // Hide the chatbox
    chatboxContainer.style.display = 'none';
  
    // Display the messenger icon
    messengerIcon.style.display = 'block';
    refreshChatbot();
   
  }
  function refreshChatbot() {
    const chatboxContainer = document.querySelector('.chatbox-container');
    const chatMessages = document.getElementById('chatMessages');
    const optionsContainer = document.querySelector('.options-container');

    // Hide the chatbox
    chatboxContainer.style.display = 'none';

    // Remove existing chat messages and options
    chatMessages.innerHTML = '';
    if (optionsContainer) {
        optionsContainer.remove();
    }

    // Show the welcome message again
    showWelcomeMessage();
}
  function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = createMessageElement('user', message);
    chatMessages.appendChild(messageElement);
    scrollToBottom(chatMessages);
  }
  function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}
  function addBotMessageElement(messageElement) {
    const chatMessages = document.getElementById('chatMessages');
    
    chatMessages.appendChild(messageElement);
    scrollToBottom(chatMessages);
  }
  
function getColorBasedOnLength(length) {
  // You can define your own logic here to determine the color based on the text length
  // For example, you can use a gradient or different colors for different length ranges
  // This is just a simple example, adjust it based on your design preferences
  const hue = (length * 10) % 360; // Adjust the multiplier as needed
  return `hsl(${hue}, 50%, 80%)`; // Using HSL color representation
}
function refreshChatbot() {
  const chatMessages = document.getElementById('chatMessages');
  const optionsContainer = document.querySelector('.options-container');

  // Remove existing chat messages and options
  chatMessages.innerHTML = '';
  if (optionsContainer) {
    optionsContainer.remove();
  }

  // Show the welcome message again
  showWelcomeMessage();
}




  
  