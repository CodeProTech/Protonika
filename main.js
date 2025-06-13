// V3
// --- Atom Database: Symbol, Name, Protons, Neutrons (most common isotope), Electrons ---
const ATOM_DB = [
    {symbol:"H",  name:"Hydrogen",     protons:1,  neutrons:0,  electrons:1},
    {symbol:"He", name:"Helium",       protons:2,  neutrons:2,  electrons:2},
    {symbol:"Li", name:"Lithium",      protons:3,  neutrons:4,  electrons:3},
    {symbol:"Be", name:"Beryllium",    protons:4,  neutrons:5,  electrons:4},
    {symbol:"B",  name:"Boron",        protons:5,  neutrons:6,  electrons:5},
    {symbol:"C",  name:"Carbon",       protons:6,  neutrons:6,  electrons:6},
    {symbol:"N",  name:"Nitrogen",     protons:7,  neutrons:7,  electrons:7},
    {symbol:"O",  name:"Oxygen",       protons:8,  neutrons:8,  electrons:8},
    {symbol:"F",  name:"Fluorine",     protons:9,  neutrons:10, electrons:9},
    {symbol:"Ne", name:"Neon",         protons:10, neutrons:10, electrons:10},
    {symbol:"Na", name:"Sodium",       protons:11, neutrons:12, electrons:11},
    {symbol:"Mg", name:"Magnesium",    protons:12, neutrons:12, electrons:12},
    {symbol:"Al", name:"Aluminum",     protons:13, neutrons:14, electrons:13},
    {symbol:"Si", name:"Silicon",      protons:14, neutrons:14, electrons:14},
    {symbol:"P",  name:"Phosphorus",   protons:15, neutrons:16, electrons:15},
    {symbol:"S",  name:"Sulfur",       protons:16, neutrons:16, electrons:16},
    {symbol:"Cl", name:"Chlorine",     protons:17, neutrons:18, electrons:17},
    {symbol:"Ar", name:"Argon",        protons:18, neutrons:22, electrons:18},
    {symbol:"K",  name:"Potassium",    protons:19, neutrons:20, electrons:19},
    {symbol:"Ca", name:"Calcium",      protons:20, neutrons:20, electrons:20},
    {symbol:"Sc", name:"Scandium",     protons:21, neutrons:24, electrons:21},
    {symbol:"Ti", name:"Titanium",     protons:22, neutrons:26, electrons:22},
    {symbol:"V",  name:"Vanadium",     protons:23, neutrons:28, electrons:23},
    {symbol:"Cr", name:"Chromium",     protons:24, neutrons:28, electrons:24},
    {symbol:"Mn", name:"Manganese",    protons:25, neutrons:30, electrons:25},
    {symbol:"Fe", name:"Iron",         protons:26, neutrons:30, electrons:26},
    {symbol:"Co", name:"Cobalt",       protons:27, neutrons:32, electrons:27},
    {symbol:"Ni", name:"Nickel",       protons:28, neutrons:30, electrons:28},
    {symbol:"Cu", name:"Copper",       protons:29, neutrons:34, electrons:29},
    {symbol:"Zn", name:"Zinc",         protons:30, neutrons:35, electrons:30},
    {symbol:"Ga", name:"Gallium",      protons:31, neutrons:39, electrons:31},
    {symbol:"Ge", name:"Germanium",    protons:32, neutrons:41, electrons:32},
    {symbol:"As", name:"Arsenic",      protons:33, neutrons:42, electrons:33},
    {symbol:"Se", name:"Selenium",     protons:34, neutrons:45, electrons:34},
    {symbol:"Br", name:"Bromine",      protons:35, neutrons:45, electrons:35},
    {symbol:"Kr", name:"Krypton",      protons:36, neutrons:48, electrons:36},
    {symbol:"Rb", name:"Rubidium",     protons:37, neutrons:48, electrons:37},
    {symbol:"Sr", name:"Strontium",    protons:38, neutrons:50, electrons:38},
    {symbol:"Y",  name:"Yttrium",      protons:39, neutrons:50, electrons:39},
    {symbol:"Zr", name:"Zirconium",    protons:40, neutrons:51, electrons:40},
    {symbol:"Nb", name:"Niobium",      protons:41, neutrons:52, electrons:41},
    {symbol:"Mo", name:"Molybdenum",   protons:42, neutrons:54, electrons:42},
    {symbol:"Tc", name:"Technetium",   protons:43, neutrons:55, electrons:43},
    {symbol:"Ru", name:"Ruthenium",    protons:44, neutrons:57, electrons:44},
    {symbol:"Rh", name:"Rhodium",      protons:45, neutrons:58, electrons:45},
    {symbol:"Pd", name:"Palladium",    protons:46, neutrons:60, electrons:46},
    {symbol:"Ag", name:"Silver",       protons:47, neutrons:61, electrons:47},
    {symbol:"Cd", name:"Cadmium",      protons:48, neutrons:64, electrons:48},
    {symbol:"In", name:"Indium",       protons:49, neutrons:66, electrons:49},
    {symbol:"Sn", name:"Tin",          protons:50, neutrons:69, electrons:50},
    {symbol:"Sb", name:"Antimony",     protons:51, neutrons:71, electrons:51},
    {symbol:"Te", name:"Tellurium",    protons:52, neutrons:76, electrons:52},
    {symbol:"I",  name:"Iodine",       protons:53, neutrons:74, electrons:53},
    {symbol:"Xe", name:"Xenon",        protons:54, neutrons:77, electrons:54},
    {symbol:"Cs", name:"Cesium",       protons:55, neutrons:78, electrons:55},
    {symbol:"Ba", name:"Barium",       protons:56, neutrons:81, electrons:56},
    {symbol:"La", name:"Lanthanum",    protons:57, neutrons:82, electrons:57},
    {symbol:"Ce", name:"Cerium",       protons:58, neutrons:82, electrons:58},
    {symbol:"Pr", name:"Praseodymium", protons:59, neutrons:82, electrons:59},
    {symbol:"Nd", name:"Neodymium",    protons:60, neutrons:84, electrons:60},
    {symbol:"Pm", name:"Promethium",   protons:61, neutrons:84, electrons:61},
    {symbol:"Sm", name:"Samarium",     protons:62, neutrons:88, electrons:62},
    {symbol:"Eu", name:"Europium",     protons:63, neutrons:89, electrons:63},
    {symbol:"Gd", name:"Gadolinium",   protons:64, neutrons:93, electrons:64},
    {symbol:"Tb", name:"Terbium",      protons:65, neutrons:94, electrons:65},
    {symbol:"Dy", name:"Dysprosium",   protons:66, neutrons:97, electrons:66},
    {symbol:"Ho", name:"Holmium",      protons:67, neutrons:98, electrons:67},
    {symbol:"Er", name:"Erbium",       protons:68, neutrons:99, electrons:68},
    {symbol:"Tm", name:"Thulium",      protons:69, neutrons:100, electrons:69},
    {symbol:"Yb", name:"Ytterbium",    protons:70, neutrons:103, electrons:70},
    {symbol:"Lu", name:"Lutetium",     protons:71, neutrons:104, electrons:71},
    {symbol:"Hf", name:"Hafnium",      protons:72, neutrons:106, electrons:72},
    {symbol:"Ta", name:"Tantalum",     protons:73, neutrons:108, electrons:73},
    {symbol:"W",  name:"Tungsten",     protons:74, neutrons:110, electrons:74},
    {symbol:"Re", name:"Rhenium",      protons:75, neutrons:111, electrons:75},
    {symbol:"Os", name:"Osmium",       protons:76, neutrons:114, electrons:76},
    {symbol:"Ir", name:"Iridium",      protons:77, neutrons:115, electrons:77},
    {symbol:"Pt", name:"Platinum",     protons:78, neutrons:117, electrons:78},
    {symbol:"Au", name:"Gold",         protons:79, neutrons:118, electrons:79},
    {symbol:"Hg", name:"Mercury",      protons:80, neutrons:122, electrons:80},
    {symbol:"Tl", name:"Thallium",     protons:81, neutrons:123, electrons:81},
    {symbol:"Pb", name:"Lead",         protons:82, neutrons:125, electrons:82},
    {symbol:"Bi", name:"Bismuth",      protons:83, neutrons:126, electrons:83},
    {symbol:"Po", name:"Polonium",     protons:84, neutrons:125, electrons:84},
    {symbol:"At", name:"Astatine",     protons:85, neutrons:125, electrons:85},
    {symbol:"Rn", name:"Radon",        protons:86, neutrons:136, electrons:86},
    {symbol:"Fr", name:"Francium",     protons:87, neutrons:136, electrons:87},
    {symbol:"Ra", name:"Radium",       protons:88, neutrons:138, electrons:88},
    {symbol:"Ac", name:"Actinium",     protons:89, neutrons:138, electrons:89},
    {symbol:"Th", name:"Thorium",      protons:90, neutrons:142, electrons:90},
    {symbol:"Pa", name:"Protactinium", protons:91, neutrons:140, electrons:91},
    {symbol:"U",  name:"Uranium",      protons:92, neutrons:146, electrons:92},
    {symbol:"Np", name:"Neptunium",    protons:93, neutrons:144, electrons:93},
    {symbol:"Pu", name:"Plutonium",    protons:94, neutrons:150, electrons:94},
    {symbol:"Am", name:"Americium",    protons:95, neutrons:148, electrons:95},
    {symbol:"Cm", name:"Curium",       protons:96, neutrons:151, electrons:96},
    {symbol:"Bk", name:"Berkelium",    protons:97, neutrons:150, electrons:97},
    {symbol:"Cf", name:"Californium",  protons:98, neutrons:153, electrons:98},
    {symbol:"Es", name:"Einsteinium",  protons:99, neutrons:153, electrons:99},
    {symbol:"Fm", name:"Fermium",      protons:100,neutrons:157, electrons:100},
    {symbol:"Md", name:"Mendelevium",  protons:101,neutrons:157, electrons:101},
    {symbol:"No", name:"Nobelium",     protons:102,neutrons:157, electrons:102},
    {symbol:"Lr", name:"Lawrencium",   protons:103,neutrons:159, electrons:103},
    {symbol:"Rf", name:"Rutherfordium",protons:104,neutrons:157,electrons:104},
    {symbol:"Db", name:"Dubnium",      protons:105,neutrons:157, electrons:105},
    {symbol:"Sg", name:"Seaborgium",   protons:106,neutrons:160, electrons:106},
    {symbol:"Bh", name:"Bohrium",      protons:107,neutrons:157, electrons:107},
    {symbol:"Hs", name:"Hassium",      protons:108,neutrons:169, electrons:108},
    {symbol:"Mt", name:"Meitnerium",   protons:109,neutrons:168, electrons:109},
    {symbol:"Ds", name:"Darmstadtium", protons:110,neutrons:171, electrons:110},
    {symbol:"Rg", name:"Roentgenium",  protons:111,neutrons:172, electrons:111},
    {symbol:"Cn", name:"Copernicium",  protons:112,neutrons:173, electrons:112},
    {symbol:"Nh", name:"Nihonium",     protons:113,neutrons:173, electrons:113},
    {symbol:"Fl", name:"Flerovium",    protons:114,neutrons:175, electrons:114},
    {symbol:"Mc", name:"Moscovium",    protons:115,neutrons:177, electrons:115},
    {symbol:"Lv", name:"Livermorium",  protons:116,neutrons:177, electrons:116},
    {symbol:"Ts", name:"Tennessine",   protons:117,neutrons:177, electrons:117},
    {symbol:"Og", name:"Oganesson",    protons:118,neutrons:176, electrons:118}
];

