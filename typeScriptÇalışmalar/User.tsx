import React, { Component } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
export {};



class User extends React.Component<any, { isVisible: boolean }> {
  state = { isVisible: true };

  public static propTypes = {};
  public static defaultProps = {
    name: "Bilgi yok",
    salary: "Bilgi yok",
    departman: "Bilgi yok",
    number: "Bilgi Yok",
  };

  //constructor (props:any) {
  //super(props)

  // this.state = {
  //  isVisible :false

  // }
  // }
 

  onClickEvent =(number :number,event:any) => {
this.setState(
  {
    isVisible :!this.state.isVisible
  }
)
  }
  
  render() {
    //Destructing
    const { name, departman, salary } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="col-md-12 row mb-4">
        <div className="col-md-4"></div>

        <div className="col-md-4">
          <div className="card">
            <div className="div.card-header d-flex justify-content-between">
              <h4 className="d-inline" onClick={this.onClickEvent.bind(this,34)}>
              

                {" "}
                {name}{" "}
                <i className="fas fa-user" style={{ cursor: "pointer" }}></i>
              </h4>
            </div>
            {isVisible ? (
              <div className="card-body" >
                <p className="card-text"> Salary :{salary} </p>
                <p className="card-text"> Department :{departman} </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="col-md-4"></div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  departman: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default User;
function setCount(arg0: any): void {
  throw new Error("Function not implemented.");
}

