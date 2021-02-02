import Cookies from 'js-cookie'

const TokenKey = "User-Token"
const NameKey = "User-Name"
const AvatarKey = "User-Avatar"

/* 设置用户的Cookie */
export function setUser(token, name, avatar) {
    Cookies.set(TokenKey, token);
    Cookies.set(NameKey, name);
    Cookies.set(AvatarKey, avatar)
}
/* 获取用户的Cookie */
export function getUser() {
    let token = Cookies.get(TokenKey);
    let name = Cookies.get(NameKey);
    let avatar = Cookies.get(AvatarKey)
    return {token, name, avatar};
}
/* 删除用户的Cookie */
export function removeUser() {
    Cookies.remove(TokenKey);
    Cookies.remove(NameKey);
    Cookies.remove(AvatarKey)
}