import { useState, useReducer } from "react";
// import Text from "./Text";
// import InputFieldsList from "./InputFieldsList";
import infoReducer, { initialState } from "./infoReducer";

const inputFields = [
  { id: 0, name: "General Info" },
  { id: 1, name: "Education" },
  { id: 2, name: "Experience" },
  { id: 3, name: "First Name" },
  { id: 4, name: "Last Name" },
  { id: 5, name: "Email" },
  { id: 6, name: "Phone Number" },
  { id: 7, name: "School Name" },
  { id: 8, name: "Field of Study" },
  { id: 9, name: "Years of Study" },
  { id: 10, name: "Company Name" },
  { id: 11, name: "Position Title" },
  { id: 12, name: "Responsibilities" },
];

export default function Info() {
  const [state, dispatch] = useReducer(infoReducer, initialState);
  const message = state.messages[state.selectedId];
  const inputFieldInfo = inputFields.find((i) => i.id === state.selectedId);
  console.log(inputFieldInfo);
  // const textAreaInput = state.message
  // console.log(textAreaInput);
  const handleTheChange = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  };

  const [editGeneralInfo, setEditGeneralInfo] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editExperience, setEditExperience] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [yearsOfStudy, setYearsOfStudy] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const fullName = firstName + " " + lastName;

  function handleEditGeneralInfoClick() {
    setEditGeneralInfo(!editGeneralInfo);
  }
  function handleEditEducationClick() {
    setEditEducation(!editEducation);
  }
  function handleEditExperienceClick() {
    setEditExperience(!editExperience);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleFieldOfStudyChange(e) {
    setFieldOfStudy(e.target.value);
  }

  function handleYearsOfStudyChange(e) {
    setYearsOfStudy(e.target.value);
  }

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handlePositionTitleChange(e) {
    setPositionTitle(e.target.value);
  }

  function handleResponsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }
  return (
    <>
      <p>hinpm </p>
    </>
  );
}