// Physical Constants and Configuration
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

const BLACK_HOLE_PHYSICS = {
    SCHWARZSCHILD_RADIUS: 40,
    GRAVITY_STRENGTH: 12000,
    EVENT_HORIZON_SIZE: 35,
    ACCRETION_DISK_SIZE: 80,
    HAWKING_RADIATION_RATE: 0.00001,
    MIN_MASS_FOR_BLACK_HOLE: 100,
    SPACE_DISTORTION: 2.5
};
// Physical Constants
const MASS_PROTON = 1.0;
const MASS_NEUTRON = 1.0;
const MASS_ELECTRON = 1/1836;
const RADIUS_PROTON = 12;
const RADIUS_NEUTRON = 12;
const RADIUS_ELECTRON = 2;

const canvas = document.getElementById("atomCanvas");
const ctx = canvas.getContext("2d");

class Particle {
    constructor(x, y, charge, mass, type, vx=0, vy=0) {
        this.pos = { x, y };
        this.vel = { x: vx, y: vy };
        this.charge = charge;
        this.mass = mass;
        this.type = type;
        this.radius = (type === "proton") ? RADIUS_PROTON :
            (type === "neutron") ? RADIUS_NEUTRON : RADIUS_ELECTRON;
    }

    // [Core methods of the Particle class handling motion, forces and interactions]
    distanceTo(other) {
        const dx = other.pos.x - this.pos.x;
        const dy = other.pos.y - this.pos.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    directionTo(other) {
        const dx = other.pos.x - this.pos.x;
        const dy = other.pos.y - this.pos.y;
        const dist = this.distanceTo(other);
        return dist === 0 ? { x: 0, y: 0 } : { x: dx / dist, y: dy / dist };
    }

    forceFrom(other) {
        let k = 3200;
        let r = this.distanceTo(other);
        if (r === 0) return { x: 0, y: 0 };
        const dir = this.directionTo(other);

        let forceX = 0, forceY = 0;

        // COULOMB
        if (this.charge !== 0 && other.charge !== 0) {
            const minR = RADIUS_PROTON * 1.5;
            let softR = Math.max(r, minR);
            let coulomb = k * this.charge * other.charge / (softR * softR);
            forceX += dir.x * coulomb;
            forceY += dir.y * coulomb;

            // Pauli repulsion force between electrons (quantum mechanical effect)
            if (this.type === "electron" && other.type === "electron" && r < 10) {
                let pauli = 150000 / (r * r);
                forceX += dir.x * pauli;
                forceY += dir.y * pauli;
            }
        }

        // STRONG NUCLEAR FORCE (binding force between nucleons)
        if (this.type !== "electron" && other.type !== "electron") {
            let nuclearRange = 35;
            if (r < nuclearRange) {
                let strength = 95000;
                if (this.type !== other.type) strength *= 1.22;
                if (this.type === "proton" && other.type === "proton") strength *= 0.85;
                let nuclearF = strength * Math.exp(-5.2 * r / nuclearRange);
                forceX += dir.x * nuclearF;
                forceY += dir.y * nuclearF;

                // Hard-core repulsion when nucleons overlap (quantum mechanical effect)
                let rMin = RADIUS_PROTON * 1.18;
                if (r < rMin) {
                    let rep = -900000 * (1 - r/rMin);
                    forceX += dir.x * rep;
                    forceY += dir.y * rep;
                }
            }
        }
        return { x: forceX, y: forceY };
    }

    update(forces, deltaTime) {
        let fx = 0, fy = 0;
        for (const f of forces) { fx += f.x; fy += f.y; }
        let damping = (this.type === "electron") ? 0.985 : 0.91;
        let ax = fx / this.mass;
        let ay = fy / this.mass;

        this.vel.x += ax * deltaTime;
        this.vel.y += ay * deltaTime;
        this.vel.x *= damping;
        this.vel.y *= damping;

        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;

        // Canvas boundary collision handling
        if (this.pos.x < this.radius) {
            this.pos.x = this.radius; this.vel.x *= -0.8;
        }
        if (this.pos.x > canvas.width - this.radius) {
            this.pos.x = canvas.width - this.radius; this.vel.x *= -0.8;
        }
        if (this.pos.y < this.radius) {
            this.pos.y = this.radius; this.vel.y *= -0.8;
        }
        if (this.pos.y > canvas.height - this.radius) {
            this.pos.y = canvas.height - this.radius; this.vel.y *= -0.8;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        if (this.type === "proton") {
            ctx.shadowColor = "#ffbbbb";
            ctx.shadowBlur = 16;
            ctx.fillStyle = "#ff5555";
        } else if (this.type === "neutron") {
            ctx.shadowColor = "#cccccc";
            ctx.shadowBlur = 10;
            ctx.fillStyle = "#bbbbbb";
        } else if (this.type === "electron") {
            ctx.shadowColor = "#43aaff";
            ctx.shadowBlur = 18;
            ctx.fillStyle = "#43aaff";
        }
        ctx.globalAlpha = (this.type === "electron") ? 0.97 : 0.98;
        ctx.fill();
        ctx.restore();
    }
}

// Helper functions for nucleus detection and stability analysis
// These functions analyze particle clusters and determine their nuclear properties
function findNuclei(particles, threshold = RADIUS_PROTON*2.5) {
    const clusters = [];
    const visited = new Set();

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if ((p.type === "proton" || p.type === "neutron") && !visited.has(i)) {
            const cluster = [p];
            visited.add(i);
            let changed = true;
            while (changed) {
                changed = false;
                for (let j = 0; j < particles.length; j++) {
                    if (visited.has(j)) continue;
                    const q = particles[j];
                    if (q.type === "proton" || q.type === "neutron") {
                        for (let k = 0; k < cluster.length; k++) {
                            if (cluster[k].distanceTo(q) < threshold) {
                                cluster.push(q);
                                visited.add(j);
                                changed = true;
                                break;
                            }
                        }
                    }
                }
            }
            if (cluster.length >= 2) clusters.push(cluster);
        }
    }
    return clusters;
}

function isStableNucleus(protons, neutrons) {
    if (protons === 1 && neutrons === 0) return true;
    if (protons === 2 && neutrons === 2) return true;
    if (protons === 3 && neutrons === 4) return true;
    if (protons === 6 && neutrons === 6) return true;
    if (protons === 8 && neutrons === 8) return true;
    if (protons === 26 && neutrons === 30) return true;
    if (protons > 0 && neutrons > 0 && Math.abs(protons-neutrons)<=2 && protons+neutrons<20) return true;
    if (protons > 0 && neutrons > 0 && Math.abs(neutrons-protons)<=4 && protons+neutrons>=20 && protons+neutrons<=58) return true;
    return false;
}

// Particle array and particle generation functions for atoms and custom configurations
let particles = [];

function spawnParticles(Np, Nn, Ne) {
    for(let i=0;i<Np;i++) {
        const px = RADIUS_PROTON + Math.random() * (canvas.width - 2*RADIUS_PROTON);
        const py = RADIUS_PROTON + Math.random() * (canvas.height - 2*RADIUS_PROTON);
        const vx = (Math.random()-0.5)*60, vy = (Math.random()-0.5)*60;
        particles.push(new Particle(px, py, +1, MASS_PROTON, "proton", vx, vy));
    }
    for(let i=0;i<Nn;i++) {
        const px = RADIUS_NEUTRON + Math.random() * (canvas.width - 2*RADIUS_NEUTRON);
        const py = RADIUS_NEUTRON + Math.random() * (canvas.height - 2*RADIUS_NEUTRON);
        const vx = (Math.random()-0.5)*60, vy = (Math.random()-0.5)*60;
        particles.push(new Particle(px, py, 0, MASS_NEUTRON, "neutron", vx, vy));
    }
    for(let i=0;i<Ne;i++) {
        const px = RADIUS_ELECTRON + Math.random() * (canvas.width - 2*RADIUS_ELECTRON);
        const py = RADIUS_ELECTRON + Math.random() * (canvas.height - 2*RADIUS_ELECTRON);
        const vx = (Math.random()-0.5)*140, vy = (Math.random()-0.5)*140;
        particles.push(new Particle(px, py, -1, MASS_ELECTRON, "electron", vx, vy));
    }
}

function spawnAtomCluster(atom, cx, cy) {
    const nucleons = [];
    const nNuk = atom.protons + atom.neutrons;
    const angleStep = 2 * Math.PI / Math.max(nNuk,1);
    let rKern = Math.max(18, 5 + 5 * Math.sqrt(nNuk));
    let used = 0;

    for(let i=0;i<atom.protons;i++,used++) {
        const angle = angleStep * used + Math.random()*0.1;
        const r = rKern * (0.5 + Math.random()*0.5);
        nucleons.push({type:"proton", x:cx + r*Math.cos(angle), y:cy + r*Math.sin(angle)});
    }
    for(let i=0;i<atom.neutrons;i++,used++) {
        const angle = angleStep * used + Math.random()*0.1;
        const r = rKern * (0.5 + Math.random()*0.5);
        nucleons.push({type:"neutron", x:cx + r*Math.cos(angle), y:cy + r*Math.sin(angle)});
    }

    nucleons.forEach(nuk => {
        let vx = (Math.random()-0.5)*20, vy = (Math.random()-0.5)*20;
        if (nuk.type === "proton") {
            particles.push(new Particle(nuk.x, nuk.y, +1, MASS_PROTON, "proton", vx, vy));
        } else {
            particles.push(new Particle(nuk.x, nuk.y, 0, MASS_NEUTRON, "neutron", vx, vy));
        }
    });

    let shells = [2,8,18,32,32,18,8,2];
    let left = atom.electrons;
    let shellR = rKern + 30;

    for(let s=0; s<shells.length && left > 0; s++) {
        let nS = Math.min(left, shells[s]);
        for(let e=0; e<nS; e++) {
            let phi = (2*Math.PI/nS)*e + Math.random()*0.1;
            let r = shellR + Math.random()*9;
            let ex = cx + r*Math.cos(phi);
            let ey = cy + r*Math.sin(phi);
            let v = 55 + Math.random()*30;
            let vx = -Math.sin(phi) * v * (Math.random()*0.3+0.85);
            let vy = Math.cos(phi) * v * (Math.random()*0.3+0.85);
            particles.push(new Particle(ex, ey, -1, MASS_ELECTRON, "electron", vx, vy));
        }
        left -= nS;
        shellR += 22;
    }
}

function spawnAtom(atom, amount=1) {
    if(amount <= 0) return;
    let centers = [];
    if(amount === 1) {
        centers = [[canvas.width/2, canvas.height/2]];
    } else {
        let R = Math.min(canvas.width, canvas.height) * 0.30;
        let cx = canvas.width/2, cy = canvas.height/2;
        for(let i=0;i<amount;i++) {
            let phi = 2*Math.PI * i/amount;
            centers.push([cx + R*Math.cos(phi), cy + R*Math.sin(phi)]);
        }
    }
    centers.forEach(([x,y]) => spawnAtomCluster(atom, x, y));
}

function drawElectronClouds(nuclei) {
    ctx.save();
    for (const cluster of nuclei) {
        let sx = 0, sy = 0, protons = 0, n = 0;
        for (const t of cluster) {
            sx += t.pos.x; sy += t.pos.y;
            if (t.type === "proton") protons++;
            n++;
        }
        const mx = sx/n, my = sy/n;
        ctx.globalAlpha = 0.13;
        let shells = [2, 8, 18, 32];
        let left = protons;
        let rStart = 40;
        for (let s=0; s<shells.length; s++) {
            let nS = Math.min(left, shells[s]);
            if(nS===0) continue;
            let r = rStart + 24*s;
            for (let e=0; e<nS; e++) {
                let phi = (2*Math.PI/nS)*e + Math.random()*0.19;
                for(let j=0;j<50;j++) {
                    let fuzz = 5+Math.random()*12;
                    let x = mx + (r+fuzz)*Math.cos(phi + Math.random()*0.19);
                    let y = my + (r+fuzz)*Math.sin(phi + Math.random()*0.19);
                    ctx.beginPath();
                    ctx.arc(x, y, 1.0, 0, 2*Math.PI);
                    ctx.fillStyle = "#43aaff";
                    ctx.fill();
                }
            }
            left -= nS;
            if (left<=0) break;
        }
    }
    ctx.restore();
}

function simulate(deltaTime) {
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const forces = [];
        for (let j = 0; j < particles.length; j++) {
            if (i === j) continue;
            forces.push(p.forceFrom(particles[j]));
        }
        p.update(forces, deltaTime);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nuclei = findNuclei(particles, RADIUS_PROTON*2.35);

    ctx.save();
    for (const cluster of nuclei) {
        let sx = 0, sy = 0, protonen = 0, neutronen = 0;
        for (const t of cluster) {
            sx += t.pos.x; sy += t.pos.y;
            if (t.type === "proton") protonen++;
            else if (t.type === "neutron") neutronen++;
        }
        const mx = sx / cluster.length, my = sy / cluster.length;
        const stable = isStableNucleus(protonen, neutronen);

        ctx.globalAlpha = 0.19;
        ctx.strokeStyle = stable ? "#ffff00" : "#ff0033";
        ctx.lineWidth = 3.3;
        ctx.beginPath();
        ctx.arc(mx, my, Math.max(24, 13+cluster.length*5.6), 0, 2 * Math.PI);
        ctx.stroke();
    }
    ctx.restore();

    drawElectronClouds(nuclei);

    for (const p of particles) {
        p.draw(ctx);
    }
}

let lastTime = performance.now();
function loop() {
    const now = performance.now();
    const deltaTime = (now - lastTime) / 1000;
    lastTime = now;
    const subSteps = 7;
    for (let i=0; i<subSteps; i++) simulate(deltaTime/subSteps);
    draw();
    requestAnimationFrame(loop);
}
loop();

// UI Event Handlers
function resetAll() {
    particles = [];
}

document.getElementById("resetBtn").onclick = resetAll;

document.getElementById("customSpawnBtn").onclick = () => {
    let p = parseInt(document.getElementById("protonCount").value) || 0;
    let n = parseInt(document.getElementById("neutronCount").value) || 0;
    let e = parseInt(document.getElementById("electronCount").value) || 0;
    spawnParticles(p, n, e);
};

document.getElementById("atomSpawnBtn").onclick = () => {
    let idx = document.getElementById("atomSelect").selectedIndex;
    let amount = parseInt(document.getElementById("atomAmount").value) || 1;
    if(idx >= 0 && filteredAtoms[idx]) {
        let atom = filteredAtoms[idx];
        spawnAtom(atom, amount);
    }
};

// Atom selection with search functionality for periodic table elements
const atomSelect = document.getElementById("atomSelect");
const atomSearch = document.getElementById("atomSearch");
let filteredAtoms = ATOM_DB.slice();

function updateAtomDropdown() {
    let query = atomSearch.value.toLowerCase();
    filteredAtoms = ATOM_DB.filter(a =>
        a.symbol.toLowerCase().includes(query) ||
        a.name.toLowerCase().includes(query)
    );
    atomSelect.innerHTML = "";
    filteredAtoms.forEach(atom => {
        let opt = document.createElement("option");
        opt.value = atom.symbol;
        opt.textContent = `${atom.symbol} – ${atom.name} (${atom.protons}p, ${atom.neutrons}n, ${atom.electrons}e)`;
        atomSelect.appendChild(opt);
    });
    if(filteredAtoms.length > 0) atomSelect.selectedIndex = 0;
}

atomSearch.addEventListener("input", updateAtomDropdown);
updateAtomDropdown();

// Enter key shortcuts for quick atom/particle spawning
atomSearch.addEventListener("keydown", function(e) {
    if(e.key === "Enter") document.getElementById("atomSpawnBtn").click();
});

document.getElementById("atomAmount").addEventListener("keydown", function(e) {
    if(e.key === "Enter") document.getElementById("atomSpawnBtn").click();
});

document.getElementById("protonCount").addEventListener("keydown", function(e) {
    if(e.key === "Enter") document.getElementById("customSpawnBtn").click();
});

document.getElementById("neutronCount").addEventListener("keydown", function(e) {
    if(e.key === "Enter") document.getElementById("customSpawnBtn").click();
});

document.getElementById("electronCount").addEventListener("keydown", function(e) {
    if(e.key === "Enter") document.getElementById("customSpawnBtn").click();
});
