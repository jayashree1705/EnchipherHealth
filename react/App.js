import Hello from "./components/Hello.js"
import Welcome from "./components/Welcome.js"
import Header from "./components/Header.js"
import Twoelements from "./components/Twoelements.js"
import Text from "./components/Text.js"
import HelloUser from "./components/HelloUser.js"
import Sum from "./components/Sum.js"
import Admin from "./components/Admin.js"
import Propname from "./components/Propname.js"
import Details from "./components/Details.js"
import Title from "./components/Title.js"
import Button from "./components/Button.js"
import Login from "./components/Login.js"
import Userinfo from "./components/Userinfo.js"
import Skills from "./components/Skills.js"
function App(){
  return(
    <div>
    <Hello />
    <Welcome/>
    <Header msg="i am shri"/>
    <Twoelements/>
    <Text/>
    <HelloUser/>
    <Sum/>
    <Admin/>
    <Propname name="shree"/>
    <Details name="shri" age="21"/>
    <Title title="Title on prop accept and display"/>
    <Button label="Submit"/>
    <Button label="Click"/>
    <Login isLoggedIn={true} />
    <Login isLoggedIn={false} />
    <Userinfo user={{name:"jayashree",email:"jaya@gmail.com"}}/>
    <Skills skills={["html","css","js","react"]}/>
    </div>
  );
}
 export default App;

