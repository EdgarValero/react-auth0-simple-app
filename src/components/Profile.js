import { useAuth0 } from '@auth0/auth0-react';
import JsonPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';

const Profile = () => {

  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JsonPretty data={user} theme={JSONPrettyMon} />
      </div>
    )
  );
};

export default Profile;