import pkg from 'express-openid-connect';
const { auth, requiresAuth } = pkg;

import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config({ path: "../../.env"}); // Adjust the path based on your directory structure




const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Profile route - requires authentication
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2)); // Pretty-print the user object
  });

// Add app.listen to start the server
// const PORT = 3000; // Default to 3000 if PORT is not set in .env
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

export default app;