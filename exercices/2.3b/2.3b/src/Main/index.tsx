interface UserCard {
  name: string;
  age: number;
}

const User = (props: UserCard) => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <strong>
            <h2>{props.name}</h2>
          </strong>{" "}
          <strong>Age: {props.age}</strong>
        </li>
      </ul>
    </div>
  );
};

export default User;
