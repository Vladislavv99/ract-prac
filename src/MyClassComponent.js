import { Component } from "react";
import { nanoid } from "nanoid";

class MyClassComponent extends Component {
  state = {
    arr: [
      { id: nanoid(), name: "Vasia" },
      { id: nanoid(), name: "Piter" },
      { id: nanoid(), name: "Kolia" },
    ],
    item: "",
  };

  componentDidMount() {
    const isList = localStorage.getItem("Arr");
    if (isList) {
      this.setState({ arr: JSON.parse(isList) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.arr !== this.state.arr) {
      localStorage.setItem("Arr", JSON.stringify(this.state.arr));
    }
  }

  onHandleClick = () => {
    if (this.state.item === "") {
      alert("Input can not be empty");
      return;
    }
    this.setState({
      arr: [...this.state.arr, { name: this.state.item, id: nanoid() }],
    });
    this.setState({ item: "" });
  };

  onHandleChange = (e) => {
    const value = e.target.value;
    this.setState({ item: value });
  };

  onClickEnter = (e) => {
    if (e.key === "Enter") {
      this.onHandleClick();
    }
  };

  onDeleteClick = (id) => {
    const updatedNameList = this.state.arr.filter((name) => name.id !== id);
    this.setState({ arr: updatedNameList });
  };

  onHandleClickAllDelete = () => {
    this.setState({ arr: [] });
  };

  render() {
    return (
      <ul>
        <input
          type="text"
          onKeyDown={this.onClickEnter}
          onChange={this.onHandleChange}
          value={this.state.item}
        />
        {this.state.arr.length === 0 ? "" : <p>{this.state.arr.length}</p>}
        {this.state.arr.length === 0 ? (
          <p className="no-item">No item in list</p>
        ) : (
          this.state.arr.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => this.onDeleteClick(item.id)}>
                Delete
              </button>
            </li>
          ))
        )}
        <button onClick={this.onHandleClick}>Add one</button>
        <button onClick={this.onHandleClickAllDelete}>Clear List</button>
      </ul>
    );
  }
}

export default MyClassComponent;
