
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsuis (farenaheit) {
    return (farenaheit - 32)* 5/9
}

function toFahraneiht(celsius){
     return (celsius*9/5)+32
}


function BoilingVerdict({celsius}){
    if(celsius>100){
        return <div className="alert alert-success"> L'eau bout </div>
    }
    return <div className="alert alert-info">L'eau ne bout pas</div>
}

class  TemperatureInput extends React.Component{

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event){
        this.props.onTemperatureChange(event.target.value)
    }

    render() {
        const name = 'Scale' + this.props.scale
        const scaleName = scaleNames[this.props.scale]
        const {temperature} = this.props
        return (
            <div className="form-group">
                <label htmlFor={name}> Température (en {scaleName}) </label>
                <input  type="text" id={name} 
                        value={temperature} 
                        className="form-control"
                        onChange={this.handleChange}        
                />
            </div>
        )
    }
}


class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            temperature: 20,
            scale: 'c',
        }
        this.handleFahranetChange = this.handleFahranetChange.bind(this)
        this.handleCelsusChange = this.handleCelsusChange.bind(this)


    }

    handleTemperatureChange(temperature){
        this.setState({
            temperature
        })
    }

    handleCelsusChange(temperature){
        this.setState({
            scale : 'c',
            temperature
        })
    }

    handleFahranetChange(temperature){
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render () {
        const {temperature,scale} =this.state
        const celsius = scale === 'c'? temperature: toCelsuis(temperature)
        const fahrenhait = scale === 'f'? temperature : toFahraneiht(celsius)

        return <div>
                    <TemperatureInput scale='c' temperature={celsius} 
                        onTemperatureChange={this.handleCelsusChange}

                    />
                    <TemperatureInput scale='f'temperature={fahrenhait}
                        onTemperatureChange = {this.handleFahranetChange}
                    />
                    <BoilingVerdict  celsius={celsius} />
                </div>
    }
}




ReactDOM.render(<Calculator/>, document.getElementById('app'))