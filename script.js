document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("entryDate").value = new Date().toISOString().split("T")[0];

    document.getElementById("dob").addEventListener("change", function () {
        const dob = new Date(this.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        document.getElementById("age").value = age;
        document.getElementById("eyeTestSection").classList.toggle("hidden", age >= 10);
    });

    document.getElementById("leaveReason").addEventListener("change", function () {
        document.getElementById("doctorVisitSection").classList.toggle("hidden", this.value !== "Health");
    });

    document.getElementById("studentForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
    });
});
