class IndecisionApp extends React.Component{
    render() {
        const title="Indecision";
        const subtitle="Put your life in the hands of a computer"
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action/>
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends  React.Component {
    render(){
        return (
            <div>
                <button>What Should I do</button>
            </div>
        );
    }
}


class Options extends  React.Component {
    render(){
        return (
            <div>
               Action component here
               <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option Component Here
            </div>
        );
    }
}

class AddOption extends  React.Component {
    render(){
        return (
            <div>
               Add Option here component here
            </div>
        );
    }
}   




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));