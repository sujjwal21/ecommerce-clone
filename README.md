# E-Commerce UI Clone

## Objective
This project involves developing a clone of an e-commerce website using React, Firebase, and the Fake API from Platzi. The assignment showcases skills in front-end development, API integration, and web development best practices.

---

## Features

### Front-End Development
- Built with **React**, leveraging its component-based architecture for a modular and maintainable codebase.
- Fully **responsive design** to ensure usability across devices of all screen sizes.
- Key functionalities implemented:
  - **Product Listings**: Display a grid of products dynamically fetched from the Fake API.
  - **Product Details**: View detailed information about a specific product, including images, descriptions, and prices.
  - **Cart**: Add items to the cart with real-time updates and view all selected items.
  - **Checkout**: Simulate a checkout process for selected items.

### API Integration
- Utilized the **Platzi Fake API** to dynamically fetch and render:
  - Product information (images, descriptions, and prices).
  - Categories and other related data.
- Ensured efficient data fetching and state management for seamless user experience.

### User Authentication
- Integrated **Firebase Authentication** to allow users to:
  - **Sign up** with email/password.
  - **Log in** securely.
- Enabled persistent authentication state to enhance user experience.

### Additional Features
- **Cart Functionality**:
  - Add items to the cart with visual feedback.
  - Remove items or adjust quantities directly within the cart.
- **Mock Checkout**:
  - Simulate a checkout process.
  - Display a summary of items, total cost, and other relevant details.

---

## Tech Stack
- **Front-End**: React, React Router for routing, Tailwind CSS for styling.
- **Authentication**: Firebase Authentication.
- **API**: Platzi Fake API for products and categories.

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-ui-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase credentials and API base URL:
   ```env
  REACT_APP_APIKEY="xyz"
  REACT_APP_AUTHDOMAIN="xyz"
  REACT_APP_PROJECTID="xyz"
  REACT_APP_STORAGE_BUCKET="xyz"
  REACT_APP_MESSAGINGSENDERID="xyz"
  REACT_APP_APPID="xyz"
  REACT_APP_MEASUREMENTID="xyz"

   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Deployment
The project can be deployed using services like **Netlify**, **Vercel**, or **Firebase Hosting**. Ensure environment variables are correctly set up in the deployment platform.

---

## Project Structure
```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── ProductList.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   └── ...
│   ├── pages
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── ...
│   ├── services
│   │   ├── api.js
│   │   └── auth.js
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

---

## Future Improvements
- Add search and filtering options for products.
- Implement sorting by price, popularity, and category.
- Enable persistent cart state using local storage or a database.
- Enhance the checkout process with a payment gateway integration.

---



---

## Contact
If you have any questions or suggestions, feel free to reach out:
- **Name**: Ujjwal Singh
- **Email**: sujjwal8521@gmail.com
- **GitHub**: [your-username](https://github.com/sujjwal21)

