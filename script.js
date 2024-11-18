function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    
    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";
    
    // Add a pulsating animation
    welcomeText.classList.add("pulse-animation");
    
    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Set the date we're counting down to
  const eventDate = new Date("December 7, 2024 23:59:59").getTime();
  // Update the countdown every second
  const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the respective elements
      document.getElementById("days").innerHTML = days + " Days";
      document.getElementById("hours").innerHTML = hours + " Hours";
      document.getElementById("minutes").innerHTML = minutes + " Minutes";
      document.getElementById("seconds").innerHTML = seconds + " Seconds";
      // If the countdown is finished, display a message
      if (distance < 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown").innerHTML = "The event has started!";
      }
  }, 1000)

  // Array of motivational and JavaScript-related quotes
        const quotes = [
            "The best way to predict the future is to invent it. - Alan Kay",
            "JavaScript is the language of the web. - Unknown",
            "Code is like humor. When you have to explain it, it’s bad. - Cory House",
            "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
            "Simplicity is the soul of efficiency. - Austin Freeman",
            "First, solve the problem. Then, write the code. - John Johnson",
            "In programming, the hard part isn't solving problems, but deciding what problems to solve. - Paul Graham",
            "Good code is its own best documentation. - Steve McConnell",
            "JavaScript is the duct tape of the Internet. - Chris Heilmann",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
        ];

        // Function to get a random quote
        function getRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            document.getElementById("quote").innerText = randomQuote;
        }
        // Display a random quote on page load
        window.onload = getRandomQuote
        // Function to toggle the theme

        function toggleTheme() {
          const body = document.body;
          const button = document.getElementById("themeToggle");

          // Check current theme and toggle
          if (body.classList.contains("light")) {
              body.classList.remove("light");
              body.classList.add("dark");
              button.innerText = "Switch to Light Mode";
          } else {
              body.classList.remove("dark");
              body.classList.add("light");
              button.innerText = "Switch to Dark Mode";
          }
      }

      function updateGreeting() {
        // Get the value from the input field
        const name = document.getElementById("nameInput").value;
       // Get the greeting div
        const greetingDiv = document.getElementById("greeting"); // Change to new div for typed greeting
           
        // Clear previous greeting
        greetingDiv.innerText = "";
        let message = name ? `Welcome to JavaScript, ${name}!` : "Please enter your name.";
        let index = 0;
        // Function to type the message
        function type() {
            if (index < message.length) {
                greetingDiv.innerText += message.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval); // Clear interval when done
            }
        }
        // Set interval to type one character every 100 milliseconds
        const typingInterval = setInterval(type, 100);
    }
    const scrollContainer = document.getElementById('scrollContainer');
        const content = document.getElementById('content');
        const scrollBar = document.getElementById('scrollBar');

        // Calculate scrollbar height and set its position
        function updateScrollbar() {
            const containerHeight = scrollContainer.clientHeight;
            const contentHeight = content.scrollHeight;
            const scrollbarHeight = Math.max(containerHeight * (containerHeight / contentHeight), 30); // Minimum height for scrollbar
            scrollBar.style.height = scrollbarHeight + 'px';
            scrollBar.style.top = (scrollContainer.scrollTop / (contentHeight - containerHeight)) * (containerHeight - scrollbarHeight) + 'px';
        };

        // Initial setup
        updateScrollbar();
        // Scroll event
        scrollContainer.addEventListener('scroll', updateScrollbar);
        // Dragging the scrollbar
        let isDragging = false;
        let startY;
        scrollBar.addEventListener('mousedown', (e) => {
            isDragging = true;
            startY = e.clientY - scrollBar.offsetTop;
            document.body.style.cursor = 'grabbing';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.body.style.cursor = 'default';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                let top = e.clientY - startY;
                const containerHeight = scrollContainer.clientHeight;
                const scrollbarHeight = scrollBar.clientHeight;
                const maxTop = containerHeight - scrollbarHeight;

               // Constrain the scrollbar within the container
                top = Math.max(0, Math.min(top, maxTop));
                scrollBar.style.top = top + 'px';

                // Scroll the content
                const contentHeight = content.scrollHeight;
                scrollContainer.scrollTop = (top / (containerHeight - scrollbarHeight)) * (contentHeight - containerHeight);
            }
        })