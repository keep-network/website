import request from 'superagent';


const API_URL = 'https://backend.keep.network/session';

const stripQuery = () => {
    history.pushState(null, '', location.href.split('?')[0]);
};

export const createSession = () => {
    request.post(API_URL)
        .send({ url: location.href, referrer: document.referrer })
        .end((err, res) => {
            if (err) {
                // TODO add better error logging
                console.error(err);
            }

            stripQuery();
        });
};
