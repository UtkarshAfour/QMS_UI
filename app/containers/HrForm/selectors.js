import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the hrForm state domain
 */

const selectHrFormDomain = state => state.hrForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HrForm
 */

const makeSelectHrForm = () =>
  createSelector(
    selectHrFormDomain,
    substate => substate,
  );

export default makeSelectHrForm;
export { selectHrFormDomain };
