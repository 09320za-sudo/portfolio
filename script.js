function calculateGPA() {
  const m1 = parseFloat(document.getElementById("mark1").value);
  const m2 = parseFloat(document.getElementById("mark2").value);
  const m3 = parseFloat(document.getElementById("mark3").value);

  if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
    document.getElementById("gpa-result").textContent = "Please enter all marks.";
    return;
  }

  const avg = (m1 + m2 + m3) / 3;
  const gpa = (avg / 20).toFixed(2);

  let classification = "";

  if (gpa >= 4) classification = "Excellent";
  else if (gpa >= 3) classification = "Very Good";
  else if (gpa >= 2) classification = "Good";
  else classification = "Fail";

  document.getElementById("gpa-result").textContent = `GPA: ${gpa} — ${classification}`;
}

document.getElementById("year").textContent = new Date().getFullYear();
