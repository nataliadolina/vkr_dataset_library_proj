const setActiveStatus = (status_name) => {
    return {
      type: 'statuses/SET_ACTIVE_STATUS',
      payload: status_name
    };
  }
export default setActiveStatus;