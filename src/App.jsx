import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white p-8">
      {/* Encabezado */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-2">Kylian Mbappé</h1>
        <p className="text-center text-blue-300 text-xl mb-12">La Joven Sensación del Fútbol Mundial</p>

        {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Foto y datos básicos */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full mb-6 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <p className="text-6xl font-bold">⚡</p>
                <p className="text-sm mt-2">Kylian Mbappé</p>
              </div>
            </div>
            <div className="bg-blue-700 bg-opacity-50 rounded-lg p-6 w-full">
              <h2 className="text-2xl font-bold mb-4">Información Básica</h2>
              <ul className="space-y-2">
                <li><span className="font-bold">Nombre:</span> Kylian Azeez Mbappé Lottin</li>
                <li><span className="font-bold">Fecha de Nacimiento:</span> 20 de Diciembre de 1998</li>
                <li><span className="font-bold">Nacionalidad:</span> 🇫🇷 Francia</li>
                <li><span className="font-bold">Altura:</span> 1.80 m</li>
                <li><span className="font-bold">Posición:</span> Delantero</li>
                <li><span className="font-bold">Pie Dominante:</span> Derecho</li>
              </ul>
            </div>
          </div>

          {/* Estadísticas */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Carrera Profesional</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Clubes</h3>
                <ul className="space-y-1">
                  <li>🔴 <span className="font-bold">AS Mónaco</span> (2015-2017)</li>
                  <li>🔵 <span className="font-bold">París Saint-Germain</span> (2017-2023)</li>
                  <li>⚪ <span className="font-bold">Real Madrid</span> (2023-Presente)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Logros Destacados</h3>
                <ul className="space-y-1 text-sm">
                  <li>🏆 Campeón del Mundo (2018, 2022)</li>
                  <li>🥇 Mejor Joven del Mundo (2018)</li>
                  <li>⭐ 4 Premios Ligue 1 (PSG)</li>
                  <li>🎯 +300 Goles en carrera</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Características</h3>
                <ul className="space-y-1 text-sm">
                  <li>⚡ Velocidad Excepcional</li>
                  <li>🎯 Definición Clínica</li>
                  <li>🏃 Aceleración Explosiva</li>
                  <li>🧠 Visión de Juego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas detalladas */}
        <div className="bg-blue-800 bg-opacity-60 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Estadísticas en Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-blue-700 rounded-lg p-4 text-center">
              <p className="text-4xl font-bold text-yellow-400">350+</p>
              <p className="text-sm mt-2">Goles</p>
            </div>
            <div className="bg-blue-700 rounded-lg p-4 text-center">
              <p className="text-4xl font-bold text-yellow-400">150+</p>
              <p className="text-sm mt-2">Asistencias</p>
            </div>
            <div className="bg-blue-700 rounded-lg p-4 text-center">
              <p className="text-4xl font-bold text-yellow-400">2</p>
              <p className="text-sm mt-2">Mundiales</p>
            </div>
            <div className="bg-blue-700 rounded-lg p-4 text-center">
              <p className="text-4xl font-bold text-yellow-400">25</p>
              <p className="text-sm mt-2">Años</p>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="text-center text-gray-400 border-t border-blue-700 pt-8">
          <p className="text-sm">Infografía - Kylian Mbappé | Actualizado en 2026</p>
        </div>
      </div>
    </div>
  )
}