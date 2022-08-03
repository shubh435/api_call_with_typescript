import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./store";
import { State } from "./reducers";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import InfiniteScroll from "react-infinite-scroll-component";
import { InitialState } from "./Interfaces";
// import GridExample from "./Components/GridExample";

// let pageNo = 0;
const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data, count, hits }: InitialState = useSelector(
    (state: State) => state.fetchData
  );
  const { getAllData, deleteById, increase_data } = bindActionCreators(
    actionCreator,
    dispatch
  );

  useEffect(() => {
    console.log({ key: count });
    getAllData(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const func = () => {
    const timer = setInterval(() => {
      handleFetchMore();
    }, 10000);
    if (count < data.nbPages) {
      clearInterval(timer);
    }
  };

  func();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = (id: number): void => {
    deleteById(id);
  };
  const columns = [
    { field: "sr", headerName: "sr. no .", width: 90 },
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 450,
      editable: true,
    },
    {
      field: "url",
      headerName: "Url",
      width: 550,
      editable: true,
    },
    {
      field: "author",
      headerName: "Author",
      type: "string",
      width: 210,
      editable: true,
    },
    {
      field: "_tags",
      headerName: "_tags",
      type: "string",
      width: 310,
      editable: true,
    },
  ];
  let i: number = 0;
  const row =
    hits &&
    hits.map((data: any) => {
      i = i + 1;
      return {
        sr: i,
        id: data.objectID,
        ...data,
      };
    });

  const handleFetchMore = () => {
    if (count < data.nbPages) {
      increase_data();
    }
  };

  return (
    <>
      <Typography variant="h2" align="center">
        Table Of Hits
      </Typography>

      <InfiniteScroll
        next={() => handleFetchMore()}
        hasMore={count < data.nbPages}
        loader={<LoadingButton />}
        dataLength={hits.length}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ height: 700, width: "100%", margin: "10px auto" }}
      >
        <DataGrid
          rows={row}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
        />
      </InfiniteScroll>
    </>
  );
};

export default App;
