import PropTypes from 'prop-types';

async function fetchRecentNotifications(token) {
  try {
    const result = await fetch(
      `https://fire-app-staging.herokuapp.com/recent-notifications?expoToken=${token}&language=english`,
      {
        language: 'english',
        method: 'GET',
      }
    );
    const data = await result.json();
    return data;
  } catch (e) {
    return e;
  }
}

fetchRecentNotifications.propTypes = {
  token: PropTypes.string.isRequired,
};

export default fetchRecentNotifications;
