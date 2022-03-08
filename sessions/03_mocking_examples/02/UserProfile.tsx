import { getUserProfile } from 'profile';
import { LoginButton } from 'components';

/**
 * UserInfo panel
 * @returns User Info panel component
 * or Login button if user profile not present
 */
export const LoginForm = () => {
  const userProfile = getUserProfile(localStorage.getItem('id_token'));

  if (userProfile === null) {
    return <LoginButton />
  }

  const { userName, avatarUrl } = userProfile;
  return (
    <div class="userProfile">
      <img src={avatarUrl} />
      <span class="userProfile_name">{userName}</span>
    </div>
  );
}