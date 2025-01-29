const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
        <table border="1">
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.which || e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `;
});
