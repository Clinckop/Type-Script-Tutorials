import React, {Component} from 'react';

type CounterState = {
    count: number
}
type CounterProps = {
    message: string
}
export class CounterClass extends Component<CounterProps, CounterState>{
    constructor(props: CounterProps){
        super(props);
        this.state = {
            count: 0
        }
    }
    
    incrementCount = () => {
           this.setState((prevState) => ({count: prevState.count + 1}))
    }

    render(){
        
        return(
            <div>
                <button onClick={this.incrementCount}>Increment</button>
                <p>{this.props.message}{this.state.count} times.</p>
            </div>
        )
    }
}