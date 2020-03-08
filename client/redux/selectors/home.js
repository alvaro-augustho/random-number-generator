import { setVisibilityFilter, VisibilityFilters } from '../actions/actions';

export const mapDispatchToProps = dispatch => {
	return {
		dispatchSetVisibilityFilter: () => {
			return dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
		}
	};
};