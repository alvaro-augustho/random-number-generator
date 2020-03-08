import {setRandomNumber, setError} from '../../redux/actions/actions';

function fetchRandomNumber(min, max) {
    return dispatch => {
        fetch('http://localhost:3000/getNumber?min='+min+'&max='+max)
            .then(res => { if(res.ok) { return res.json(); } else { throw(res); }})
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(setRandomNumber(res.number));
                return res.number;
            })
            .catch(error => {
                dispatch(setError({errorMessage: error.statusText, errorCode: error.status}));
            });
    };
}

export default fetchRandomNumber;