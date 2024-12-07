const ActionType = {
  SET_LOADING: 'SET_LOADING',
};

function setLoading(loading) {
  return {
    type: ActionType.SET_LOADING,
    payload: {
      loading,
    },
  };
}

export {
  ActionType,
  setLoading,
};
