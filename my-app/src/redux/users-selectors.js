export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getSelectedPage = (state) => {
    return state.usersPage.selectedPage;
}

export const getIsFatching = (state) => {
    return state.usersPage.isFatching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
