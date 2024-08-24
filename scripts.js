const khodamOptions = [
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
    'wibu akut',];

    function cekKhodam() {
        const name = document.getElementById('name').value.trim();
        const resultDiv = document.getElementById('result');
    
        if (name === '') {
            resultDiv.innerText = 'Silakan masukkan nama Anda.';
            return;
        }
    
        // Ambil data khodam yang disimpan untuk nama ini
        const storedKhodam = localStorage.getItem(name);
    
        if (storedKhodam) {
            // Jika khodam sudah ada untuk nama ini, tampilkan khodam tersebut
            resultDiv.innerText = 'Khodam Anda adalah: ' + storedKhodam + '.';
        } else {
            // Pilih khodam baru secara acak
            const randomIndex = Math.floor(Math.random() * khodamOptions.length);
            const selectedKhodam = khodamOptions[randomIndex];
    
            // Simpan khodam yang dipilih untuk nama ini di localStorage
            localStorage.setItem(name, selectedKhodam);
    
            // Tampilkan hasil
            resultDiv.innerText = 'Khodam Anda adalah: ' + selectedKhodam + '.';
        }
    }