import { useDispatch, useSelector } from 'react-redux'
import { searchUserRepositories } from '../../actions'

export const useUserRepos = (userLogin) => {
  const repos = useSelector((state => state.userRepositories[userLogin]))
  const status = useSelector((state) => state.status.userRepositories[userLogin])
  const dispatch = useDispatch()
  const getUserRepos = () => dispatch(searchUserRepositories(userLogin))

  return { status, repos, getUserRepos }
}