const generalTipsImage = require("../assets/videoCoverImages/general_tips.jpg");
const streetArrestImage = require("../assets/videoCoverImages/street_arrest.jpg");
const consultAttorneyImage = require("../assets/videoCoverImages/consult_attorney.jpg");
const isapAidImage = require("../assets/videoCoverImages/isap_aid.jpg");
const interrogationImage = require("../assets/videoCoverImages/interrogation.jpg");

const videos = [
  {
    title: "videos.general_tips",
    time: "1:11",
    image: generalTipsImage,
    videoUrl: "https://youtu.be/GapEalG_Kt8",
  },
  {
    title: "videos.interrogation",
    time: "1:56",
    image: interrogationImage,
    videoUrl: "https://youtu.be/pH-1V-1i9AE",
  },
  {
    title: "videos.consult_attorney",
    time: "2:30",
    image: consultAttorneyImage,
    videoUrl: "https://youtu.be/uxpRrK-xb4I",
  },
  {
    title: "videos.isap_detention",
    time: "2:26",
    image: isapAidImage,
    videoUrl: "https://youtu.be/U8raAQ2sUYw",
  },
  {
    title: "videos.arrested_street",
    time: "2:30",
    image: streetArrestImage,
    videoUrl: "https://youtu.be/mmsIccaRWVs",
  },
];

export default videos;
