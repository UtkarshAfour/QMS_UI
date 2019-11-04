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

/*
  import mui -datatables

*/

import MUIDataTable from "mui-datatables";

const columns = [
  {
    name : "empId",
    label : "EmployeeID",
    options: {
      filter: false,
    }
  },
  {
    name: "empName",
    label: "Name",
    options: {
     filter: false,
     sort: true,
    }
   },
   {
    name: "currentQuarter",
    label: "Current Quarter",
    options: {
     filter: false,
     sort: false,
    }
   },
   {
    name: "empManager",
    label: "Manager",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "empStatus",
    label: "Status",
    options: {
     filter: true,
     sort: false,
    }
   },
];


function createData(empId ,empName ,currentQuarter ,empManager  ,empStatus ) {
  return { empId: empId, empName: empName, currentQuarter: currentQuarter ,empManager: empManager ,empStatus: empStatus };
}

const data = [
  createData('AFT0071', 'empName ', 'Q1', 'empManager', 'Manager Review Pending' ),
  createData('AFT0101', 'empName2', 'Q1', 'empManager2', 'DU Head Review Pending'),
  createData('AFT0331', 'empName3', 'Q1','empManager3', 'HR Review Pending'),
  createData('AFT0041', 'empName4', 'Q1','empManager4', 'Review Complete'),
  createData('AFT0021', 'empName5', 'Q1','empManager5', 'Review Complete'),
];

/*
  select checkbox among various option
*/
const options = {
  filterType: 'checkbox',
};


export function HrForm() {
  useInjectReducer({ key: 'hrForm', reducer });
  useInjectSaga({ key: 'hrForm', saga });


  
  return (
    <div>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
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



