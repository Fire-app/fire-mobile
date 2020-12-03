import { SET_ANNOUNCEMENTS } from './constants';

const setAnnouncementsAction = (announcements) => ({
  payload: { announcements },
  type: SET_ANNOUNCEMENTS,
});

export default setAnnouncementsAction;
