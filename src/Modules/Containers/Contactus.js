import React, { Component} from 'react'
import './Contact.css'

class Contact extends Component {

    constructor (){
        super()

        // this.state = { fullname: "cam calin" }
        this.state = { fullname: "",
                        email: "",
                        phone: "",
                        message: ""
                        }
    }

    handlechangeall = (event) => {
        this.setState = ({ [event.target.name]: event.target.value })
    }

    handlesubmit = (event) => {
        alert( JSON.stringify(this.state)) 
        // this method in js which converts the js objects to strings

        event.preventDefault();
    }
}

export default Contact;