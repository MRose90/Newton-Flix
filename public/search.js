class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                movieData: []
            }
            //this is not automatically lexically bound, so we gotta do it manually here
        this.queryBackend = this.queryBackend.bind(this);
    }

    queryBackend() {
        //Request the newton data from the backend
        const request = new XMLHttpRequest()
        request.open('GET', 'http://127.0.0.1:9003/newton', false)
        request.send();
        //Checks to see if newton got valid data before trying to parse it
        if (request.status == 500){
            const movieData = [500];
            setTimeout(() => {
                console.log(this.setState)
                this.setState({ movieData })
            }, 100)
        }
        //Converts the returned raw data to a json and iterates through the entries
        //As it iterates through, it creates an array of entries to be used in the table
        else{
        const json = JSON.parse(request.responseText);
        let movieData = []
        for (let i = 0; i < json.length; i++) {
            const innerJson = json[i];
            const entry = [innerJson["Title"], innerJson["Year"], "http://www.imdb.com/title/"+innerJson["imdbID"]]
            console.log(entry);
            movieData.push(entry)
        }
        setTimeout(() => {
            console.log(this.setState)
            this.setState({ movieData })
        }, 100)
        }

    }
    //Renders any required data into HTML format
    render() {
        //Used of no data has been recieved from the backend
        if(this.state.movieData.length == 0){
            return ( <div>
                <button onClick = {this.queryBackend } > <img src="ask_isaac.png" height="100" /> </button> 
                </div>
            )
        }
        //Used of a 500 was returned from the backend. Backend did not know how to handle the data.
        else if (this.state.movieData[0] == 500){
            console.log(this.state.movieData)
            return ( <div>
                <button onClick = {this.queryBackend } > <img src="ask_isaac.png" height="100" /> </button> 
                <p>There was an error parsing the data from the OMDb server.</p>
                </div>
            )
        //Used if data was successfully recieved from the backend.
        //Parses the movieData into entries for the table
        } else {
            console.log(this.state.movieData)
            return ( <div>
                <button onClick = { this.queryBackend } > <img src="ask_isaac.png" height="100" /> </button> 
                <table className = "table" >
                <thead>
                <tr>
                <th> Title </th>  
                <th> Year </th>  
                <th> IMDb URL </th> 
                </tr> 
                </thead> 
                <tbody> {
                    this.state.movieData.map(data => {
                        return ( <tr> <td> {data[0]} </td><td>{data[1]}</td> <td> <a href ={data[2]}>{ data[2] } </a> </td></tr> );
                }
            )
            } 
            </tbody> 
            </table> 
            </div>
        )
        }
    }
}

ReactDOM.render( < MyComponent / > , document.getElementById('root'))