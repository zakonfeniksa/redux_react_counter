import { connect } from 'react-redux';
import Counter from './Counter';

//Powiązywanie stanu z właściwością komponentu
function mapStateToProps(state){
  return {
    countValue: state.count
  };
}

//Akcje
let increaseAction = { type: "increase" };
let decreaseAction = { type: "decrease" };

//Powiązywanie akcji z właściwościami komponentu
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function(){
      return dispatch(decreaseAction);
    }
  };
}

//Komponent wyższego rzędu
let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default connectedComponent;
