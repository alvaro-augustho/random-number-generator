import {setRandomNumber} from '../../redux/actions/actions';

function fetchRandomNumber(min, max) {
    return dispatch => {
        //dispatch(fetchProductsPending());
        fetch('http://localhost:3000/getNumber?min='+min+'&max='+max)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(setRandomNumber(res.number));
                return res.number;
            })
            .catch(error => {
                //dispatch(fetchProductsError(error));
            });
    };
}

export default fetchRandomNumber;