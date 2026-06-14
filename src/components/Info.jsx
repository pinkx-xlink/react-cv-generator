import { useState, useReducer } from "react";
// import Text from "./Text";
// import InputFieldsList from "./InputFieldsList";
import infoReducer, { initialState } from "./infoReducer";
import "./styles/Info.css";

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
    <div className="info">
      {/* THIS IS THE OLD INPUT FIELDS LIST */}
      {/*
      <div className="buttons-and-input-container">
        <InputFieldsList
          inputFields={inputFields}
          selectedId={state.selectedId}
          dispatch={dispatch}
          className="input-fields-list"
        /> 

        <Text
          key={inputFields.id}
          message={message}
          inputField={inputFields}
          dispatch={dispatch}
          onChange={handleTheChange}
          value={state.userInput}
          type="text"
        />
        <p>{state.value}</p>
      </div>
      */}

      <div className="user-input">
        <div className="general-info">
          <h3 className="text-lg font-semibold">General Info</h3>
          {/* expand or collapse the "General Info" section on button click using a useState */}
          <button className="expand-btn" onClick={handleEditGeneralInfoClick}>
            {" "}
            {editGeneralInfo ? "Submit" : "Edit"}{" "}
          </button>
          {editGeneralInfo && (
            <>
              <div className="input__container">
                <label>
                  First name:{" "}
                  <input value={firstName} onChange={handleFirstNameChange} />
                </label>
              </div>
              <div className="input__container">
                <label>
                  Last name:{" "}
                  <input value={lastName} onChange={handleLastNameChange} />
                </label>
              </div>
              <div className="input__container">
                <label>
                  Email: <input value={email} onChange={handleEmailChange} />
                </label>
              </div>
              <div className="input__container">
                <label>
                  Phone number:{" "}
                  <input
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </label>
              </div>
            </>
          )}
        </div>

        <div className="education-exp">
          <h3>Educational Experience</h3>
          <button className="expand-btn" onClick={handleEditEducationClick}>
            {" "}
            {editEducation ? "Submit" : "Edit"}{" "}
          </button>
          {editEducation && (
            <>
              <div className="input__container">
                <label>
                  School name:{" "}
                  <input value={schoolName} onChange={handleSchoolNameChange} />
                </label>
              </div>
              <div className="input__container">
                <label>
                  Field of study:{" "}
                  <input
                    value={fieldOfStudy}
                    onChange={handleFieldOfStudyChange}
                  />
                </label>
              </div>
              <div className="input__container">
                <label>
                  Years of study:{" "}
                  <input
                    value={yearsOfStudy}
                    onChange={handleYearsOfStudyChange}
                  />
                </label>
              </div>
            </>
          )}
        </div>

        <div className="practical-exp">
          <h3>Practical Experience</h3>
          <button className="expand-btn" onClick={handleEditExperienceClick}>
            {" "}
            {editExperience ? "Submit" : "Edit"}{" "}
          </button>
          {editExperience && (
            <>
              <div className="input__container">
                <label>
                  Company name:{" "}
                  <input
                    value={companyName}
                    onChange={handleCompanyNameChange}
                  />
                </label>
              </div>

              <div className="input__container">
                <label>
                  Position title:{" "}
                  <input
                    value={positionTitle}
                    onChange={handlePositionTitleChange}
                  />
                </label>
              </div>
              <label>
                Responsibilities:{" "}
                <div className="input__container">
                  <textarea
                    className="textarea"
                    value={responsibilities}
                    onChange={handleResponsibilitiesChange}
                  />
                </div>
              </label>
            </>
          )}
        </div>
      </div>

      {/* THE CV RETURNED USING THE FORM DATA */}
      <div id="cv-form">
        <h2>{fullName}</h2>
        <span>
          {phoneNumber} {email}{" "}
        </span>

        <h3>Educational Experience</h3>
        <p>
          <b>{schoolName}</b>
        </p>
        <p>{fieldOfStudy}</p>
        <p>{yearsOfStudy}</p>
        <h3>Practical Experience</h3>
        <p>{companyName}</p>
        <p>{positionTitle}</p>
        <p>Responsibilities:</p>
        <li>{responsibilities}</li>
      </div>
    </div>
  );
}
