import React, { useState, useEffect } from "react";
import ContestService from "../../service/contest.service";
import ContestForm from "./ContestForm";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ListContest() {
  const [id, setid] = useState();
  const [name, setName] = useState();
  const [capacity, setCapacity] = useState();
  const [registrationAllowed, setRegistrationAllowed] = useState();

  const [loaded, setLoaded] = useState(false);
  const [edit, setEdit] = useState(false);

  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await ContestService.listContest();
    setData(data);
    setLoaded(true);
  };

  useEffect(() => {
    getData();
  }, [data]);

  function handleContestDelete(event, contestId) {
    ContestService.deleteContest(contestId).then((res) => {
      const del = data.filter((row) => contestId !== row.id);
      setData(del);
    });
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCapacityChange(event) {
    setCapacity(event.target.value);
  }
  function handleRegistrationAllowedChange(event) {
    setRegistrationAllowed(event.target.checked);
  }
  function handleContestEdit(row) {
    setid(row.id);
    setEdit(true);
    setName(row.name);
    setCapacity(row.capacity);
    setRegistrationAllowed(row.registration_allowed);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const contest = {
      id: id,
      name: name,
      capacity: capacity,
      registration_allowed: registrationAllowed,
    };
    ContestService.editContest(contest);
    setEdit(false);
  }

  function onCancel(event) {
    setEdit(false);
  }

  if (loaded)
    return (
      <div>
        <h3> Read Contest</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Registration Allowed</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.capacity}</TableCell>
                  <TableCell>{String(row.registration_allowed)}</TableCell>
                  <TableCell>
                    <div>
                      <button
                        onClick={(event) => handleContestDelete(event, row.id)}
                      >
                        Delete
                      </button>

                      <button onClick={() => handleContestEdit(row)}>
                        Edit
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {edit && (
          <ContestForm
            name={name}
            capacity={capacity}
            registration_allowed={registrationAllowed}
            handleNameChange={handleNameChange}
            handleCapacityChange={handleCapacityChange}
            handleRegistrationAllowedChange={handleRegistrationAllowedChange}
            handleFormSubmit={handleFormSubmit}
            onCancel={onCancel}
          />
        )}
      </div>
    );
}
