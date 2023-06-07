const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior of the event
    event.preventDefault();
    // Save the event to a variable for later use
    // This event contains the necessary information to prompt the user to install the app
    const installPromptEvent = event;
    // Show the installation button or perform other actions
  });
  
  butInstall.addEventListener('click', async () => {
    // Ensure the `beforeinstallprompt` event was previously captured and stored
    if (installPromptEvent) {
      // Show the installation prompt to the user
      installPromptEvent.prompt();
      // Wait for the user to respond to the prompt
      const choiceResult = await installPromptEvent.userChoice;
      // Process the user's choice
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the installation prompt.');
      } else {
        console.log('User dismissed the installation prompt.');
      }
      // Clear the stored event after it has been used
      installPromptEvent = null;
    }
  });
  
  window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully!');
  });