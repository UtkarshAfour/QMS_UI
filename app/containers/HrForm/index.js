/**
 *
 * HrForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHrForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';




function createData(empId ,empName ,currentQuarter ,empManager  ,empStatus ) {
  return { empId, empName, currentQuarter ,empManager ,empStatus };
}

const rows = [
  createData('AFT0071', 'empName ', 'Q1', 'empManager', 'Manager Review Pending' ),
  createData('AFT0101', 'empName2', 'Q1', 'empManager2', 'DU Head Review Pending'),
  createData('AFT0331', 'empName3', 'Q1','empManager3', 'HR Review Pending'),
  createData('AFT0041', 'empName4', 'Q1','empManager4', 'Review Complete'),
  createData('AFT0021', 'empName5', 'Q1','empManager5', 'Review Complete'),
];


export function HrForm() {
  useInjectReducer({ key: 'hrForm', reducer });
  useInjectSaga({ key: 'hrForm', saga });


  
  return (
    <div>
      
    </div>
  );
}

HrForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  hrForm: makeSelectHrForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HrForm);



