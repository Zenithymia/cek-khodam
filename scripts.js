function cekKhodam() {
    var name = document.getElementById('name').value;
    var resultText = '';

    if (name.trim() === '') {
        resultText = 'Silakan masukkan nama Anda.';
    } else {
        // Daftar opsi khodam
        var khodamOptions = [
            'Ban dalem',
            'Ban tubeless',
            'Pentil ban',
            'Gitar spanyol',
            'Knalpot racing',
            'kunti bogel',
            'sepeda rongsok',
            'suster ngentod',
            'sapi beler',
            'zeus selot',
            'sabun bolong',
            'wibu akut',
        ];

        // Pilih khodam secara acak dari daftar
        var randomIndex = Math.floor(Math.random() * khodamOptions.length);
        resultText = 'Khodam Anda adalah: ' + khodamOptions[randomIndex] + '.';
    }

    document.getElementById('result').innerText = resultText;
}
