import React from 'react';
import './DataTable.css';

const DataTable = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Date</th>
            <th>Time</th>
            <th>COMP_TYPE</th>
            <th>camA_OD</th>
            <th>camB_OD</th>
            <th>camC_OD</th>
            <th>camD_OD</th>
            <th>camA_OD_CL</th>
            <th>camB_OD_CL</th>
            <th>camC_OD_CL</th>
            <th>camD_OD_CL</th>
            <th>camA_SH</th>
            <th>camB_SH_left</th>
            <th>camB_SH_right</th>
            <th>camC_SH</th>
            <th>camD_SH_left</th>
            <th>camD_SH_right</th>
            <th>camA_WW</th>
            <th>camB_WW_right</th>
            <th>camB_WW_left</th>
            <th>camC_WW</th>
            <th>camD_WW_left</th>
            <th>camD_WW_right</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.Date}</td>
              <td>{row.Time}</td>
              <td>{row.COMP_TYPE}</td>
              <td>{row.camA_OD}</td>
              <td>{row.camB_OD}</td>
              <td>{row.camC_OD}</td>
              <td>{row.camD_OD}</td>
              <td>{row.camA_OD_CL}</td>
              <td>{row.camB_OD_CL}</td>
              <td>{row.camC_OD_CL}</td>
              <td>{row.camD_OD_CL}</td>
              <td>{row.camA_SH}</td>
              <td>{row.camB_SH_left}</td>
              <td>{row.camB_SH_right}</td>
              <td>{row.camC_SH}</td>
              <td>{row.camD_SH_left}</td>
              <td>{row.camD_SH_right}</td>
              <td>{row.camA_WW}</td>
              <td>{row.camB_WW_right}</td>
              <td>{row.camB_WW_left}</td>
              <td>{row.camC_WW}</td>
              <td>{row.camD_WW_left}</td>
              <td>{row.camD_WW_right}</td>
              <td>{row.Reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
