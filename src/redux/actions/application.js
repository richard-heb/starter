export const SET_STATE='@@application/SET_STATE';
export const APP_LOADING='@@application/APP_LOADING';

export const appLoading = (loading) => {
  return {
    type: APP_LOADING,
    payload: {
      loading
    }
  }
}
