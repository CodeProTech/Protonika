const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Statische Dateien servieren
app.use(express.static(path.join(__dirname)));

// Route für die Hauptseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});