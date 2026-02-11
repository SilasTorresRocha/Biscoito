async function verCalendario() {
    const token = localStorage.getItem('token'); // Onde você guardou o token no login

    const response = await fetch('/calendario', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}` // Ou como seu Depends espera receber
        }
    });

    if (response.ok) {
        const html = await response.text();
        document.open();
        document.write(html);
        document.close();
    } else {
        alert("Sessão expirada ou acesso negado.");
    }
}