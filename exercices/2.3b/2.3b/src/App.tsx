import PageTitle from "./Header/index";
import User from "./Main/index";
import Footer from "./Footer/index"

const App = () => {
  const title = "Welcome to My App";
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />

      <User name={name1} age={age1}/>
      <User name={name2} age={age2}/>
      <User name={name3} age={age3}/>
      <Footer footerText={footerText}/>
    </div>
  );
};

export default App;
