window.addEventListener('DOMContentLoaded', function () {
    const div = this.document.getElementById("image-div")
    div.addEventListener('click', function age() {
        console.log("click me");

        const dayInput = document.getElementById("input1").value;
        const monthInput = document.getElementById("input2").value;
        const yearInput = document.getElementById("input3").value;
        console.log(dayInput);
        console.log(monthInput);
        console.log(yearInput);

        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth() + 1;
        const currentDay = date.getDay();
        let dayInt = parseInt(dayInput)
        let monthInt = parseInt(monthInput)
        let yearInt = parseInt(yearInput)

        if (dayInt > 0 && dayInt <= 31 && monthInt > 0 && monthInt <= 12 && yearInt > 0 && yearInt <= currentYear) {

            const inputErrors = document.querySelectorAll(".input-error");

            inputErrors.forEach(inputError => {
                inputError.classList.remove("error");
                const errorSpan = inputError.querySelector(".error-text");
                if (errorSpan) {
                    errorSpan.remove();
                }
            });
            console.log("nice log");
            let month = monthInt - currentMonth;
            let year = currentYear - yearInt;
            let day = dayInt - currentDay;
            let value1 = document.getElementById("span-yr");
            let value2 = document.getElementById("span-mn");
            let value3 = document.getElementById("span-day");
            value1.textContent = year;
            value2.textContent = month;
            value3.textContent = day;
            console.log(year);
            console.log(month);
            console.log(day);

        }
        else if (dayInput === "" || monthInput === "" || yearInput === "") {
            console.log("chal ja be");
            const errorSpan = document.createElement("span");
            errorSpan.textContent = "This field is required";
            errorSpan.classList.add("error-text");
            const inputErrors = document.querySelectorAll(".input-error");

            // Iterate over the selected input fields and add the error class and span to each one
            inputErrors.forEach(inputError => {
                inputError.classList.add("error");
                inputError.appendChild(errorSpan.cloneNode(true));
            });
        }
        else if (dayInput <= 0 || monthInput <= 0 || yearInput <= 0 || yearInput >= currentYear) {
            const errorSpan = document.createElement("span");
            errorSpan.textContent = "GIve the valid value";
            errorSpan.classList.add("error-text");
            const inputErrors = document.querySelectorAll(".input-error");

            // Iterate over the selected input fields and add the error class and span to each one
            inputErrors.forEach(inputError => {
                inputError.classList.add("error");
                inputError.appendChild(errorSpan.cloneNode(true));
            });
        }
    })
})

