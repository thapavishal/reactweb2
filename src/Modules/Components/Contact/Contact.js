import React, { Component} from 'react'
import './Contact.css'
import Navbar from './Modules/components/Navbar'

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

    render(){
        return (
        <div>
            <Navbar/>
            <div className = "container">
                <h2>Please fill up the form to contact</h2>
                <form onSubmit = {this.handlesubmit }>
                    <label> Full Name </label><br/>
                    {/* <input type="text"/> <br/> */}
                    <input type="text" name = "fullname" value={this.state.fullname} 
                            onChange = { this.handlechangeall}/> <br/>

                    <label> Email </label><br/>
                    {/* <input type="email" value={this.state.email}
                            onChange = { this.handleemail} /> <br/> */}
                    <input type="email" name = "email" value={this.state.email}
                            onChange = { this.handlechangeall} /> <br/>

                    <label> Mobile </label><br/>
                    <input type="number" name = "phone" value={this.state.phone}
                            onChange = { this.handlechangeall} /><br/>

                    <label> Message </label><br/>
                    <textarea value={this.state.message} name = "message"
                            onChange = { this.handlechangeall} /> <br/><br/>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <Footer/>
        </div>    
        )
    }
}

export default Contact;