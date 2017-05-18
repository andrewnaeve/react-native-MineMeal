const initialState = {
  auth: {
    status: 'UNKNOWN',
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
  appIsReady: {
    assets: false,
    app: false,
  }
};

export default initialState;
