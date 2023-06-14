export const getPeople = (state) => {
  return state.PeoplePage.PeopleData;
};
export const getPageSize = (state) => {
  return state.PeoplePage.pageSize;
};
export const getTotalCount = (state) => {
  return state.PeoplePage.totalusersCount;
};
export const getCurrentPage = (state) => {
  return state.PeoplePage.currentPage;
};
export const getFetching = (state) => {
  return state.PeoplePage.isFetching;
};
export const getFollowingProgress = (state) => {
  return state.PeoplePage.followingProgress;
};
