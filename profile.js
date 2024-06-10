import react from "react"
import App from "./App"
class profile extends react.Component {
    render() {
return(
    <div>

<h1>fullName:{this.state.props.fullName}</h1>
<h1>bio:{this.props.bio}</h1>
<img src={this.props.imgSrc} alt="https://images.app.goo.gl/QXT28kH76UQH7tfY6" />       
<h1>profession:{this.props.profession}</h1>
    </div>
)
  }
}

export default profile