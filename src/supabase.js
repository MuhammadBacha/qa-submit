import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nnjwrgbpiytdeqrhmmna.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uandyZ2JwaXl0ZGVxcmhtbW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNzk1MTIsImV4cCI6MjAwNTk1NTUxMn0.2ZrGdzNDXnk7nU0cqp8Rfi_-AGnk1z7UvJ1b_l9Ca5o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
