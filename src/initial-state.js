const initialState = {
  auth: {
    signedIn: false,
    email: null
  },
  currentMeal: {
    protein: '',
    proteinFlavors: '',
    vegetables: '',
    starches: '',
  },
  cart: [],
};

export default initialState;