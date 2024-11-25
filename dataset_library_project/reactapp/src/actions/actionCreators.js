const setActiveStatus = (statuses) => {
    return {
      type: 'statuses/SET_ACTIVE_STATUS',
      payload: statuses
    };
  }
export default setActiveStatus;