/**
 * Created by Lena on 18.08.2017.
 */
import React, {Component} from 'react';
import {Container, ContainerSection, Input, Button} from '../common'

class CandidatesForm extends Component {
  render() {
    return (
      <Container>
        <ContainerSection>
          <Input label="Name"
                 placeholder="Jan"
                 value={this.props.name}
                 />
        </ContainerSection>
      </Container>
    )
  }
}

export default CandidatesForm