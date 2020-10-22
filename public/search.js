class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                movieData: []
            }
            //this is NOT automatically lexically bound, so we gotta do it manually here
        this.queryBackend = this.queryBackend.bind(this);
    }

    queryBackend() {
        //doSomethingToGetApiData.then(data=>blah blah)
        //for now, I'm simulating this with a setInterval
        const request = new XMLHttpRequest()
        request.open('GET', 'http://127.0.0.1:9003/newton', false)
        request.send();
        //Converts the returned list to a json and iterates through the entries
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

    render() {
        if(this.state.movieData.length == 0){
            return ( <div>
                <button onClick = {this.queryBackend } > <img src="ask_isaac.png" height="100" /> </button> 
                </div>
            )
        }
        else {
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