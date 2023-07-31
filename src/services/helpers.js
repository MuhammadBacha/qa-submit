import supabase from "../supabase";
import { STUDENTS_PER_PAGE } from "./constants";

export async function getStudents({ page, filters, sort }) {
  // filters = {stream: "fsc", test: "engineering",  }
  let query = supabase.from("students").select("*", { count: "exact" });

  // FILTER
  query = Object.entries(filters).reduce((acc, elm) => {
    const filter = elm[0];
    const filterValue = elm[1];
    if (!filterValue) return acc;
    return acc.eq(filter, filterValue);
  }, query);

  // SORT
  // console.log(sort.split("_"));
  const [sortingField, sortingType] = sort.split("_");

  query = query
    .order(sortingField, { ascending: sortingType === "asc" })
    .order("name", { ascending: true }); // no descending property

  // PAGINATION
  const lowerLimit = page * STUDENTS_PER_PAGE; // eg. 0,5,10
  const upperLimit = lowerLimit + 4; // eg. 4,9,14
  query = query.range(lowerLimit, upperLimit);

  const { data: students, count, error } = await query;

  if (error) throw new Error(error.message);

  return { students, totalStudents: count };
}

export async function addStudent(student) {
  const { error } = await supabase.from("students").insert(student);

  if (error) throw new Error(error.message);

  return null;
}

export async function deleteStudent(id) {
  const { error } = await supabase.from("students").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return null;
}

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}
