import React, { Fragment, PureComponent } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import '../assets/Sass/globalstyle.scss'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Electron header title',
      spiel: 'Welcome to the electron react app',
      info: 'This text is coming from a constructor/ super prop inside a class component'
    }
  }
  render() {
    return (
      <Fragment>
        <Col>
          <Row>
            <Card>
              <h1>{this.state.title}</h1>
              <p>{this.state.spiel}</p>
            </Card>
            <Card>
              <p className="h1">{this.state.info}</p>
            </Card>
          </Row>
        </Col>
      </Fragment>
    )
  }
}

export default App
