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
    options: [
      "Engineering",
      "ICS",
      "Business",
      "Biotechnology",
      "Data Science",
    ],
  },
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
      validate: (val) => {
        if (+val > 100) return "Aggregate must be less than 100.";
        if (!Number(val)) return "Aggregate must be a number";
        return true;
      },
    },
  },
  { label: "Merit Number", type: "number", fieldName: "meritNumber" },
  {
    label: "Desired Field",
    fieldName: "desiredField",
    type: "select",
    options: ["CS", "SE", "DS", "EE", "ME", "Chemical", "BBA", "Mass Comm"],
  },
];

export const widthsArray = [0.5, 13, 5, 5, 1, 5, 1, 1, 1];

export const headers = [
  "#",
  "Name",
  "Stream",
  "Test",
  "Marks",
  "Aggregate",
  "Merit Number",
  "Field",
  "",
];

export const STUDENTS_PER_PAGE = 5;
