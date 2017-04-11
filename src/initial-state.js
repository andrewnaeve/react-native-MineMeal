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
  navigation: {
    key: '',
    index: 0,
    scenes: [],
  },
};

export default initialState;
