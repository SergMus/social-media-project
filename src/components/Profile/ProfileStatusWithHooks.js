import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  //   state = {
  //     isActive: false,
  //     text: this.props.status,
  //   };

  //   activateStatus() {
  //     this.setState({
  //       isActive: true,
  //     });
  //   }

  //   deActivateStatus() {
  //     this.setState({
  //       isActive: false,
  //     });
  //   }

  //   onTextChange(e) {
  //     this.setState({
  //       text: e.target.value,
  //     });
  //     this.props.updateUserStatus(e.target.value);
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.status !== this.props.status) {
  //       this.setState({
  //         text: this.props.status,
  //       });
  //     }
  //   }

  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const activateStatus = () => {
    setIsActive(true);
  };
  const deActivateStatus = () => {
    setIsActive(false);
    props.updateUserStatus(status);
  };
  const onTextChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!isActive && (
        <div onDoubleClick={activateStatus}>
          <span>{props.status}</span>
        </div>
      )}
      {isActive && (
        <input
          autoFocus
          onChange={onTextChange}
          onBlur={deActivateStatus}
          value={status}
          placeholder="напишите свой статус..."
        />
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
