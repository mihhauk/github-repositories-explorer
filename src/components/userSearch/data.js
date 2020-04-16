import { useDispatch, useSelector } from 'react-redux'
import { searchUsers as searchUsersAction } from '../../actions'

export const useSearchUsers = () => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.status.searchUsers)
  const searchUsers = (query) => dispatch(searchUsersAction(query))
  return { searchUsers, status }
}