import Cookies from 'js-cookie'

const UserIdKey = "User-Id"
const TokenKey = "User-Token"
const NameKey = "User-Name"
const AvatarKey = "User-Avatar"

/* 设置用户的Cookie */
export function setUser(userId, token, name, avatar) {
    Cookies.set(UserIdKey, userId);
    Cookies.set(TokenKey, token);
    Cookies.set(NameKey, name);
    Cookies.set(AvatarKey, avatar)
}
/* 获取用户的Cookie */
export function getUser() {
    let userId = Cookies.get(UserIdKey);
    let token = Cookies.get(TokenKey);
    let username = Cookies.get(NameKey);
    let avatar = Cookies.get(AvatarKey)
    return {userId, token, username, avatar};
}
/* 删除用户的Cookie */
export function removeUser() {
    Cookies.remove(UserIdKey);
    Cookies.remove(TokenKey);
    Cookies.remove(NameKey);
    Cookies.remove(AvatarKey)
}