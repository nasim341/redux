import React from 'react';

const CreateTodo = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <input placeholder="Task Name" type="text" className="form-control"></input>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger">Add Todo</button>
                </div>
            </div>
        </div>
    );
};
export default CreateTodo;