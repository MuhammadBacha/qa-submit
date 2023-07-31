export const inputsArray = [
  { label: "Name", fieldName: "name" },
  {
    label: "Stream",
    fieldName: "stream",
    type: "select",
    options: ["FSc", "A Levels"],
  },
  {
    label: "Test",
    fieldName: "test",
    type: "select",
    options: ["Engineering", "ICS", "Business"],
  },
  { label: "Roll Number", fieldName: "rollNumber" },
  {
    label: "NET Marks",
    fieldName: "netMarks",
    type: "number",
    extraValidation: {
      validate: (val) => val <= 200 || "NET Marks must be less than 200.",
    },
  },
  {
    label: "Aggregate",
    fieldName: "aggregate",
    extraValidation: {
      validate: (val) => +val <= 100 || "Aggregate must be less than 100.",
    },
  },
  {
    label: "Desired Field",
    fieldName: "desiredField",
    type: "select",
    options: ["CS", "SE", "DS", "EE", "ME", "Chemical", "BBA", "Mass Comm"],
  },
];

export const widthsArray = [0.5, 13, 5, 5, 1, 5, 0, 1];

export const headers = [
  "#",
  "Name",
  "Stream",
  "Test",
  "Marks",
  "Aggregate",
  "Field",
  "",
];

export const STUDENTS_PER_PAGE = 5;
