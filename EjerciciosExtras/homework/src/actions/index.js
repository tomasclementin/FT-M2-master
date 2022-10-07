export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

export function getAllUsers() {
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => dispatch({type: GET_ALL_USERS, payload: users}))
    }
}

export function getAllUserPosts (userId) {
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(res => res.json())
            .then(userPost => dispatch({type: GET_ALL_USERS_POST, payload: userPost}))
    }
}

export function getAllCommentsPost (postId) {
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(postComments => dispatch({type: GET_ALL_COMMENTS_POST, payload: postComments}))
    }
}

export function getAllPosts () {
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(posts => dispatch({type: GET_ALL_POSTS, payload: posts}))
    }
}