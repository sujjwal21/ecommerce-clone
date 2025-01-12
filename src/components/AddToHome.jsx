import React, { useEffect, useState } from "react";

function AddToHomeScreen() {
  // State to store the 'beforeinstallprompt' event when triggered
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Event handler for the 'beforeinstallprompt' event
    const handler = (e) => {
      e.preventDefault(); // Prevent the default browser prompt
      setDeferredPrompt(e); // Store the event for later use
    };

    // Add the 'beforeinstallprompt' event listener to the window
    window.addEventListener("beforeinstallprompt", handler);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []); // Empty dependency array ensures this runs only once

  // Function to handle the "Add to Home Screen" action
  const handleAddToHomeScreen = async () => {
    if (deferredPrompt) {
      // Fetch the existing web app manifest
      const manifestLink = document.querySelector('link[rel="manifest"]');
      const response = await fetch(manifestLink.href);
      const manifest = await response.json();

      // Update the 'start_url' in the manifest to the current page URL
      manifest.start_url = window.location.href;

      // Create a new blob containing the updated manifest
      const blob = new Blob([JSON.stringify(manifest)], {
        type: "application/json",
      });

      // Create an object URL for the updated manifest and set it as the manifest link's href
      const manifestURL = URL.createObjectURL(blob);
      manifestLink.setAttribute("href", manifestURL);

      // Show the install prompt to the user
      deferredPrompt.prompt();

      // Wait for the user's choice (accepted or dismissed)
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }

      // Clear the stored 'beforeinstallprompt' event after the prompt
      setDeferredPrompt(null);
    }
  };

  // If there is no deferredPrompt, render nothing
  if (!deferredPrompt) return null;

  // Render a button that allows the user to trigger the "Add to Home Screen" prompt
  return <button onClick={handleAddToHomeScreen}>Add to Home Screen</button>;
}

export default AddToHomeScreen;
