const initialState = {
  auth: {
    status: 'ANONYMOUS',
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
