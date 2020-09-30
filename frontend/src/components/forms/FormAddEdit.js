import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class AddEditForm extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        student_id: '',
        class_standing: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitFormAdd = e => {
        e.preventDefault()
        fetch("api/students/", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                student_id: this.state.student_id,
                class_standing: this.state.class_standing,
            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    this.props.addItemToState(item[0])
                    this.props.toggle()
                } else {
                    console.log(item)
                    console.log('failure')
                }
            })
            .catch(err => console.log(err))
    }


    componentDidMount() {
        // if item exists, populate the state with proper data
        if (this.props.item) {
            const {first_name, last_name, email, student_id, class_standing} = this.props.item
            this.setState({first_name, last_name, email, student_id, class_standing})
        }
    }

    render() {
        return (
            <Form onSubmit={this.submitFormAdd}>
                <FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Input type="text" name="first_name" id="first_name" onChange={this.onChange}
                           value={this.state.first_name === null ? '' : this.state.first_name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input type="text" name="last_name" id="last_name" onChange={this.onChange}
                           value={this.state.last_name === null ? '' : this.state.last_name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={this.onChange}
                           value={this.state.email === null ? '' : this.state.email}/>
                </FormGroup>
                <FormGroup>
                    <Label for="student_id">Student ID</Label>
                    <Input type="text" name="student_id" id="student_id" onChange={this.onChange}
                           value={this.state.student_id === null ? '' : this.state.student_id}/>
                </FormGroup>
                <FormGroup>
                    <Label for="class_standing">Class Standing</Label>
                    <Input type="text" name="class_standing" id="class_standing" onChange={this.onChange}
                           value={this.state.class_standing === null ? '' : this.state.class_standing}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default AddEditForm;