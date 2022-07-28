import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Container, ListGroup } from "react-bootstrap";
import { actionCreator } from "./store";
import { State } from "./reducers";
import { AiFillDelete } from "react-icons/ai";
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
    <div>
      <h3 className="text-center mb-5 mt-2">Table Of Hits</h3>
      <Container>
        {data.loading ? (
          <div
            className="text-center d-flex justify-content-center mx-auto spinner-grow"
            role="status"
          >
            {/* <span className="sr-only">Loading...</span> */}
          </div>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>sr no</th>
                <th >title</th>
                <th>url</th>
                <th>author</th>
                <th>created_at</th>
                <th>_tags</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.data &&
                data.data.map((data: any, i: number) => {
                  const {
                    objectID,
                    title,
                    url,
                    author,
                    created_at,

                    _tags,
                  } = data;
                  return (
                    <tr key={objectID} className="py-4 ">
                      <td>{++i}</td>
                      <td className="">{title}</td>
                      <td>
                        <a href={url} className="text-decoration-none">
                          {url ? url : "null"}
                        </a>
                      </td>
                      <td>{author}</td>
                      <td>{created_at}</td>

                      <td>
                        <ListGroup>
                          {_tags.map((tag: string, i: number) => {
                            return (
                              <ListGroup.Item variant="dark" key={i}>
                                {tag}
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </td>
                      <td >
                        <button
                          className="btn btn-danger d-flex justify-content-center align-items-center"
                          onClick={() => handleDelete(objectID)}
                        >
                          <AiFillDelete style={{ fontSize: "40px" }} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
};

export default App;
