import Cookies from 'js-cookie';
import React from "react";
import {Redirect} from "react-router-dom";

export const postBugReport = (obj) => {
    const csrftoken = Cookies.get('csrftoken');
    fetch("../api/bug_report/post/", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        credentials: 'include',
        body: JSON.stringify({
            can_contact: obj.state.can_contact,
            message: obj.state.message
        })
    }).then(r => {return <Redirect to="/app/"/>})
}