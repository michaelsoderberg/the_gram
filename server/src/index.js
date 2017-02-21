import express from 'express';
import {getSession, getNearbyMedia} from './api/instagram';
import cors from 'cors';

const session = getSession();
const locationId = '218676665'; // Göteborg

const app = express();
app.use(cors())

app.get('/images', async (req, res) => {
  try {
    const media = await getNearbyMedia(session, locationId)

    const imageSize = 4;
    const images = media.map(m => m._params.images[imageSize]).filter(f => f);

    return res.json(images);
  } catch (e) {
    return res.json({ error: e.message });
  }
});
const port = process.env.PORT || 8000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    console.log('> in development');
  }

  console.log(`> listening on port ${port}`);
});

