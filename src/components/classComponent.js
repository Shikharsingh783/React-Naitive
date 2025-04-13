import React, { Component } from 'react';
import { View , Text, Button } from 'react-native';

class LifecycleComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        console.log("constructor component Intialized");
    }

    static getDerivedStateFromProps(props, state){
        console.log("Get Derived Props", props)
    }

    componentDidMount(){
        console.log("component Did Mount");
    }

    shouldComponentUpdate( nextProps, nextState){
        console.log("should Component Update" , nextState.count !== this.state.count, nextProps);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("get Snapshot Before Update", prevProps.prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("component Did Update", prevProps, prevState, snapshot);
    }

    componentWillUnmount(){
        console.log("component Will Unmount");
    }

    incrementCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrementCount = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    render(){
        return (
            <View>
                <Text style={{marginTop : 100, marginLeft : 100}}>Hello World {this.state.count}</Text>
                <Button title="Increment" onPress={this.incrementCount}/>
                
                <Button title="Decrement" onPress={this.decrementCount}/>
            </View>
        )
    }
}

export default LifecycleComponent;