import React from 'react';
import News from './News';


class NewsContainer extends React.Component{


  render() {
    return <>
          { this.props.isFetching ? 
            <News /> : null }
          <News /> 
    </>
  }
  
}

export default NewsContainer
