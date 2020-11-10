import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import "../../../static/css/pages/mentorPg.css"
import Hours from "../../pages/hours";
import {getHoursList} from "../../../functions/services/api/hours_request/get_hours_list";

class StudentCard extends Component {

    state = {
        status: 'PENDING',
        page: 1,
        data: {results: []}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps != this.props) {
            this.getHours()
        }
    }

    getHours = () => {
        getHoursList(this, this.state.status, this.props.id, this.state.page, this.props.type ==='mentor'? 'mentor' : 'student')
    };

    componentDidMount() {
        this.getHours()
    }

    refreshHourData = () => {
        this.getHours()
    };

    pagination = (val) => {
        this.setState({
            page: val
        }, () => {
            this.getHours()
        })
    };

    render() {
        const {first_name, last_name} = this.props.mentor;
        const {id} = this.props.id;
        const {page} = this.state;
        const {count} = this.state.data;
        const {user_role} = this.props;
        console.log('mentor', this.props.mentor);

        console.log(id)
        return <div className="px-2">
            <Card className={"shadow-md my-1"} style={{borderRadius: "7px"}}>
                <Card.Body>
                    <Card.Title> {first_name} {last_name} </Card.Title>
                    <div className={'p-2 flex'}>
                        <button
                            className={"mx-1 px-3 py-2 bg-blue-700 text-white rounded hover:shadow-md"}
                            onClick={() => {
                                this.setState({status: 'PENDING', page:1}, () => {
                                    this.getHours()
                                })
                            }}
                        >View Pending Hours ({this.state.data.pending_hours})
                        </button>
                        <button
                            className={"mx-1 px-3 py-2 bg-green-700 text-white rounded hover:shadow-md"}
                            onClick={() => {
                                this.setState({status: 'APPROVED', page:1}, () => {
                                    this.getHours()
                                })
                            }}
                        >View Aprooved Hours ({this.state.data.approved_hours})
                        </button>
                        <button
                            className={"mx-1 px-3 py-2 bg-red-700 text-white rounded hover:shadow-md"}
                            onClick={() => {
                                this.setState({status: 'DECLINED', page:1}, () => {
                                    this.getHours()
                                })
                            }}
                        >View Declined Hours ({this.state.data.declined_hours})
                        </button>
                    </div>
                </Card.Body>
            </Card>
            <Hours data={this.state.data.results} status={this.state.status} refreshHourData={this.refreshHourData} pagination={this.pagination} count={count} page={page} user_role={user_role}/>

        </div>
    }
}

export default StudentCard;
