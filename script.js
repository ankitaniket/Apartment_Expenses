function showDetails() {
    var selectedOption = document.getElementById("names").value;
    var url = "https://script.googleusercontent.com/macros/echo?user_content_key=X7jIcrlGkaH1kca4sLnxTu7O8eFXoADH7qOwIdrXpYAXsXH4ZCJy-TSccsh4cNlOK4GZk7DdW7hkxuqoRhsnWAwxnVNIUojGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFecVD4fy0tJ9yTyKcZhZG9rWp6oQEFmLHaPG9Zhn4MOUsWiUcUkOiKuQzS9WQvCe-OB2TYD-kIlkvOfXOdfYkWgDOOzNGoubdz9Jw9Md8uu&lib=M7zqmwJEv-Dnz6DiQ8ENENggF_AUVVqqP#";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                var details = data[selectedOption];
                document.getElementById("bal-cary").innerHTML = details.BalCaryFrd.toFixed(2);
                document.getElementById("bal-back").innerHTML = details.BalBack.toFixed(2);
                document.getElementById("bal-exp").innerHTML = details.BalExp.toFixed(2);
                document.getElementById("deposit").innerHTML = details.Deposite.toFixed(2);
                document.getElementById("details-table").style.display = "table";
                document.getElementById("loader").style.display = "none";
            } else {
                console.log("Error loading data.");
            }
        }
    };
    xhr.send();
    document.getElementById("details-table").style.display = "none";
    document.getElementById("loader").style.display = "block";
}

window.onload = function() {
    showDetails();
};