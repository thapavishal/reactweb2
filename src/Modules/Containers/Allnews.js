import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col } from 'reactstrap';
import NewsCard from '../Components/NewsCard';

class Allnews extends Component {
    constructor() {
        super();
        this.state = {
            allNewsData : [
                {
                    title:"Australia on Fire",
                    img:"./images/leaf.jpg",
                    text:"This is the end of the world and leaf",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"./images/sunset.jpg",
                    text:"This is the end of the world and sunset",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"./images/sky.jpg",
                    text:"This is the end of the world and sky",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"images/leaf.jpg",
                    text:"This is the end of the world and sky",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"./images/sunset.jpg",
                    text:"This is the end of the world and leaf",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"./images/sky.jpg",
                    text:"This is the end of the world and sunset",
                    author: "John"
                           
                }
            ]
        }
    }

render (){
    const NewsCards = this.state.allNewsData.map(news =>{
        return (
            <Col sm="4">
                <NewsCard news = {news} />
            </Col>
        )
    })
    return(
        <Container fluid>
         <Navbar/>
            <Row>
            { NewsCards}
            </Row>
        </Container>
    )
}
}


export default Allnews;