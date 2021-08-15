import './App.css';
import {Component} from "react";
import { CardList } from "./components/card-list/card-list.component";
import axios from "axios";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    state = {
        users: [],
        searchField: "",
        errors: ""
    }

    componentDidMount() {
       axios.get("https://jsonplaceholder.typicode.com/users")
           .then(response => {
               const users = response.data
               this.setState({users})
           })
           .catch(error => {
               if (error.response.status === 400) {
                   this.setState({errors: error.response.data.error})
               }
           })
    }

    searchHandle(e) {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {users, searchField} = this.state
        const searchFilter = users.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
                <h1>Monster Roledex</h1>
                <SearchBox placeholder="search monster" handleChange={e => this.searchHandle(e)} />
                <CardList users={searchFilter} />
            </div>
        );
    }
}

export default App;
