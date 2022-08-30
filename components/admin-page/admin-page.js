import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./admin-page.module.css";

function AdminPage() {
  const [updateData, setUpdateData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/student", {
          "Content-Type": "application/json",
        });
        console.log(res.data);
        setStudentsData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getStudents();
  }, [updateData]);

  const deleteStudent = async (id) => {
    try {
      const res = await axios.delete(`/api/student/${id}`, {
        "Content-Type": "application/json",
      });
      console.log(res.data);
      setUpdateData(!updateData);
    } catch (error) {
      console.error(error);
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <table className={classes.tableStudents}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Phone</th>
            <th>Email</th>
            <th>Birth</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Previous/Current School</th>
            <th>File</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsData &&
            studentsData.map((data) => {
              return (
                <tr key={data._id}>
                  <td>{data.name}</td>
                  <td>{data.mobile}</td>
                  <td>{data.email}</td>
                  <td>{moment(data.birth).format("DD MMM YYYY")}</td>
                  <td>{data.gender}</td>
                  <td>{data.grade}</td>
                  <td>{data.precurSchool}</td>
                  <td>
                    {data.imageList &&
                      data.imageList.map((img, i) => {
                        return (
                          <Image
                            key={i}
                            src={img.url}
                            width={100}
                            height={100}
                            objectFit="contain"
                            alt={img.name}
                          />
                        );
                      })}
                  </td>
                  <td>
                    <button className={classes.btn_detail}>Detail</button>
                    <button
                      className={classes.btn_delete}
                      onClick={() => deleteStudent(data._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
