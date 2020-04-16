import { useDispatch } from 'react-redux'
import { searchUsers } from '../../actions'

export const useSearchUsers = () => {
  const dispatch = useDispatch()
  return query => dispatch(searchUsers(query))
}