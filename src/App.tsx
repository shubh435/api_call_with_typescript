import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./store";
import { State } from "./reducers";
import { AiFillDelete } from "react-icons/ai";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.fetchData);
  const { getAllData, deleteById } = bindActionCreators(
    actionCreator,
    dispatch
  );

  useEffect(() => {
    getAllData();
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id: number): void => {
    deleteById(id);
  };
  return (
    <Box>
      <Typography variant="h2" align="center">
        Table Of Hits
      </Typography>
      <Container>
        {data.loading ? (
          <LoadingButton />
        ) : (
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">sr no</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">URL</TableCell>
                  <TableCell align="center">Author</TableCell>
                  <TableCell align="center">_tags</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.data.map((data: any, i: number) => {
                  const {
                    objectID,
                    title,
                    url,
                    author,

                    _tags,
                  } = data;
                  return (
                    <TableRow
                      key={objectID}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{++i}</TableCell>
                      <TableCell align="left">{title}</TableCell>
                      <TableCell>{url}</TableCell>
                      <TableCell align="left">{author}</TableCell>
                      <TableCell align="left">
                        {_tags[0]}
                        {/* <List>
                          {_tags.map((tag: string, i: number) => {
                            return (
                              <ListItem disablePadding key={i}>
                                <ListItemButton>
                                  <ListItemText primary={_tags} />
                                </ListItemButton>
                              </ListItem>
                            );
                          })}
                        </List> */}
                      </TableCell>
                      <TableCell align="center">
                        <Button onClick={() => handleDelete(objectID)}>
                          <AiFillDelete style={{ fontSize: "40px" }} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Box>
  );
};

export default App;
