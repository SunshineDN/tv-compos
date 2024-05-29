import axios from 'axios';

const URL = import.meta.env.API_URL_MEDIA || 'http://localhost:3000/media';

const verifyType = (filename) => {
  if (/\.(jpg|jpeg|png|gif)$/i.test(filename)) {
    return 'image';
  } else if (/\.(mp4|webm|ogg|avi)$/i.test(filename)) {
    return 'video';
  } else {
    return 'audio';
  }
};

export const getFilenames = async () => {
  const { data: { files } } = await axios.get(`${URL}/get-medias`);
  const mediaObjects = files.map(filename => {
    const url = `${URL}/${filename}`;
    const alt = filename;
    const type = verifyType(filename);
    return { url, alt, type };
  });

  return mediaObjects;
};
