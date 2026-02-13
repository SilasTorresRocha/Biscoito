async function verCalendario() {
    const token = localStorage.getItem('token'); // Pega o crachá guardado no login
    
    try {
        const response = await fetch('/calendario', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}` // Coloca o crachá no cabeçalho
            }
        });

        if (response.ok) {
            const html = await response.text(); // O Python mandou o texto do HTML
            document.open();
            document.write(html);
            document.close();
        } else {
            alert("Sessão expirada. Faça login novamente.");
            window.location.href = "/"; // Se o token falhar, volta pro Login
        }
    } catch (error) {
        console.error('Erro de conexão:', error);
    }
}