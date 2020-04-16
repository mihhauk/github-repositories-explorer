import { useSelector } from 'react-redux'

export const useUsers = () => {
  const users = useSelector(state => state.users)
  const status = useSelector((state) => state.status.searchUsers)

  return { users, status }
}
