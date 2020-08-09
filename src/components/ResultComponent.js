import React,{Component} from 'react';
import '../App.css';
class ResultComponent extends Component{
    render(){
        let {result} = this.props;
        return (
            <div className="result">
            <p>{result}</p>
            </div>
        );
    }
}
export default ResultComponent;