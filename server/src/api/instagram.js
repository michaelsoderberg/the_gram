import R from 'ramda';

const Client = require('instagram-private-api').V1;
const cookiePath = __dirname + '/cookies/account.json';

export const getSession = () => {
    const device = new Client.Device('thegreatgram');
    const storage = new Client.CookieFileStorage(cookiePath);

    return new Client.Session(device, storage);
    // TODO: Check if session is valid before we create another one
    // Client.Session.create(device, storage, 'thegreatgram', `wqR'9,B[D+;XcSaJ`);
};

export const getNearbyMedia = async (session, locationId) =>
    new Client.Feed.LocationMedia(session, locationId).get();

