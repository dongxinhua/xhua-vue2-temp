const USER_ID_KEY = 'demo_user_id'

export const getUserId = () => window.localStorage.getItem(USER_ID_KEY)

export const saveUserId = token =>
  window.localStorage.setItem(USER_ID_KEY, token)

export const destroyUserId = () => window.localStorage.removeItem(USER_ID_KEY)

export default { getUserId, saveUserId, destroyUserId }
