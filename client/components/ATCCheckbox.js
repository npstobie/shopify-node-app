import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Checkbox  } from '@shopify/polaris';
import { updateVerb } from '../actions';


class ATCCheckbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  toggleCheck(checked) {
    this.setState({ checked: checked })
  }

  render() {
    const {checked} = this.state;

    return (
      <Checkbox
        checked={checked}
        label='Show "Add to Cart" buttons on product page'
        onChange={() => this.toggleCheck(!this.state.checked)}
      />
    )
  }

}

export default connect()(ATCCheckbox);
