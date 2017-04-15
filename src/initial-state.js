const initialState = {
  auth: {
    status: 'ANONYMOUS',
    loggedIn: false,
    email: '',
    error: '',
  },
  currentMeal: {
    protein: '',
    proteinFlavors: '',
    vegetables: '',
    starches: '',
  },
  cart: [],
  appIsReady: false,
};

export default initialState;
