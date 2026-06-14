import React, { useState, useReducer } from "react";
import Text from "./Text";
import InputFieldsList from "./InputFieldsList";
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
    <div className="info-container">
      <header className="header">
        <h1>CV Creator Project</h1>
        <p>Enter your info and we'll take care of the rest!</p>
      </header>

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

      <div class="user-input">
        <div class="general-info">
          <h3>General Info</h3>
          {/* expand or collapse the "General Info" section on button click using a useState */}
          <button onClick={handleEditGeneralInfoClick}>
            {" "}
            {editGeneralInfo ? "Submit" : "Edit"}{" "}
          </button>
          {editGeneralInfo && (
            <>
              <label>
                First name:{" "}
                <input value={firstName} onChange={handleFirstNameChange} />
              </label>
              <label>
                Last name:{" "}
                <input value={lastName} onChange={handleLastNameChange} />
              </label>
              <label>
                Email: <input value={email} onChange={handleEmailChange} />
              </label>
              <label>
                Phone number:{" "}
                <input value={phoneNumber} onChange={handlePhoneNumberChange} />
              </label>
            </>
          )}
        </div>

        <div class="education-exp">
          <h3>Educational Experience</h3>
          <button onClick={handleEditEducationClick}>
            {" "}
            {editEducation ? "Submit" : "Edit"}{" "}
          </button>
          {editEducation && (
            <>
              <label>
                School name:{" "}
                <input value={schoolName} onChange={handleSchoolNameChange} />
              </label>
              <label>
                Field of study:{" "}
                <input
                  value={fieldOfStudy}
                  onChange={handleFieldOfStudyChange}
                />
              </label>
              <label>
                Years of study:{" "}
                <input
                  value={yearsOfStudy}
                  onChange={handleYearsOfStudyChange}
                />
              </label>
            </>
          )}
        </div>

        <div class="practical-exp">
          <h3>Practical Experience</h3>
          <button onClick={handleEditExperienceClick}>
            {" "}
            {editExperience ? "Submit" : "Edit"}{" "}
          </button>
          {editExperience && (
            <>
              <label>
                Company name:{" "}
                <input value={companyName} onChange={handleCompanyNameChange} />
              </label>
              <label>
                Position title:{" "}
                <input
                  value={positionTitle}
                  onChange={handlePositionTitleChange}
                />
              </label>
              <label>
                Responsibilities:{" "}
                <textarea
                  value={responsibilities}
                  onChange={handleResponsibilitiesChange}
                />
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
