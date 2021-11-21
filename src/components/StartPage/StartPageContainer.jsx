import React from 'react';
import { connect } from 'react-redux';
import StartPage from './StartPage';





const mapStateToProps = (state) => {//во время конектинга функция connect передаст в функцию mapStateToProps state
    return {//возврощает обьект, настраивает свойства з state
        //sidebarPage: state.sidebarPage
        
    }
  }

let mapDispatchToProps = (dispatch) => {//во время конектинга функция connect передаст в функцию mapDispatchToProps dispatch
    return {//возвращает callbacks functions которие мы будем отправлять в призентационую компоненту
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);