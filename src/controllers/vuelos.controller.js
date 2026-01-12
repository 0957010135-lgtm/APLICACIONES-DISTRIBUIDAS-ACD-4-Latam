// Datos simulados
const vuelos = [
  { id: 1, aerolinea: "LATAM", origen: "Quito", destino: "Guayaquil", fecha: "2025-09-30", hora: "10:30", disponibilidad: 25 },
  { id: 2, aerolinea: "LATAM", origen: "Quito", destino: "Bogotá", fecha: "2025-09-30", hora: "12:00", disponibilidad: 20 },
  { id: 3, aerolinea: "AVIANCA", origen: "Guayaquil", destino: "Lima", fecha: "2025-09-30", hora: "14:00", disponibilidad: 15 },
  { id: 4, aerolinea: "LATAM", origen: "Quito", destino: "Lima", fecha: "2025-09-30", hora: "16:00", disponibilidad: 10 }
];

// Función controladora
exports.obtenerVuelos = (req, res) => {
  try {
    const { aerolinea } = req.query;
    if (!aerolinea) {
      return res.status(400).json({
        success: false,
        message: "Debe proporcionar el parámetro 'aerolinea'"
      });
    }

    const resultados = vuelos.filter(
      v => v.aerolinea.toLowerCase() === aerolinea.toLowerCase()
    );

    res.json({
      success: true,
      data: resultados
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al consultar vuelos"
    });
  }
};
