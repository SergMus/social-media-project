import React from "react";

class ProfileStatus extends React.Component {
  state = {
    isActive: false,
    text: this.props.status,
  };

  activateStatus() {
    this.setState({
      isActive: true,
    });
  }

  deActivateStatus() {
    this.setState({
      isActive: false,
    });
  }

  onTextChange(e) {
    this.setState({
      text: e.target.value,
    });
    this.props.updateUserStatus(e.target.value);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        text: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.isActive && (
          <div>
            <span onDoubleClick={this.activateStatus.bind(this)}>
              {this.state.text}
            </span>
          </div>
        )}
        {this.state.isActive && (
          <input
            autoFocus
            onBlur={this.deActivateStatus.bind(this)}
            onChange={this.onTextChange.bind(this)}
            value={this.state.text}
            placeholder="напишите свой статус..."
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
