import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tztqyhkuhnmrmbmoxcfc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6dHF5aGt1aG5tcm1ibW94Y2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDU4NzIsImV4cCI6MjA3OTEyMTg3Mn0.kSejmFZs3O6AAVRnRYRw7pyDUxA_sdt-cWmd-vEgJvU";

export const supabase = createClient(supabaseUrl, supabaseKey);



