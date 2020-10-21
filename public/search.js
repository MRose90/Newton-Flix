/*NOTE!:
You will need to include (i.e., script tag)
https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js
AND
https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                newtonData: []
            }
            //this is NOT automatically lexically bound, so we gotta do it manually here
        this.methodOne = this.methodOne.bind(this);
    }

    methodOne() {
        //doSomethingToGetApiData.then(data=>blah blah)
        //for now, I'm simulating this with a setInterval
        const request = new XMLHttpRequest()
        request.open('GET', 'http://127.0.0.1:9003/newton', false)
        request.send();
        //Converts the returned list to a json and iterates through the entries
        const json = JSON.parse(request.responseText);
        let newtonData = []
        for (let i = 0; i < json.length; i++) {
            const innerJson = json[i];
            const entry = [innerJson["Title"], innerJson["Year"], "http://www.imdb.com/title/"+innerJson["imdbID"]]
            console.log(entry);
            newtonData.push(entry)
        }
        setTimeout(() => {
            console.log(this.setState)
            this.setState({ newtonData })
        }, 1000)

    }

    render() {
        if(this.state.newtonData.length == 0){
            return ( <div>
                <button onClick = {this.methodOne } > <img src="nf_search.png" height="30" /> </button> 
                </div>
            )
        }
        else {
            return ( <div>
                <button onClick = { this.methodOne } > <img src="nf_search.png" height="30" /> </button> 
                <table className = "table" >
                <thead>
                <tr>
                <th> Title </th>  
                <th> Year </th>  
                <th> IMDb URL </th> 
                </tr> 
                </thead> 
                <tbody> {
                    this.state.newtonData.map(data => {
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