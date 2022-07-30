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
import DataGridDemo from "./Components/DataGridDemo";
import { DataGrid } from "@mui/x-data-grid";

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
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
    {
      field: "url",
      headerName: "Url",
      width: 250,
      editable: true,
    },
    {
      field: "author",
      headerName: "Author",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "_tags",
      headerName: "_tags",
      type: "string",
      width: 110,
      editable: true,
    },
    // {
    //   field: "action",
    //   headerName: "actions",
    //   type: "button",
    //   width: 110,
    
    // },
  ];
  const row = data.data.map((data: any) => {
    return {
      id: data.objectID,
      ...data,

    };
  });
  return (
    <>
      <Box>
        <Typography variant="h2" align="center">
          Table Of Hits
        </Typography>
        <Container>
          {data.loading ? (
            <LoadingButton />
          ) : (
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={row}
                pageSize={10}
                rowsPerPageOptions={[10]}
                columns={columns}
              />
            </Box>
            // <TableContainer>
            //   <Table aria-label="simple table">
            //     <TableHead>
            //       <TableRow>
            //         <TableCell align="center">sr no</TableCell>
            //         <TableCell align="center">Title</TableCell>
            //         <TableCell align="center">URL</TableCell>
            //         <TableCell align="center">Author</TableCell>
            //         <TableCell align="center">_tags</TableCell>
            //         <TableCell align="center">Actions</TableCell>
            //       </TableRow>
            //     </TableHead>
            //     <TableBody>
            //       {data.data.map((data: any, i: number) => {
            //         const {
            //           objectID,
            //           title,
            //           url,
            //           author,

            //           _tags,
            //         } = data;
            //         return (
            //           <TableRow
            //             key={objectID}
            //             sx={{
            //               "&:last-child td, &:last-child th": { border: 0 },
            //             }}
            //           >
            //             <TableCell align="left">{++i}</TableCell>
            //             <TableCell align="left">{title}</TableCell>
            //             <TableCell>{url}</TableCell>
            //             <TableCell align="left">{author}</TableCell>
            //             <TableCell align="left">
            //               {_tags[0]}
            //               {/* <List>
            //               {_tags.map((tag: string, i: number) => {
            //                 return (
            //                   <ListItem disablePadding key={i}>
            //                     <ListItemButton>
            //                       <ListItemText primary={_tags} />
            //                     </ListItemButton>
            //                   </ListItem>
            //                 );
            //               })}
            //             </List> */}
            //             </TableCell>
            //             <TableCell align="center">
            //               <Button onClick={() => handleDelete(objectID)}>
            //                 <AiFillDelete style={{ fontSize: "40px" }} />
            //               </Button>
            //             </TableCell>
            //           </TableRow>
            //         );
            //       })}
            //     </TableBody>
            //   </Table>
            // </TableContainer>
          )}
        </Container>
        {/* <DataGridDemo /> */}
      </Box>
    </>
  );
};

export default App;
function id(id: any) {
  throw new Error("Function not implemented.");
}

