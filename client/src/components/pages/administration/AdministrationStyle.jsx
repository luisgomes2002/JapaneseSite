import styled from "styled-components";

export const AllUsersInfo = styled.div`
  margin: 50px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  thead {
    text-align: center;
  }

  table {
    width: 100%;
  }

  th {
    padding: 20px 0;
  }

  td {
    padding: 10px 0;
    max-width: 100px;
  }

  button {
    background-color: #aa2525;
    border: none;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
  }
`;

export const Pagination = styled.div`
  display: flex;

  button {
    width: 40px;
    height: 40px;
  }
`;
