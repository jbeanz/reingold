import logo from './logo.svg';
import './App.css';
import data from './data.json'
import { useState, useEffect } from 'react';
import styled from "styled-components";

const StyledTable = styled.table`
  border: none;
  border-collapse: collapse;

  td,
  th {
    border: none;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }

`;
function App() {
  const display = []
  function iterateObject(data) {
    for (const prop in data) {
      if (typeof (data[prop]) == "object") {
        iterateObject(data[prop]);
      } else {
        display.push(
          <tr>
            <td>{prop}</td>
            <td>{data[prop]}</td>
          </tr>
        )
      }
    }
  }
  iterateObject(data)

  return (
    <div>
      <StyledTable>
        {display}
      </StyledTable>
    </div>
  );
}

export default App;
