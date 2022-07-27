import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Container } from "react-bootstrap";
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
    <div className="bg-primary m-0 p-0 ">
      <Container>
        {data.loading ? (
          <h3>Loading ...</h3>
        ) : (
          <Table striped bordered variant="dark">
            <thead>
              <tr>
                <th>sr no</th>
                <th className="w-50">title</th>
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
                      <td className="w-50">{title}</td>
                      <td>
                        <a href={url} className="text-white">
                          {url}
                        </a>
                      </td>
                      <td>{author}</td>
                      <td>{created_at}</td>

                      <td>
                        <ul>
                          {_tags.map((tag: string, i: number) => {
                            return <li key={i}>{tag}</li>;
                          })}
                        </ul>
                      </td>
                      <td>
                        <AiFillDelete
                          className="text-danger "
                          style={{ fontSize: "20px" }}
                          onClick={() => handleDelete(objectID)}
                        />
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
