const generalTipsImage = require('../assets/videoCoverImages/general_tips.jpg');
const streetArrestImage = require('../assets/videoCoverImages/street_arrest.jpg');
const consultAttorneyImage = require('../assets/videoCoverImages/consult_attorney.jpg');
const isapAidImage = require('../assets/videoCoverImages/isap_aid.jpg');
const interrogationImage = require('../assets/videoCoverImages/interrogation.jpg');

const videos = [
  {
    image: generalTipsImage,
    time: '1:11',
    title: 'videos.general_tips',
    videoUrl: 'https://youtu.be/GapEalG_Kt8',
  },
  {
    image: interrogationImage,
    time: '1:56',
    title: 'videos.interrogation',
    videoUrl: 'https://youtu.be/pH-1V-1i9AE',
  },
  {
    image: consultAttorneyImage,
    time: '2:30',
    title: 'videos.consult_attorney',
    videoUrl: 'https://youtu.be/uxpRrK-xb4I',
  },
  {
    image: isapAidImage,
    time: '2:26',
    title: 'videos.isap_detention',
    videoUrl: 'https://youtu.be/U8raAQ2sUYw',
  },
  {
    image: streetArrestImage,
    time: '2:30',
    title: 'videos.arrested_street',
    videoUrl: 'https://youtu.be/mmsIccaRWVs',
  },
];

export default videos;
