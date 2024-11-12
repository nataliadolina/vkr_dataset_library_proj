const initialState = {
    datasetsList: [],
  };
  
const datasetsListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'datasets/GET_ALL':
        return {datasetsList: action.payload}
      default:
        return state;
    }
};
  
export default datasetsListReducer;