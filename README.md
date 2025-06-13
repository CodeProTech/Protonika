# Protonika

<div align="center">

<img src="https://github.com/user-attachments/assets/c7502137-e765-497a-b244-284fb5944547" alt="Protonika Logo" width="200"/>

*Explore the Quantum World: An Interactive Atomic Particle Simulator*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow.svg)](https://javascript.com)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://protonika.onrender.com)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--06--13-blue.svg)](https://github.com/CodeProTech/Protonika/commits/main)

[Try it Online!](https://protonika.onrender.com) | [View on GitHub](https://github.com/CodeProTech/Protonika) | [Report Bug](https://github.com/CodeProTech/Protonika/issues)

</div>

## ⚛️ What is Protonika?

Protonika is a state-of-the-art 2D particle physics simulator that brings atomic interactions to life in your browser. Experience the fascinating world of quantum mechanics through an intuitive and interactive interface.

### [🌐 Live Demo](https://protonika.onrender.com)

## 🎯 Core Features

### Particle Physics Simulation
- **Protons**: Positively charged nuclear particles
- **Neutrons**: Neutral nuclear particles
- **Electrons**: Negatively charged particles forming electron clouds
- **Real-time force calculations** between all particles

### Complete Periodic Table
- All 118 elements from Hydrogen to Oganesson
- Accurate particle counts for each element
- Most common isotope configurations

### Interactive Features
- Spawn any element from the periodic table
- Create custom particle combinations
- Multiple atom spawning
- Real-time stability analysis
- Dynamic electron shell visualization

## 🚀 Try It Out

Visit [https://protonika.onrender.com](https://protonika.onrender.com) to experience the simulator!

### Local Development
```bash
git clone https://github.com/CodeProTech/Protonika.git
cd Protonika
# Open index.html in your browser
```

## 💻 Implementation

### Key Physics Constants
```javascript
const PHYSICS = {
    COULOMB_CONSTANT: 3200,
    NUCLEAR_STRENGTH: 95000,
    NUCLEAR_RANGE: 35,
    ELECTRON_SHELL_OPACITY: 0.08,
    ELECTRON_CLOUD_DENSITY: 75,
    QUANTUM_LEVELS: [2, 8, 18, 32, 32, 18],
    SHELL_SPACING: 28,
    ELECTRON_VELOCITY_BASE: 55,
    ELECTRON_DAMPING: 0.985,
    NUCLEAR_DAMPING: 0.91,
    PAULI_STRENGTH: 150000
};
```

### Particle Properties
| Particle  | Mass    | Charge | Radius | Visualization |
|-----------|---------|--------|--------|---------------|
| Proton    | 1.0     | +1     | 12     | Red glow     |
| Neutron   | 1.0     | 0      | 12     | Gray         |
| Electron  | 1/1836  | -1     | 2      | Blue glow    |

### Force Interactions
- **Electromagnetic**: Coulomb forces between charged particles
- **Strong Nuclear**: Binding force between nucleons
- **Quantum Effects**: Close-range electron repulsion
- **Stability Analysis**: Real-time nucleus configuration assessment

## 🎮 How to Use

### Spawning Elements
1. Select an element from the periodic table dropdown
2. Choose the number of atoms (1-10)
3. Click "Spawn Atom" or press Enter

### Custom Particles
1. Enter desired numbers for:
   - Protons
   - Neutrons
   - Electrons
2. Click "Spawn Particles" or press Enter

## 🔬 Technical Details

### Core Algorithms
- Nucleus detection using clustering
- Electron shell distribution
- Force calculation with multi-step integration
- Stability analysis based on proton-neutron ratios

### Performance
- Efficient particle interaction calculations
- Optimized rendering with HTML5 Canvas
- Smooth animation with requestAnimationFrame

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Developer**: [Stefanos](https://github.com/CodeProTech)
- **Email**: [stefanoskoufogazos@outlook.com](mailto:stefanoskoufogazos@outlook.com)
- **Issues**: [Bug Reports](https://github.com/CodeProTech/Protonika/issues)
- 
## 🌟 Acknowledgments

- Built using modern web technologies
- Based on fundamental physics principles
- Inspired by quantum mechanics and nuclear physics

---

<div align="center">

### Experience Protonika Now!
[Launch Simulator](https://protonika.onrender.com) | [View Source](https://github.com/CodeProTech/Protonika)

Made with 💫 by [Stefanos](https://github.com/CodeProTech)

</div>
