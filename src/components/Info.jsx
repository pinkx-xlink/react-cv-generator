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

  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("jane.doe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("+1234567890");
  const [summary, setSummary] = useState(
    "Software Engineer with 5 years of experience in developing scalable applications.",
  );
  const [schoolName, setSchoolName] = useState("University of Example");
  const [fieldOfStudy, setFieldOfStudy] = useState("Computer Science");
  const [yearsOfStudy, setYearsOfStudy] = useState("2020 - 2024");
  const [companyName, setCompanyName] = useState("NASA");
  const [positionTitle, setPositionTitle] = useState("Professional Cool Guy");
  const [responsibilities, setResponsibilities] = useState([
    "Manage projects",
    "Collaborate with team members",
    "Present findings to stakeholders",
  ]);

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

  function handleSummaryChange(e) {
    setSummary(e.target.value);
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
    setResponsibilities(e.target.value.split(","));
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

      <div className="user-input flex flex-col">
        <div className="info-dropdown general-info">
          {/* expand or collapse the "General Info" section on button click using a useState */}
          <button className="expand-btn" onClick={handleEditGeneralInfoClick}>
            {" "}
            {editGeneralInfo ? "Submit ✓" : "Edit General Info ↓"}{" "}
          </button>
          {editGeneralInfo && (
            <ul className="info-dropdown-content">
              <li className="input__container">
                <label>
                  First name:{" "}
                  <input value={firstName} onChange={handleFirstNameChange} />
                </label>
              </li>
              <li className="input__container">
                <label>
                  Last name:{" "}
                  <input value={lastName} onChange={handleLastNameChange} />
                </label>
              </li>
              <li className="input__container">
                <label>
                  Email: <input value={email} onChange={handleEmailChange} />
                </label>
              </li>
              <li className="input__container">
                <label>
                  Phone number:{" "}
                  <input
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </label>
              </li>

              <div className="input__container">
                <label>
                  Summary:{" "}
                  <textarea
                    value={summary}
                    onChange={handleSummaryChange}
                  ></textarea>
                </label>
              </div>
            </ul>
          )}
        </div>

        <div className="info-dropdown education-exp">
          <button className="expand-btn" onClick={handleEditEducationClick}>
            {" "}
            {editEducation ? "Submit ✓" : "Edit Education ↓"}{" "}
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

        <div className="info-dropdown practical-exp">
          <button className="expand-btn" onClick={handleEditExperienceClick}>
            {" "}
            {editExperience ? "Submit ✓" : "Edit Work Experience ↓"}{" "}
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

              <div className="input__container">
                <label>
                  Responsibilities:{" "}
                  <div className="input__container">
                    <textarea
                      className="w-full"
                      value={responsibilities}
                      onChange={handleResponsibilitiesChange}
                    />
                  </div>
                </label>
              </div>
            </>
          )}
        </div>
      </div>

      {/* THE CV RETURNED USING THE FORM DATA */}
      <div className="cv-form">
        <div className="cv-header">
          <h2 className="cv-header__title">{fullName}</h2>
          <span className="cv-header__contact w-full">
            <p>📞{phoneNumber}</p> <p>📧 {email}</p>
          </span>
        </div>

        <div className="cv-form-body">
          <h3>Summary</h3>
          <p>{summary}</p>

          <h3>Education</h3>
          <p>
            <b>{schoolName}</b>
          </p>
          <p>{fieldOfStudy}</p>
          <p>{yearsOfStudy}</p>
          <h3>Practical Experience</h3>

          <div className="cv-form__experience1">
            <span className="flex gap-2">
              <h2>{positionTitle} </h2> <p>@</p> <h2>{companyName}</h2>
            </span>
            <ul>
              {responsibilities.map((responsibility, index) => (
                <li className="list-item list-disc" key={index}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
