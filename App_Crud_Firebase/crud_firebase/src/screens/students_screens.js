import React, { useState, useEffect } from "react";

import firebaseDb from "../firebase";

import AddOrEditStudent from "./addOrEditStudent.js";

const StudentInfo = () => {
  var [currentId, setCurrentId] = useState("");

  var [studentObjects, setStudentObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("Student").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setStudentObjects({
          ...snapshot.val(),
        });
      } else {
        setStudentObjects({});
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "")
      firebaseDb.child("Student").push(
        obj,

        (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        }
      );
    else
      firebaseDb.child(`Student/${currentId}`).set(
        obj,

        (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        }
      );
  };

  const onDelete = (id) => {
    if (window.confirm("Excluir esse registro?")) {
      firebaseDb.child(`Student/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <div className="card">
      <div className="card-body pb-0">
        <div className="card">
          <div className="card-header main-search dash-search">
            <h3>Informações Estudantes</h3>
          </div>
        </div>

        <div className="row">
          <AddOrEditStudent
            {...{ currentId, studentObjects, addOrEdit }}
          ></AddOrEditStudent>

          <div className="col-12 col-md-12">
            <div className="card">
              <div className="card-header">Gerenciar Nome Completo</div>

              <div className="card-body position-relative">
                <div className="table-responsive cnstr-record product-tbl">
                  <table className="table table-bordered heading-hvr">
                    <thead>
                      <tr>
                        <th className="active">Nome Completo</th>

                        <th>Curso</th>

                        <th>Semestre</th>

                        <th>Período</th>

                        <th width="60"> </th>

                        <th width="60"> </th>
                      </tr>
                    </thead>

                    <tbody>
                      {Object.keys(studentObjects).map((key) => (
                        <tr key={key}>
                          <td>{studentObjects[key].FullName}</td>

                          <td>{studentObjects[key].Course}</td>

                          <td>{studentObjects[key].Semester}</td>

                          <td>{studentObjects[key].Period}</td>

                          <td className="case-record">
                            <button
                              type="button"
                              className="btn btn-info"
                              onClick={() => {
                                setCurrentId(key);
                              }}
                            >
                              Alterar
                            </button>
                          </td>

                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => {
                                onDelete(key);
                              }}
                            >
                              Deletar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
