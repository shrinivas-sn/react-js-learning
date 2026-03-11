import { useState } from "react";
function App2() {
  return (
    <div className="main-div">
      <Student />
    </div>
  );
}

const studentDetails = [
  {
    id: "KLE-001",
    name: "Aditya Rao",
    branch: "Electronics & Communication Engineering",
    campus: "Hubballi",
    status: "Enrolled",
  },
  {
    id: "KLE-002",
    name: "Priya Desai",
    branch: "Computer Science",
    campus: "Hubballi",
    status: "Enrolled",
  },
  {
    id: "KLE-003",
    name: "Rahul Patil",
    branch: "Electronics & Communication Engineering",
    campus: "Hubballi",
    status: "Graduated",
  },
  {
    id: "KLE-004",
    name: "Sneha Kulkarni",
    branch: "Mechanical Engineering",
    campus: "Hubballi",
    status: "Enrolled",
  },
  {
    id: "KLE-005",
    name: "Vikram Singh",
    branch: "Information Science",
    campus: "Hubballi",
    status: "Suspended",
  },
  {
    id: "KLE-006",
    name: "Ananya Joshi",
    branch: "Electronics & Communication Engineering",
    campus: "Hubballi",
    status: "Enrolled",
  },
  {
    id: "KLE-007",
    name: "Rohan Bhat",
    branch: "Civil Engineering",
    campus: "Hubballi",
    status: "Enrolled",
  },
  {
    id: "KLE-008",
    name: "Meera Reddy",
    branch: "Artificial Intelligence",
    campus: "Hubballi",
    status: "Enrolled",
  },
  {
    id: "KLE-009",
    name: "Karan Mehta",
    branch: "Electronics & Communication Engineering",
    campus: "Hubballi",
    status: "Graduated",
  },
  {
    id: "KLE-010",
    name: "Nisha Naik",
    branch: "Computer Science",
    campus: "Hubballi",
    status: "Enrolled",
  },
];

function Student(details) {
  return (
    <div className="main-div">
      {studentDetails.map(function (details) {
        return (
          <StudentCard
            name={details.name}
            id={details.id}
            branch={details.branch}
            campus={details.campus}
            status={details.status}
          />
        );
      })}
    </div>
  );
}

function StudentCard(props) {
  const [isPresent, setIsPresent] = useState(false);
  return (
    <div className="container2">
      <p className="details">Name: {props.name}</p>
      <p className="details">Id: {props.id}</p>
      <p className="details">Branch: {props.branch}</p>
      <p className="details">Campus: {props.campus}</p>
      <p className="details">Status: {props.status}</p>
      <Button isPresent={isPresent} setIsPresent={setIsPresent} />
      <br />
    </div>
  );
}

function Button(button) {
  return (
    <button
      className="button"
      onClick={function () {
        button.setIsPresent(!button.isPresent);
      }}
      style={{ backgroundColor: button.isPresent ? "green" : "yellow" }}
    >
      {button.isPresent ? "Present" : "Mark Attendence"}
    </button>
  );
}

export default App2;
