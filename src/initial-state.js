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
  cart: []
};

export default initialState;
