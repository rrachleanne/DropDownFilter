import * as React from "react";

export default class ApiList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div> Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map((item: { id: React.Key; name: React.ReactNode }) => (
              <li key={item.id}>{item.name}</li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}
