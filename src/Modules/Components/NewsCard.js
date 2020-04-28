import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
class NewsCard extends Component {
  constructor(props){
    super(props);
  }
    render() {
        return(
            <div>
                <Card>
                  <CardImg top width="100%" src={this.props.news.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.news.title}</CardTitle>
                        <CardSubtitle>{ this.props.news.author}</CardSubtitle>
                    <CardText>{ this.props.news.text}.</CardText>
                      <Button>Button</Button>
                  </CardBody>
                </Card>
          </div>

        )
    }
}

export default NewsCard;