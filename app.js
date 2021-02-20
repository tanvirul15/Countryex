//UI Variables
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const table = document.querySelector("#detailedTable");
const showcase = document.querySelector("#countryShowcase");
const name = document.querySelector("#name");
const spinner = document.getElementById("spinner");

searchBtn.addEventListener("click", searchCountry);
searchInput.addEventListener("keypress", e => {
    e.keyCode === 13 ? searchCountry() : 0;
})

async function searchCountry(e) {
    toggleSpinner();
    showcase.innerHTML = "";
    const searchKey = searchInput.value;
    if (!searchKey) {
        alert("Country Not Found..!");
        toggleSpinner();
        return;

    }
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${searchKey}`);
    const data = await res.json();

    if (data.status === 404) {
        alert("Country Not Found..!")
        toggleSpinner();
    } else {

        displayCountry(data);
    }

}

function displayCountry(data) {

    let html = ""
    data.forEach(element => {


        html += `<div class="card card-body mb-5 opacity-1">
        <div class="text-center">
            <img id="flag" class="img-fluid w-25" src="${element.flag}">
            <h1 id="name" class="display-6">${element.name}</h1>
            <table id="detailedTable" class="table table-striped w-50 mx-auto text-left">
                <tr><td> <i class="fas fa-blog"></i> Domain</td>
                    <td>${element.topLevelDomain}</td></tr>
                <tr><td> <i class="fas fa-phone-volume"></i> Calling Code</td>
                    <td>${element.callingCodes[0]}</td></tr>
                <tr><td> <i class="fas fa-city"></i>Capital</td>
                    <td>${element.capital}</td></tr>
                <tr><td> <i class="fas fa-globe-asia"></i>Region</td>
                    <td>${element.region}</td></tr>
                <tr><td> <i class="fas fa-globe"></i>Sub Region</td>
                    <td>${element.subregion}</td></tr>
                <tr><td> <i class="fas fa-users-cog"></i>Population</td>
                    <td>${element.population/10000000} Crore</td></tr>
                <tr><td> <i class="fas fa-chart-area"></i>Area:</td>
                    <td>${element.area/1000} Thousand Square KM</td></tr>
                <tr><td rowspan="3"> <i class="fas fa-money-check-alt"></i>Currency:</td>
                    <td>Name: ${element.currencies[0].name}</td></tr>
                <tr><td>Symbol: ${element.currencies[0].code}</td></tr>
                <tr><td>Code: ${element.currencies[0].symbol}</td></tr>
                <tr><td> <i class="fas fa-language"></i>Language</td>
                    <td>${element.languages[0].name}</td></tr>
                    </table>
        </div>
        
        </div>`

    });
    toggleSpinner();
    showcase.innerHTML = html;
}

function toggleSpinner() {
    const test = spinner.classList;
    spinner.classList.toggle("d-none");
    const test2 = spinner.classList;
}

$(function() {
    var availableTags = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    $("#search-input").autocomplete({
        source: availableTags
    });
});