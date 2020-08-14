import React from "react";

class NewItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    
    render() {
        const { name } = this.state;
        return (
            <form style={{ display: "flex" }}>
                <input type="text" value={name} onChange={this.handleChange} />
                <button type="button" onClick={this.handleAddition} disabled={!name.trim()}>Add</button>
            </form>
        );
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleAddition = () => {
        this.props.onAdd(this.state.name);
        this.setState({
            name: ''
        });
    }
}

export default NewItem;
