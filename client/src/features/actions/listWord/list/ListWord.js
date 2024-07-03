import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  useDeleteListWordsMutation,
  useGetAllListWordsQuery,
  useGetAllListWordsByClassMutation,
} from "../view/ListWordApiSlice";
import { MdDelete } from "react-icons/md";
import { RxPencil2 } from "react-icons/rx";
import { ImList2 } from "react-icons/im";
import { useSelector } from "react-redux";
import CurrentSchoolAndClass from "../../../companies/CurrentSchoolAndClass/CurrentSchoolAndClass";
const ListWord = () => {
  const [
    getAllListWordsByClass,
    { data: wordLsList, isError, error, isLoading },
  ] = useGetAllListWordsByClassMutation();
  const { chosenClass } = useSelector((state) => state.schoolAndClass);
  let classObj
  if(chosenClass)
   classObj={chosenClass:chosenClass}
  useEffect(() => {
    if(chosenClass)
    getAllListWordsByClass(classObj);
  },[chosenClass]);
  const [deleteListWords, { error: er }] = useDeleteListWordsMutation();
  if(!chosenClass)return <CurrentSchoolAndClass/>
if(error)
{
 return( <h1>{error.data.message}</h1>)
}  // const {
  //   data: wordLsList,
  //   isError,
  //   error,
  //   isLoading,
  // } = useGetAllListWordsQuery();
  const deleteClick = (list) => {
    if (window.confirm("בטוח שברתונך למחוק את החברה ?")) {
      deleteListWords({ _id: list._id });
    }
  };

  if (isLoading) return <h1>loading...</h1>;  
  let count = 0;
  return (
    <div>
      <table className="users-list-table">
        <thead>
          <tr>
            <td>מס' בחינה</td>

            <td>כותרת</td>
            <td> תאריך</td>
            <td> מספר מילים </td>
          </tr>
        </thead>
        <tbody>
          {wordLsList?.data.map((list) => (
            <tr key={list._id}>
              {" "}
              <td>{++count}</td>
              <td>
                <div className="users-list-company">{list.title}</div>
              </td>
              <td>{list.date.slice(0, 10)}</td>
              <td>{list.test.length}</td>
              <td>
                <div className="users-list-buttons">
                  <Link
                    to={`/dash/actions/test/${list._id}`}
                    className="users-list-button users-list-view"
                  >
                    {" "}
           <RxPencil2 title="update" fontSize={20} />
                  </Link>
                  <Link
                    to={`/dash/actions/${list._id}`}
                    className="users-list-button users-list-view"
                  >
                    {/* צפייה */}
                    <ImList2 title="list" />
                  </Link>
                  <button
                    onClick={() => {
                      deleteClick(list);
                    }}
                    className="users-list-button users-list-delete"
                  >
                    {/* מחיקה */}
                    <MdDelete title="Delete" fontSize={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListWord;
