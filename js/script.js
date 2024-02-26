function validateTelegramUsername(event) {
    event.preventDefault();
    var telegramUsername = document.getElementById("telegramUsername");
    var usernameValue = telegramUsername.value.trim();
    if (usernameValue === "") {
        alert("Please enter your Telegram username before subscribing.");
    } else if (!usernameValue.startsWith("@")) {
        alert("Please enter your Telegram username with '@' prefix.");
        // Tambahkan class 'error' ke input jika tidak dimulai dengan '@'
        telegramUsername.classList.add("error");
    } else {
        window.location.href = "https://t.me/androdigitalmarket";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah formulir dari pengiriman default

        // Mendapatkan nilai dari inputan pengguna
        const name = document.getElementById('name').value.trim();
        const countryCode = document.getElementById('countryCode').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const service = document.getElementById('service').value.trim();
        const message = document.getElementById('message').value.trim();

        // Tidak ada pola yang diperlukan untuk kode negara dan nomor telepon

        if (name === '' || countryCode === '' || phoneNumber === '' || service === '' || message === '') {
            alert('Please fill in all fields correctly before sending.');
        } else {
            // Format pesan yang akan dikirimkan ke WhatsApp
            const whatsappMessage = `Nama: ${name}%0A`
                + `Nomor: ${countryCode}${phoneNumber}%0A`
                + `Servis: ${service}%0A`
                + `Pesan: ${message}`;

            // Mengarahkan ke tautan WhatsApp dengan pesan yang diformat
            window.location.href = `https://wa.me/6281283307615?text=${whatsappMessage}`;
        }
    });
});

function validateTelegramUsername(event) {
    event.preventDefault();
    var input = document.getElementById('telegramUsername');
    var username = input.value.trim();

    // Check if username starts with '@' and has at least one character after '@'
    if (!username.startsWith('@') || username.length <= 1) {
        input.classList.add('error');
        return;
    }

    // Check if the rest of the username contains only alphanumeric characters and underscores
    var pattern = /^[A-Za-z0-9_]+$/;
    if (!pattern.test(username.substr(1))) {
        input.classList.add('error');
        return;
    }

    // If the username is valid, redirect to t.me/androklemens
    window.location.href = 'https://t.me/androklemens';
}

function removeErrorClass() {
    var input = document.getElementById('telegramUsername');
    input.classList.remove('error');
}

// script.js

$(document).ready(function() {
    // Define the available services and their corresponding additional services
    var servicesWithAdditionalOptions = {
        "DigitalOcean (VPS/RDP)": [
            "Silahkan Pilih Spesifikasinya",
            "1 VCPU 1 GB RAM 1 TB BW = Rp. 35.000,-",
            "1 VCPU 2 GB RAM 2 TB BW = Rp. 50.000,-",
            "2 VCPU 2 GB RAM 3 TB BW = Rp. 65.000,-",
            "2 VCPU 4 GB RAM 4 TB BW = Rp. 85.000,-",
            "4 VCPU 8 GB RAM 5 TB BW = Rp. 130.000,-"
        ],

        "DigitalOcean (Harian)": [
            "Silahkan Pilih Spesifikasinya",
            "2 VCPU 4 GB RAM = Rp. 20.000,-",
            "4 VCPU 8 GB RAM = Rp. 25.000,-",
            "8 VCPU 16 GB RAM = Rp. 30.000,-",
            "8 VCPU 32 GB RAM = Rp. 45.000,-",
        ],

        "Linode Akamai (VPS/RDP)": [
            "Silahkan Pilih Spesifikasinya",
            "1 VCPU 1 GB RAM 1 TB BW = Rp. 35.000,-",
            "1 VCPU 2 GB RAM 2 TB BW = Rp. 50.000,-",
            "2 VCPU 4 GB RAM 4 TB BW = Rp. 85.000,-",
            "4 VCPU 8 GB RAM 5 TB BW = Rp. 130.000,-"
        ],

        "Panel Cloud": [
            "Silahkan Pilih Spesifikasinya",
            "Microsoft Azure FT = Rp. 85.000,-",
            "DigitalOcean 03 Drop = Rp. 155.000,-",
            "DigitalOcean 10 Drop = Rp. 210.000,-",
        ],

        "Panel Cloud": [
            "Silahkan Pilih Spesifikasinya",
            "Microsoft Azure FT = Rp. 85.000,-",
            "DigitalOcean 03 Drop = Rp. 155.000,-",
            "DigitalOcean 10 Drop = Rp. 210.000,-",
        ],
        // Add more services and corresponding options as needed
    };    

    // Function to update the options for Another Service dropdown with transition
    function updateAnotherServiceOptions() {
        var selectedService = $("#service").val();
        var service2Dropdown = $("#service2");
        var panelCloudOption = $("#panelCloudOption");

        // If no service is selected, hide the Another Service dropdown
        if (!selectedService) {
            service2Dropdown.fadeOut(300);
            panelCloudOption.fadeOut(300);
        } else {
            // If a service is selected, show and update the Another Service dropdown
            service2Dropdown.empty().fadeIn(300);
            panelCloudOption.fadeOut(300);

            var additionalOptions = servicesWithAdditionalOptions[selectedService] || [];

            // Add new options based on selected service
            for (var i = 0; i < additionalOptions.length; i++) {
                service2Dropdown.append('<option value="' + additionalOptions[i] + '">' + additionalOptions[i] + '</option>');
            }
        }
    }

     // Event listener for changes in the "Service" dropdown with transition
     $("#service").change(function() {
        // Trigger the update function
        updateAnotherServiceOptions();
    });

     // Initial update based on the default selected service
     updateAnotherServiceOptions();
    });

