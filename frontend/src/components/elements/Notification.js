import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                "note 1",
                "note 2",
                "note 3"
            ]
        }

    }

    addNote(){
        var text = "";
        var Note = "";
        var i;
        for (i = 0; i < this.state.notes.length; i++) {
          Note = this.state.notes[i];
          text += Notes[i] + "<br>";
        }
        return <ListGroup.Item> text </ListGroup.Item>
    }

    render() {
        return<div>
            <ListGroup>

            </ListGroup>
        </div>

    }
}

export default Notification;