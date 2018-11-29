import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class AnimalsInZoo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { animals: [], name: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
        return (
            <div>
                <h3>ZOO</h3>
                <AnimalsList animals={this.state.animals} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-animals">
                        What animals do you have in the zoo?
                    </label><br/>
                    <input
                        id="new-animals"
                        onChange={this.handleChange}
                        value={this.state.name}
                    /><br/>
                    <button>
                        Animal #{this.state.animals.length + 1}
                    </button>
                </form>
            </div>
        );
    }
  
    handleChange(e) {
        this.setState({ name: e.target.value });
    }
  
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.name.length) {
            return;
        }
        const newAnimal = {
            name: this.state.name,
            id: Date.now()
        };
        this.setState(state => ({
            animals: state.animals.concat(newAnimal),
            name: ''
        }));
    }
}
  
class AnimalsList extends React.Component {
    render() {
        return (
            <ol>
                {this.props.animals.map(animal => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ol>
        );
    }
}
  
ReactDOM.render(<AnimalsInZoo />, document.getElementById('root'));