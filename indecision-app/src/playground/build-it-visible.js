class ToggleApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggleFlag: false,
            text: "Show"
        };
        this.handleToggleText = this.handleToggleText.bind(this);
    }
    handleToggleText(){
        this.setState( (prevState) => {
            this.state.toggleFlag = !prevState.toggleFlag;
            if (prevState.text == 'Show'){
                this.state.text = 'Hide';
            }else{
                this.state.text = 'Show';
            }
            return this.state 
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleText}>{this.state.text} datails</button>
                {this.state.toggleFlag ? <p>This p is visible</p> : undefined}
            </div>
        );
    }
}

ReactDOM.render(<ToggleApp />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let togleObject = {
//     toggleFlag: false,
//     text: 'Show'
// }


// const toggleP = () => {
//     togleObject.toggleFlag = !togleObject.toggleFlag;
//     if (togleObject.text == 'Show'){
//         togleObject.text = 'Hide';
//     }else{
//         togleObject.text = 'Show';
//     }
//     render();
// }


// const render = ()  => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleP}>{togleObject.text} details</button>
//             {togleObject.toggleFlag ? <p>This p is visible</p> : undefined}
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// }

// render();