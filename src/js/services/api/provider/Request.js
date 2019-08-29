import * as React from 'react'
import axios from 'axios'
import isEqual from 'lodash.isequal'

class Axios extends React.Component {
  constructor(props) {
    super(props)

    // NOTE: Do not use this.context as React uses it internally
    // TODO: make sure node_env is used
    this.baseURI = 'http://localhost:4000'
    this.axiosContext = React.createContext(this.value)
  }

  axiosRequest() {
    const {
      call: { pathname, method }
    } = this.props

    const resource = {
      url: `${this.baseURI}${pathname}`,
      method
    }
    // Reset the request
    this.value = null
    this.forceUpdate()

    axios
      .request(resource)
      .then(response => {
        this.value = response
        this.forceUpdate()
      })
      .catch(error => {
        this.value = error
        this.forceUpdate()
      })
  }

  componentDidMount() {
    this.axiosRequest()
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.call, prevProps.call)) {
      this.axiosRequest()
    }
  }

  render() {
    const { children } = this.props

    const { Provider, Consumer } = this.axiosContext

    return (
      <Provider value={this.value}>
        <Consumer>{children}</Consumer>
      </Provider>
    )
  }
}

export default Axios
