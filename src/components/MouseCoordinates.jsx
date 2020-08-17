import React from "react";

class MouseCoordinates extends React.Component {

    state = {
        x: 0,
        y: 0
    }

    render() {
        const { x, y } = this.state;
        return (
            <div>
                {x}:{y}
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove = (e) => {
        this.setState({
            x: e.x,
            y: e.y
        });
    }

}

export default MouseCoordinates;
