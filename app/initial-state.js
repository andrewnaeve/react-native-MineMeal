const initialState = {
  auth: {
    status: 'UNKNOWN',
    loggedIn: null,
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
  },
};

export default initialState;
